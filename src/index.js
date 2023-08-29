import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

function About() {
  return (
    <div className="app">
      <h1>About Us</h1>
      <p>This is the ACM BITS Hyderabad Campus Chapter.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="app">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
    </div>
  );
}

const routing = (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body>
      {routing}
    </body>
  </React.StrictMode>
);

reportWebVitals();
