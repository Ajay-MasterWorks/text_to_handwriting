import React, { useEffect } from "react";
import { useCanvasContext } from "../contexts/CanvasContext";
import handwritingStyles from "../data/handwritingStyles.json";

export default function HandwritingStyle() {
  const {
    handwritingStyle,
    setHandwritingStyle,
    customFonts,
    selectedCustomFont,
    setSelectedCustomFont,
  } = useCanvasContext();

  // Load all Google Fonts dynamically
  useEffect(() => {
    // Check if fonts are already loaded
    const existingLink = document.getElementById('handwriting-fonts');
    if (existingLink) return;

    // Create the Google Fonts link with all 23 fonts
    const link = document.createElement('link');
    link.id = 'handwriting-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Caveat&family=Reenie+Beanie&family=Indie+Flower&family=Dancing+Script:wght@700&family=Architects+Daughter&family=Pacifico&family=Patrick+Hand&family=Permanent+Marker&family=Kalam&family=Shadows+Into+Light&family=Schoolbell&family=Allura&family=Handlee&family=Covered+By+Your+Grace&family=Nothing+You+Could+Do&family=Gloria+Hallelujah&family=Just+Another+Hand&family=Crafty+Girls&family=The+Girl+Next+Door&family=Great+Vibes&family=Sacramento&family=Rock+Salt&family=Amatic+SC&display=swap';
    
    document.head.appendChild(link);

    // Optional: Wait for fonts to load before rendering
    if (document.fonts) {
      document.fonts.ready.then(() => {
        console.log('All fonts loaded successfully');
      });
    }

    return () => {
      // Cleanup if needed
      const linkToRemove = document.getElementById('handwriting-fonts');
      if (linkToRemove) {
        linkToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="control-section">
      <label className="control-label">Handwriting Style</label>

      <div className="style-grid">
        {handwritingStyles.styles.map((s) => (
          <button
            key={s.id}
            className={`style-btn ${handwritingStyle === s.id ? "active" : ""}`}
            style={{ fontFamily: s.fontFamily }}
            onClick={() => {
              setHandwritingStyle(s.id);
              setSelectedCustomFont(null);
            }}
          >
            {s.name}
          </button>
        ))}
      </div>

      {customFonts.length > 0 && (
        <>
          <label className="control-label" style={{ marginTop: "1rem" }}>
            Your Fonts
          </label>
          <div className="style-grid">
            {customFonts.map((f) => (
              <button
                key={f.id}
                className={`style-btn ${
                  selectedCustomFont === f.id ? "active" : ""
                }`}
                style={{ fontFamily: f.fontFamily }}
                onClick={() => {
                  setSelectedCustomFont(f.id);
                  setHandwritingStyle("");
                }}
              >
                {f.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}