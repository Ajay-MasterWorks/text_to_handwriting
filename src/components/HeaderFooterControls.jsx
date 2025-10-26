import React from "react";
import { useCanvasContext } from "../contexts/CanvasContext";

export default function HeaderFooterControls() {
  const {
    headerFontSize,
    setHeaderFontSize,
    headerColor,
    setHeaderColor,
    headerAlign,
    setHeaderAlign,
    footerFontSize,
    setFooterFontSize,
    footerColor,
    setFooterColor,
    footerAlign,
    setFooterAlign,
  } = useCanvasContext();

  return (
    <div className="control-section">
      <label className="control-label">Header & Footer Settings</label>

      <div style={{ marginBottom: "1rem" }}>
        <strong>Header</strong>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          <input
            type="color"
            value={headerColor}
            onChange={(e) => setHeaderColor(e.target.value)}
            title="Header Color"
          />
          <select
            value={headerFontSize}
            onChange={(e) => setHeaderFontSize(+e.target.value)}
          >
            {[16, 18, 20, 22, 24, 28].map((s) => (
              <option key={s} value={s}>
                {s}px
              </option>
            ))}
          </select>
          <select
            value={headerAlign}
            onChange={(e) => setHeaderAlign(e.target.value)}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>

      <div>
        <strong>Footer</strong>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          <input
            type="color"
            value={footerColor}
            onChange={(e) => setFooterColor(e.target.value)}
            title="Footer Color"
          />
          <select
            value={footerFontSize}
            onChange={(e) => setFooterFontSize(+e.target.value)}
          >
            {[12, 14, 16, 18, 20].map((s) => (
              <option key={s} value={s}>
                {s}px
              </option>
            ))}
          </select>
          <select
            value={footerAlign}
            onChange={(e) => setFooterAlign(e.target.value)}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
    </div>
  );
}
