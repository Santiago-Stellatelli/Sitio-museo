import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/puerta.css'

function Puerta() {
  const [Abierta, setAbierta] = useState(false);
  const navigate = useNavigate();

  const click = () => {
    setAbierta(!Abierta);
    setTimeout(() => {
      navigate("/recorrido/Muestra Virtual");
    }, 1300);
  }

  return (
    <section>
      <article id="window" className={`${Abierta ? 'door-open' : ''}`}>
        <div className="ventana">
          <div className="segmento"></div>
          <div className="segmento"></div>
          <div className="segmento"></div>
          <div className="segmento"></div>
        </div>
        <div className="ventana">
          <div className="segmento"></div>
          <div className="segmento"></div>
          <div className="segmento"></div>
          <div className="segmento"></div>
        </div>
      </article>
      <div id="puerta" className={`${Abierta ? 'door-open' : ''}`} onClick={click}>
        <div className={`door ${Abierta ? 'door-open' : ''}`}>
          <div className="door-front">
            <div className="knob"></div>
          </div>
          <div className="door-back">
            <div className="rack"></div>
            <div className="hat"></div>
            <div className="jacket"></div>
          </div>
          <div className="door-mat"></div>
        </div>
      </div>
    </section>
  );
}

export default Puerta;

