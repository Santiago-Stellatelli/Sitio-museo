import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Misionpage from './pages/Misionpage';
import Contacto from './pages/Contactopage';
import Recorrido from './pages/Recorridopage';
import Carousel from './components/Carousel';
import Homepage from './pages/Homepage';
import Novedades from './pages/Novedadespage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mision" element={<Misionpage />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path='/recorrido' element={<Recorrido/>}/>
          <Route path='/recorrido/Muestra Virtual' element={<Carousel/>}/>
          <Route path='/novedades' element={<Novedades/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


