import React from "react";
import { useCanvasContext } from "../contexts/CanvasContext";

export default function LayoutControls() {
  const { margins, setMargins, padding, setPadding } = useCanvasContext();

  const update = (obj, set) => (side, v) => set({ ...obj, [side]: +v });

  return (
    <div className="control-section">
      <label className="control-label">Margins (px)</label>
      {["top", "right", "bottom", "left"].map((s) => (
        <div key={s} style={{ marginBottom: "0.5rem" }}>
          <label style={{ fontSize: "0.8rem" }}>
            {s}: {margins[s]}px
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={margins[s]}
            onChange={(e) => update(margins, setMargins)(s, e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      ))}

      <label className="control-label" style={{ marginTop: "1rem" }}>
        Padding (px)
      </label>
      {["top", "right", "bottom", "left"].map((s) => (
        <div key={s} style={{ marginBottom: "0.5rem" }}>
          <label style={{ fontSize: "0.8rem" }}>
            {s}: {padding[s]}px
          </label>
          <input
            type="range"
            min="0"
            max="80"
            value={padding[s]}
            onChange={(e) => update(padding, setPadding)(s, e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      ))}
    </div>
  );
}
