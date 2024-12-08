import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import
import '../../SCSS/Components/Pages/_agent.scss';

const GenCSSAgentPage = () => {
  const [htmlInput, setHtmlInput] = useState(''); // User HTML input
  const [descriptionInput, setDescriptionInput] = useState(''); // Description input
  const [cssInput, setCssInput] = useState('');   // AI-generated CSS

  // Simulating AI-generated CSS based on description
  const generateCSS = () => {
    // Example of AI-generated CSS (this can come from the AI API)
    const generatedCSS = `
      .box {
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 5px;
        font-family: Arial, sans-serif;
        text-align: center;
      }
      .button {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
      }
    `;
    setCssInput(generatedCSS);
  };

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
          <button className=" g-btn w-100" onClick={generateCSS}>Generate CSS</button>
        </div>

        <div className="col-md-7 mt-5">
          {/* AI-Generated CSS Section */}
          <h3>AI-Generated CSS</h3>
          <div className="position-relative">
            <textarea
              className="form-control mb-3"
              value={cssInput}
              readOnly
              rows="10"
            />
            <button
              className="copy-btn position-absolute top-0 end-0 m-2"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>

          {/* Live Preview */}
          <h3 className='mt-3'>Live Preview</h3>
          <div className="preview-container border p-3">
            <div
              className="preview"
              dangerouslySetInnerHTML={{ __html: htmlInput }} // Render HTML
              style={{ whiteSpace: 'pre-wrap' }} // Preserve line breaks in HTML
            ></div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default GenCSSAgentPage;
