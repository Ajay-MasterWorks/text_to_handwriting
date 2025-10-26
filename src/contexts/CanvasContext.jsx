import React, { createContext, useContext, useState, useEffect } from 'react';
import handwritingStyles from '../data/handwritingStyles.json';

const CanvasContext = createContext();
export const useCanvasContext = () => useContext(CanvasContext);

export const CanvasProvider = ({ children }) => {
  const load = (k, def) => { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; };
  const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

  // Main Text
  const [text, setText] = useState(load('hw-text', ''));
  const [indentLevel, setIndentLevel] = useState(load('hw-indent', 0));

  // Header
  const [headerText, setHeaderText] = useState(load('hw-header', ''));
  const [headerFontSize, setHeaderFontSize] = useState(load('hw-header-fontSize', 20));
  const [headerColor, setHeaderColor] = useState(load('hw-header-color', '#1e40af'));
  const [headerAlign, setHeaderAlign] = useState(load('hw-header-align', 'center'));
  const [headerSpacing, setHeaderSpacing] = useState(load('hw-header-spacing', 1.2));

  // Footer
  const [footerText, setFooterText] = useState(load('hw-footer', ''));
  const [footerFontSize, setFooterFontSize] = useState(load('hw-footer-fontSize', 16));
  const [footerColor, setFooterColor] = useState(load('hw-footer-color', '#64748b'));
  const [footerAlign, setFooterAlign] = useState(load('hw-footer-align', 'center'));
  const [footerSpacing, setFooterSpacing] = useState(load('hw-footer-spacing', 1.0));

  // Page & Style
  const [handwritingStyle, setHandwritingStyle] = useState(load('hw-style', 'cursive1'));
  const [pageType, setPageType] = useState(load('hw-page', 'a4'));
  const [paperStyle, setPaperStyle] = useState(load('hw-paper', 'light')); // light, dark, shadow

  const [margins, setMargins] = useState(load('hw-margins', { top:0,right:0,bottom:0,left:0 }));
  const [padding, setPadding] = useState(load('hw-padding', { top:30,right:30,bottom:30,left:30 }));
  const [fontSize, setFontSize] = useState(load('hw-fontSize', 24));
  const [fontColor, setFontColor] = useState(load('hw-fontColor', '#000000'));
  const [lineSpacing, setLineSpacing] = useState(load('hw-lineSpacing', 1.6));

  const [customFonts, setCustomFonts] = useState(load('hw-customFonts', []));
  const [selectedCustomFont, setSelectedCustomFont] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Persist
  useEffect(() => { save('hw-text', text); }, [text]);
  useEffect(() => { save('hw-indent', indentLevel); }, [indentLevel]);
  useEffect(() => { save('hw-header', headerText); }, [headerText]);
  useEffect(() => { save('hw-header-fontSize', headerFontSize); }, [headerFontSize]);
  useEffect(() => { save('hw-header-color', headerColor); }, [headerColor]);
  useEffect(() => { save('hw-header-align', headerAlign); }, [headerAlign]);
  useEffect(() => { save('hw-header-spacing', headerSpacing); }, [headerSpacing]);
  useEffect(() => { save('hw-footer', footerText); }, [footerText]);
  useEffect(() => { save('hw-footer-fontSize', footerFontSize); }, [footerFontSize]);
  useEffect(() => { save('hw-footer-color', footerColor); }, [footerColor]);
  useEffect(() => { save('hw-footer-align', footerAlign); }, [footerAlign]);
  useEffect(() => { save('hw-footer-spacing', footerSpacing); }, [footerSpacing]);
  useEffect(() => { save('hw-page', pageType); }, [pageType]);
  useEffect(() => { save('hw-paper', paperStyle); }, [paperStyle]);
  useEffect(() => { save('hw-margins', margins); }, [margins]);
  useEffect(() => { save('hw-padding', padding); }, [padding]);
  useEffect(() => { save('hw-fontSize', fontSize); }, [fontSize]);
  useEffect(() => { save('hw-fontColor', fontColor); }, [fontColor]);
  useEffect(() => { save('hw-lineSpacing', lineSpacing); }, [lineSpacing]);
  useEffect(() => { save('mhw-customFonts', customFonts); }, [customFonts]);

  const addCustomFont = font => {
    setCustomFonts(p => [...p, font]);
    setSelectedCustomFont(font.id);
  };

  const value = {
    // Main
    text, setText, indentLevel, setIndentLevel,
    // Header
    headerText, setHeaderText,
    headerFontSize, setHeaderFontSize,
    headerColor, setHeaderColor,
    headerAlign, setHeaderAlign,
    headerSpacing, setHeaderSpacing,
    // Footer
    footerText, setFooterText,
    footerFontSize, setFooterFontSize,
    footerColor, setFooterColor,
    footerAlign, setFooterAlign,
    footerSpacing, setFooterSpacing,
    // Page
    pageType, setPageType,
    paperStyle, setPaperStyle,
    // Style
    handwritingStyle, setHandwritingStyle,
    margins, setMargins,
    padding, setPadding,
    fontSize, setFontSize,
    fontColor, setFontColor,
    lineSpacing, setLineSpacing,
    // Custom
    customFonts, selectedCustomFont, setSelectedCustomFont,
    addCustomFont,
    // UI
    drawerOpen, setDrawerOpen,
  };

  return <CanvasContext.Provider value={value}>{children}</CanvasContext.Provider>;
};