// import React, { useRef, useMemo } from "react";
// import { motion } from "framer-motion";
// import html2canvas from "html2canvas";
// import { useCanvasContext } from "../contexts/CanvasContext";
// import handwritingStyles from "../data/handwritingStyles.json";

// const pageCfg = {
//   a4: { w: 794, h: 1123, lined: false },
//   letter: { w: 816, h: 1056, lined: false },
//   lined: { w: 800, h: 1100, lined: true },
//   blank: { w: 800, h: 1100, lined: false },
// };

// const paperCfg = {
//   light: { bg: "#ffffff", color: "#000000", shadow: false },
//   dark: { bg: "#1a1a1a", color: "#e0e0e0", shadow: false },
//   shadow: { bg: "#f8fafc", color: "#000000", shadow: true },
// };

// export default function CanvasPreview() {
//   const ref = useRef();
//   const {
//     text,
//     headerText,
//     footerText,
//     handwritingStyle,
//     pageType,
//     paperStyle,
//     margins,
//     padding,
//     fontSize,
//     fontColor,
//     lineSpacing,
//     headerFontSize,
//     headerColor,
//     headerAlign,
//     headerSpacing,
//     footerFontSize,
//     footerColor,
//     footerAlign,
//     footerSpacing,
//     customFonts,
//     selectedCustomFont,
//     indentLevel, // <-- THIS WAS MISSING!
//   } = useCanvasContext();

//   const style = useMemo(() => {
//     if (selectedCustomFont) {
//       const c = customFonts.find((f) => f.id === selectedCustomFont);
//       if (c) return { fontFamily: c.fontFamily };
//     }
//     return (
//       handwritingStyles.styles.find((s) => s.id === handwritingStyle) ||
//       handwritingStyles.styles[0]
//     );
//   }, [handwritingStyle, selectedCustomFont, customFonts]);

//   const cfg = pageCfg[pageType] || pageCfg.a4;
//   const paper = paperCfg[paperStyle] || paperCfg.light;

//   const pageStyle = {
//     width: `${cfg.w}px`,
//     height: `${cfg.h}px`,
//     margin: `${margins.top}px ${margins.right}px ${margins.bottom}px ${margins.left}px`,
//     padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
//     background: paper.bg,
//     color: paper.color,
//     fontFamily: style.fontFamily,
//     boxShadow: paper.shadow ? "0 8px 24px rgba(0,0,0,0.15)" : "none",
//   };

//   const download = async () => {
//     const el = ref.current.querySelector(".page-content");
//     const canvas = await html2canvas(el, {
//       scale: 2,
//       backgroundColor: paper.bg,
//       logging: false,
//     });
//     const a = document.createElement("a");
//     a.href = canvas.toDataURL("image/png");
//     a.download = `handwriting-${Date.now()}.png`;
//     a.click();
//   };

//   return (
//     <div className="canvas-preview">
//       <div className="preview-header">
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           onClick={download}
//           className="generate-btn"
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "#fff",
//             background: "#0091a5",
//           }}
//         >
//           Download PNG
//         </motion.button>
//       </div>

//       <div ref={ref} className="page-wrapper">
//         <div
//           className={`page-content ${cfg.lined ? "lined" : ""}`}
//           style={pageStyle}
//         >
//           {headerText && (
//             <div
//               style={{
//                 fontSize: `${headerFontSize}px`,
//                 color: headerColor,
//                 textAlign: headerAlign,
//                 lineHeight: headerSpacing,
//                 marginBottom: "1rem",
//                 whiteSpace: 'pre-wrap',
//               }}
//             >
//               {headerText}
//             </div>
//           )}

//           {/* Main Text with Indent */}
//           <div
//             style={{
//               fontSize: `${fontSize}px`,
//               color: fontColor,
//               lineHeight: lineSpacing,
//               textIndent: `${indentLevel * 30}px`,
//               whiteSpace: 'pre-wrap',
//             }}
//           >
//             {text.split("\n").map((line, i) => (
//               <div key={i} style={{ marginBottom: "0.4em" }}>
//                 {line || <br />}
//               </div>
//             ))}
//           </div>

//           {footerText && (
//             <div
//               style={{
//                 fontSize: `${footerFontSize}px`,
//                 color: footerColor,
//                 textAlign: footerAlign,
//                 lineHeight: footerSpacing,
//                 marginTop: "2rem",
//                 whiteSpace: 'pre-wrap',
//               }}
//             >
//               {footerText}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import { useCanvasContext } from "../contexts/CanvasContext";
import handwritingStyles from "../data/handwritingStyles.json";

const pageCfg = {
  a4: { w: 794, h: 1123, lined: false },
  letter: { w: 816, h: 1056, lined: false },
  lined: { w: 800, h: 1100, lined: true },
  blank: { w: 800, h: 1100, lined: false },
};

const paperCfg = {
  light: { bg: "#ffffff", color: "#000000", shadow: false },
  dark: { bg: "#1a1a1a", color: "#e0e0e0", shadow: false },
  shadow: { bg: "#f8fafc", color: "#000000", shadow: true },
};

export default function CanvasPreview() {
  const ref = useRef();
  const {
    text,
    headerText,
    footerText,
    handwritingStyle,
    pageType,
    paperStyle,
    margins,
    padding,
    fontSize,
    fontColor,
    lineSpacing,
    headerFontSize,
    headerColor,
    headerAlign,
    headerSpacing,
    footerFontSize,
    footerColor,
    footerAlign,
    footerSpacing,
    customFonts,
    selectedCustomFont,
    indentLevel,
  } = useCanvasContext();

  const style = useMemo(() => {
    if (selectedCustomFont) {
      const c = customFonts.find((f) => f.id === selectedCustomFont);
      if (c) return { fontFamily: c.fontFamily };
    }
    return (
      handwritingStyles.styles.find((s) => s.id === handwritingStyle) ||
      handwritingStyles.styles[0]
    );
  }, [handwritingStyle, selectedCustomFont, customFonts]);

  const cfg = pageCfg[pageType] || pageCfg.a4;
  const paper = paperCfg[paperStyle] || paperCfg.light;

  const pageStyle = {
    width: `${cfg.w}px`,
    height: `${cfg.h}px`,
    margin: `${margins.top}px ${margins.right}px ${margins.bottom}px ${margins.left}px`,
    padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
    background: paper.bg,
    color: paper.color,
    fontFamily: style.fontFamily,
    boxShadow: paper.shadow ? "0 8px 24px rgba(0,0,0,0.15)" : "none",
  };

  // Process text with formatting markers
  const processFormatting = (input) => {
    if (!input) return '';
    
    let processed = input
      // Bold: **text** or __text__
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.+?)__/g, '<strong>$1</strong>')
      // Italic: *text* or _text_
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/_(.+?)_/g, '<em>$1</em>')
      // Underline: ++text++
      .replace(/\+\+(.+?)\+\+/g, '<u>$1</u>')
      // Strikethrough: ~~text~~
      .replace(/~~(.+?)~~/g, '<s>$1</s>')
      // Code/monospace: `text`
      .replace(/`(.+?)`/g, '<code style="font-family: monospace; background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 3px;">$1</code>')
      // Highlight: ==text==
      .replace(/==(.+?)==/g, '<mark style="background: #fef08a; padding: 2px 4px; border-radius: 3px;">$1</mark>');
    
    return processed;
  };

  const download = async () => {
    const el = ref.current.querySelector(".page-content");
    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: paper.bg,
      logging: false,
    });
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = `handwriting-${Date.now()}.png`;
    a.click();
  };

  return (
    <div className="canvas-preview">
      <div className="preview-header">
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={download}
          className="generate-btn"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            background: "#0091a5",
          }}
        >
          Download PNG
        </motion.button>
      </div>

      <div ref={ref} className="page-wrapper">
        <div
          className={`page-content ${cfg.lined ? "lined" : ""}`}
          style={pageStyle}
        >
          {headerText && (
            <div
              style={{
                fontSize: `${headerFontSize}px`,
                color: headerColor,
                textAlign: headerAlign,
                lineHeight: headerSpacing,
                marginBottom: "1rem",
                whiteSpace: 'pre-wrap',
              }}
              dangerouslySetInnerHTML={{ __html: processFormatting(headerText) }}
            />
          )}

          {/* Main Text with Indent and Formatting */}
          <div
            style={{
              fontSize: `${fontSize}px`,
              color: fontColor,
              lineHeight: lineSpacing,
              textIndent: `${indentLevel * 30}px`,
              whiteSpace: 'pre-wrap',
            }}
          >
            {text.split("\n").map((line, i) => (
              <div 
                key={i} 
                style={{ marginBottom: "0.4em" }}
                dangerouslySetInnerHTML={{ 
                  __html: line ? processFormatting(line) : '<br />' 
                }}
              />
            ))}
          </div>

          {footerText && (
            <div
              style={{
                fontSize: `${footerFontSize}px`,
                color: footerColor,
                textAlign: footerAlign,
                lineHeight: footerSpacing,
                marginTop: "2rem",
                whiteSpace: 'pre-wrap',
              }}
              dangerouslySetInnerHTML={{ __html: processFormatting(footerText) }}
            />
          )}
        </div>
      </div>
    </div>
  );
}