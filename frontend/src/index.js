import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './pages/App'; 
import Misionpage from './pages/Misionpage';
import { createRoot } from 'react-dom';
import Contacto from './pages/Contactopage';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mision" element={<Misionpage />} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
);