import '../styles/Section2.css'
import actividadesimg from '../img/actividades.jpeg'
import recorridoimg from '../img/recorrido.jpeg'
import misionimg from '../img/mision.jpeg'
import contactoimg from '../img/contacto.jpeg'
import { BrowserRouter, Link, NavLink, Routes } from 'react-router-dom'
const Section2alt1 = (props) => {
    return (
        <section id="contenedor2">
            <NavLink to="/">
            <article id="parte1">
                <img src={actividadesimg} id='actividades' />
                <div>
                    <h3>Volver al Inicio</h3>
                </div>
                <div className="overlay"></div>
            </article>
            </NavLink>
            <article id="subcontenedor">
                <NavLink to="recorrido">
                    <div id="apartado1">
                        <img src={recorridoimg} id='muestra' />
                        <div>
                            <h3>RECORRIDO VIRTUAL</h3>
                            <p>Te invitamos a que recorras una parte del museo de forma virtual</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                    </NavLink>
                <NavLink to="/mision">
                    <div id="apartado2">
                        <img src={misionimg} id='muestra2' />
                        <div>
                            <h3>ACTIVIDADES</h3>
                            <p>Cronograma de las actividades que se harán proximamente</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </NavLink>
                <NavLink to="/contacto">
                    <div id="apartado3">
                        <img src={contactoimg} id='muestra3' />
                        <h3>CONTACTANOS</h3>
                    </div>
                </NavLink>
            </article>
        </section >

    )
}

export default Section2alt1;