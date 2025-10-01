import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>
);

window.axeptioSettings = {
  clientId: '685d0d8bdb52b61dda39b22d',
  cookiesVersion: 'christbissai/canva-fr-EU',
  googleConsentMode: {
    default: {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500,
    },
  },
};
(function (d, s) {
  var t = d.getElementsByTagName(s)[0],
    e = d.createElement(s);
  e.async = true;
  e.src = '//static.axept.io/sdk.js';
  t.parentNode.insertBefore(e, t);
})(document, 'script');
