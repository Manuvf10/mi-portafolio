import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Aquí puedes agregar estilos globales si lo deseas
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si deseas medir el rendimiento de tu aplicación, puedes pasar una función a reportWebVitals
reportWebVitals();
