import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Misionpage from './Misionpage';
import Contacto from './Contactopage';
import Recorrido from './Recorridopage';
import Carousel from '../components/Carousel';
import Homepage from './Homepage';
import Novedades from './Novedadespage';

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


