import React, { useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';

const CodeEditor = ({ value, onChange }) => {
  const [editorValue, setEditorValue] = useState(value);

  // Sync editorValue with value prop when value changes
  useEffect(() => {
    if (value !== editorValue) {
      setEditorValue(value);
    }
  }, [value]);

  const handleEditorChange = (newValue) => {
    setEditorValue(newValue);
    onChange(newValue); // Pass the new value to the parent component
  };

  return (
    <Editor
      height="500px"
      language="css"
      theme="vs-light"
      value={editorValue}
      onChange={handleEditorChange}
      options={{
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
