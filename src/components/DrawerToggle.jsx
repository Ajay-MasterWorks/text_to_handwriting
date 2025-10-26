import React from "react";
import { useCanvasContext } from "../contexts/CanvasContext";

export default function DrawerToggle() {
  const { drawerOpen, setDrawerOpen } = useCanvasContext();

  return (
    <button
      className="drawer-toggle"
      onClick={() => setDrawerOpen(!drawerOpen)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        background: "#0091a5",
      }}
    >
      {drawerOpen ? "Close" : "Open"}
    </button>
  );
}
