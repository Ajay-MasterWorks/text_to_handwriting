import React from "react";
import { useCanvasContext } from "../contexts/CanvasContext";

const pages = [
  { id: "a4", name: "A4", w: 794, h: 1123 },
  { id: "letter", name: "Letter", w: 816, h: 1056 },
  { id: "lined", name: "Lined", w: 800, h: 1100 },
  { id: "blank", name: "Blank", w: 800, h: 1100 },
];

const paperStyles = [
  { id: "light", name: "Light", bg: "#ffffff" },
  { id: "dark", name: "Dark", bg: "#1a1a1a", color: "#e0e0e0" },
  { id: "shadow", name: "Shadow", bg: "#f8fafc", shadow: true },
];

export default function PageSelector() {
  const { pageType, setPageType, paperStyle, setPaperStyle } =
    useCanvasContext();

  return (
    <div className="control-section">
      <label className="control-label">Page Type</label>
      <div className="style-grid">
        {pages.map((p) => (
          <button
            key={p.id}
            className={`style-btn ${pageType === p.id ? "active" : ""}`}
            onClick={() => setPageType(p.id)}
          >
            {p.name}
          </button>
        ))}
      </div>

      <label className="control-label" style={{ marginTop: "1rem" }}>
        Paper Style
      </label>
      <div className="style-grid">
        {paperStyles.map((p) => (
          <button
            key={p.id}
            className={`style-btn ${paperStyle === p.id ? "active" : ""}`}
            onClick={() => setPaperStyle(p.id)}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}
