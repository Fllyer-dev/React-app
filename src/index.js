import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App /> // Читай App.js
  </React.StrictMode>
);

// Мы можем внутри root.render юзать html, но зачем тогда App.js?
