import React from 'react';
import { motion } from 'framer-motion';
import HandwritingStyle from './HandwritingStyle';
import PageSelector from './PageSelector';
import LayoutControls from './LayoutControls';
import FontControls from './FontControls';
import CustomFontUploader from './CustomFontUploader';
import { useCanvasContext } from '../contexts/CanvasContext';

export default function ControlsPanel() {
  const { generateHandwriting } = useCanvasContext();

  return (
    <motion.div className="controls-panel" initial={{ x: -300 }} animate={{ x: 0 }}>
      <div className="panel-header">
        <h3>Control Panel</h3>
      </div>

      <PageSelector />
      <HandwritingStyle />
      <LayoutControls />
      <FontControls />
      <CustomFontUploader />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={generateHandwriting}
        className="generate-btn"
      >
        Generate Handwriting
      </motion.button>
    </motion.div>
  );
}