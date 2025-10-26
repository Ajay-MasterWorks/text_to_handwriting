import React from 'react';
import { useCanvasContext } from '../contexts/CanvasContext';

export default function IndentControl() {
  const { indentLevel, setIndentLevel } = useCanvasContext();

  return (
    <div className="control-section">
      <label className="control-label">Indent Level</label>
      <input
        type="range"
        min="0"
        max="5"
        value={indentLevel}
        onChange={e => setIndentLevel(+e.target.value)}
        style={{ width: '100%' }}
      />
      <small>{indentLevel} level(s) → {indentLevel * 30}px</small>
    </div>
  );
}