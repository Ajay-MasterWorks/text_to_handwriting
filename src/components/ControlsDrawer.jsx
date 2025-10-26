import React from "react";
import { motion } from "framer-motion";
import { useCanvasContext } from "../contexts/CanvasContext";
import PageSelector from "./PageSelector";
import HandwritingStyle from "./HandwritingStyle";
import LayoutControls from "./LayoutControls";
import FontControls from "./FontControls";
import CustomFontUploader from "./CustomFontUploader";
import HeaderFooterControls from "./HeaderFooterControls";
import IndentControl from "./IndentControl";

export default function ControlsDrawer() {
  const { drawerOpen, setDrawerOpen } = useCanvasContext();

  return (
    <motion.div
      className={`drawer ${drawerOpen ? "open" : ""}`}
      initial={{ left: -360 }}
      animate={{ left: drawerOpen ? 0 : -360 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="drawer-header">
        <h3>Controls</h3>
        <button className="close-drawer" onClick={() => setDrawerOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <PageSelector />
      <HandwritingStyle />
      <LayoutControls />
      <FontControls />
      <IndentControl />
      <HeaderFooterControls />
      <CustomFontUploader />

      <button
        className="generate-btn"
        onClick={() => setDrawerOpen(false)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          background: "#0091a5",
        }}
      >
        Close Drawer
      </button>
    </motion.div>
  );
}
