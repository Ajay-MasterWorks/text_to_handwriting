import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useCanvasContext } from "../contexts/CanvasContext";

export default function FontControls() {
  const {
    fontSize,
    setFontSize,
    fontColor,
    setFontColor,
    lineSpacing,
    setLineSpacing,
  } = useCanvasContext();
  const [showPicker, setShowPicker] = useState(false);

  const sizes = [16, 20, 24, 28, 32, 36, 40];
  const spacings = [1.2, 1.4, 1.6, 1.8, 2.0];

  return (
    <div className="control-section">
      <label className="control-label">Font Size</label>
      <select
        value={fontSize}
        onChange={(e) => setFontSize(+e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
      >
        {sizes.map((s) => (
          <option key={s} value={s}>
            {s}px
          </option>
        ))}
      </select>

      <label className="control-label">Line Spacing</label>
      <select
        value={lineSpacing}
        onChange={(e) => setLineSpacing(+e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
      >
        {spacings.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <label className="control-label">Color</label>
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: 40,
            height: 40,
            background: fontColor,
            border: "2px solid #ddd",
            borderRadius: 6,
            cursor: "pointer",
          }}
          onClick={() => setShowPicker(!showPicker)}
        />
        {showPicker && (
          <div style={{ position: "absolute", zIndex: 10, top: 45, left: 0 }}>
            <SketchPicker
              color={fontColor}
              onChangeComplete={(c) => setFontColor(c.hex)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
