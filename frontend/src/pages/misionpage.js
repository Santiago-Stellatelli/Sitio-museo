import '../styles/Misionpag.css'
import Main from '../components/Main';
import Header from '../components/Header';
import actividades2 from '../img/actividades2.jpeg'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Misionpage() {
    return (
        <div className='fondo'>
            <Header />
            <div id='contienetodo'>
            <section className="contenedormision">
                <article className="objetivos">
                    <h3>Nuestra misión</h3>
                    <p>Somos un Museo que busca fortalecer la memoria colectiva del barrio y su identidad , rescatar la historia de la Asociación así como contribuir para que los vecinos ejerzan sus derechos a conocerse, educarse y recrearse.<br />
                    </p>
                </article>
                <article className="objetivos">
                    <h3>Nuestra visión</h3>
                    <p>
                        Lograr una transformación social integral y dar a conocer el barrio más allá de sus fronteras.
                    </p>
                </article>
                <article className="objetivos">
                    <h3>Valores</h3>
                    <ul>
                        <li>Respeto: Por nuestros vecinos y nuestro entorno.</li>
                        <li>Compromiso: Trabajamos hoy, rescatando el pasado y para legado de las generaciones futuras.</li>
                        <li>Responsabilidad: Nos capacitamos para trabajar en forma responsable y profesional</li>
                    </ul>
                </article>
            </section>
            <NavLink to = "/actividades">
                <section className="contenedormision1">
                    <h3>Revisá las ultimas actividades</h3>
                    <img src={actividades2} id='iractividades' />
                </section>
            </NavLink>
            </div>
        </div>
    );
}

export default Misionpage;