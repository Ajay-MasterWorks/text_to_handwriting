import React, { useState } from "react";
import { useCanvasContext } from "../contexts/CanvasContext";
import { imageToFontDataUrl } from "../utils/fontTracer";

export default function CustomFontUploader() {
  const { addCustomFont } = useCanvasContext();
  const [drag, setDrag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const process = async (file) => {
    if (!file.type.startsWith("image/")) return setErr("Image only");
    setLoading(true);
    setErr("");
    try {
      const name = `Custom-${file.name.split(".")[0]}`;
      const { url, name: fontName } = await imageToFontDataUrl(file, name);
      const style = document.createElement("style");
      style.textContent = `@font-face{font-family:'${fontName}';src:url('${url}') format('truetype');}`;
      document.head.appendChild(style);
      addCustomFont({
        id: fontName,
        name: file.name.split(".")[0],
        fontFamily: `'${fontName}'`,
      });
    } catch (e) {
      setErr("Conversion failed");
    }
    setLoading(false);
  };

  return (
    <div className="control-section">
      <label className="control-label">
        Upload Your Handwriting (Image to Font)
      </label>
      <div
        className={`drop-zone ${drag ? "drag-over" : ""} ${
          loading ? "loading" : ""
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          process(e.dataTransfer.files[0]);
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => process(e.target.files[0])}
          style={{ display: "none" }}
          id="up"
        />
        <label htmlFor="up" className="drop-label">
          {loading ? "Converting..." : "Drop image or click"}
        </label>
      </div>
      {err && <p className="error-msg">{err}</p>}
    </div>
  );
}
