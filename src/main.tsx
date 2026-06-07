import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { initAnalytics } from './lib/analytics';
import './index.css';

// GA4 init runs once at app boot. In dev / when VITE_GA_MEASUREMENT_ID is
// unset / when the browser sends DNT or GPC, this is a no-op.
initAnalytics();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
