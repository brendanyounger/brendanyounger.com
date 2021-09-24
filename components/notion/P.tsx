import React, { FC } from "react";

const P: FC = ({ children }) => {
  return (
    <div style={{ width: "100%", maxWidth: 1667, marginTop: 1, marginBottom: 1 }}>
      <div
        className="notranslate"
        contentEditable="true"
        spellCheck="false"
        placeholder=" "
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          caretColor: "transparent",
          padding: "3px 2px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default P;
