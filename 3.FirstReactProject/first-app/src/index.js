import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import variable, { hello, greeting } from './demo_default_export';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// hello();
// greeting();
// console.log(variable);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
