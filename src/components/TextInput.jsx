import React from "react";
import { useCanvasContext } from "../contexts/CanvasContext";

export default function TextInput() {
  const {
    text,
    setText,
    headerText,
    setHeaderText,
    footerText,
    setFooterText,
    indentLevel,
    setIndentLevel,
  } = useCanvasContext();

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const indent = "    "; // 4 spaces
      const newText = text.substring(0, start) + indent + text.substring(end);
      setText(newText);
      setTimeout(
        () =>
          e.target.setSelectionRange(
            start + indent.length,
            start + indent.length
          ),
        0
      );
    }
  };

  return (
    <div className="text-input-section">
      <label className="control-label">Text Content</label>

      <div className="input-group">
        <label>Header</label>
        <input
          type="text"
          value={headerText}
          onChange={(e) => setHeaderText(e.target.value)}
          placeholder="Header"
        />
      </div>

      <textarea
        className="large-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Press Tab to indent..."
        rows={20}
      />

      <div className="input-group">
        <label>Footer</label>
        <input
          type="text"
          value={footerText}
          onChange={(e) => setFooterText(e.target.value)}
          placeholder="Footer"
        />
      </div>
    </div>
  );
}
