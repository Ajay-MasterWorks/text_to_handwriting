import React from 'react';
import ReactDOM from 'react-dom/client';
import { CanvasProvider } from './contexts/CanvasContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CanvasProvider>
      <App />
    </CanvasProvider>
  </React.StrictMode>
);