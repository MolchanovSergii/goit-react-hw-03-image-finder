import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import smoothscroll from 'smoothscroll-polyfill';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();
