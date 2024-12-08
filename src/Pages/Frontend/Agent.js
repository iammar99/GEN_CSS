import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import
import '../../SCSS/Components/Pages/_agent.scss';
import Groq from 'groq-sdk';
import HTMLCSSPreview from 'Components/Preview/Preview';
import CodeEditor from 'Components/Editor/Editor';

const GenCSSAgentPage = () => {
  const [htmlInput, setHtmlInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [cssInput, setCssInput] = useState('');

  // Function to get css
  const onChange = useCallback((newCssInput) => {
    setCssInput(newCssInput);
  }, []);

  const API_KEY = process.env.REACT_APP_GROQ_API;
  const groq = new Groq({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

  const generateCSS = async () => {
    const cssCompletion = await getGroqCSSCompletion(htmlInput, descriptionInput);
    const cssCode = cssCompletion.choices[0]?.message?.content || '';
    const pureCSSCode = cssCode.replace(/`/g, '').trim();

    setCssInput(pureCSSCode);
  };

  async function getGroqCSSCompletion(htmlInput, descriptionInput) {
    const systemPrompt = `
      You are a professional CSS assistant. Your task is to generate optimized, modern, and responsive CSS styles for a given HTML structure. 
      Focus on the design theme described by the user, ensuring it aligns with their requirements. 
      Your response should be valid CSS code only—do not include any explanations, comments, or additional text.
    `;

    return groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `Generate CSS for the following HTML content according to this description: "${descriptionInput}".\n\nHTML:\n${htmlInput}`,
        },
      ],
      model: "llama3-8b-8192",
    });
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssInput)
      .then(() => alert("CSS copied to clipboard!"))
      .catch((err) => alert("Failed to copy text: " + err));
  };

  return (
    <section>
      <Link to={"/"}>
        <img src={logo} style={{ width: "60px", margin: "41px 0px 11px 41px", borderRadius: "30%" }} alt="logo" />
      </Link>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            {/* HTML Input Section */}
            <h3>HTML Input</h3>
            <textarea
              className="form-control mb-3"
              placeholder="Enter your HTML code here..."
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
              rows="16"
            />

            {/* Description Section */}
            <h3 className='mt-3'>Description</h3>
            <textarea
              className="form-control mb-3"
              placeholder="Describe what you want to build (color theme, layout, etc.)"
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
              rows="4"
            />

            {/* Generate CSS Button */}
            <button className="g-btn w-100" onClick={generateCSS}>Generate CSS</button>
          </div>

          <div className="col-md-7 mt-5">
            {/* AI-Generated CSS Section */}
            <h3>AI-Generated CSS</h3>
            <CodeEditor value={cssInput} onChange={onChange} />

            {/* Live Preview */}
            <h3 className='mt-3'>Live Preview</h3>
            <HTMLCSSPreview htmlCode={htmlInput} cssCode={cssInput} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenCSSAgentPage;
