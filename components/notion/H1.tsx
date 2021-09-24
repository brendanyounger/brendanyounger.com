import React, { FC } from "react";

/*
*, *:focus {
    outline: 0;
}

* {
  box-sizing: border-box;
}

 */

const H1: FC = ({ children }) => {
  return (
    <div
      style={{
        fill: "rgb(55, 53, 47)",
        cursor: "text",
        boxSizing: "border-box",
        display: "block",
        color: "rgb(55, 53, 47)",
        width: "100%",
        maxWidth: 1667,
        fontSize: 16,
        marginTop: "2em",
        marginBottom: 4,
        outlineWidth: 0,
        outlineColor: "rgb(55, 53, 47)",
        outlineStyle: "none",
        textSizeAdjust: "100%",
        "-webkit-font-smoothing": "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          fontFamily:
            'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
          fontWeight: 600,
          fontSize: "1.875em",
          lineHeight: "1.3",
          color: "inherit",
          fill: "inherit",
          outlineWidth: 0,
          outlineColor: "rgb(55, 53, 47)",
          outlineStyle: "none",
          textSizeAdjust: "100%",
          "-webkit-font-smoothing": "auto",
        }}
      >
        <div
          contentEditable="true"
          spellCheck="false"
          placeholder="Heading 1"
          style={{
            maxWidth: "100%",
            width: "100%",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            caretColor: "transparent",
            padding: "3px 2px",
            outlineWidth: 0,
            outlineColor: "rgba(55, 53, 47)",
            outlineStyle: "none",
            "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
            "-webkit-user-modify": "read-write",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default H1;
