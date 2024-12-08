import React, { useEffect, useRef } from "react";

const HTMLCSSPreview = ({ htmlCode, cssCode }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument;
    const style = `<style>${cssCode}</style>`;
    const fullContent = `${style}${htmlCode}`;

    // Inject HTML and CSS into the iframe
    document.open();
    document.write(fullContent);
    document.close();
  }, [htmlCode, cssCode]);

  return (
    <iframe
      ref={iframeRef}
      title="HTML CSS Preview"
      style={{
        width: "100%",
        height: "500px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default HTMLCSSPreview;
