import React from "react";
import Header from "./components/Header";
import DrawerToggle from "./components/DrawerToggle";
import ControlsDrawer from "./components/ControlsDrawer";
import TextInput from "./components/TextInput";
import CanvasPreview from "./components/CanvasPreview";

export default function App() {
  return (
    <div className="app">
      <Header />
      <DrawerToggle />
      <ControlsDrawer />

      <div className="main-layout">
        <TextInput />
        <CanvasPreview />
      </div>
    </div>
  );
}
