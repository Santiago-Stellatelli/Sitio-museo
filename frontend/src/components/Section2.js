import '../styles/Section2.css'
import actividadesimg from '../img/actividades.jpeg'
import recorridoimg from '../img/recorrido.jpeg'
import misionimg from '../img/mision.jpeg'
import contactoimg from '../img/contacto.jpeg'
import { BrowserRouter, Link, NavLink, Routes } from 'react-router-dom'
const Section2 = (props) => {
    return (
        <section id="contenedor2">
            <article id="parte1">
                <img src={actividadesimg} id='actividades' />
                <div>
                    <h3>INAUGURACIÓN DEL MUSEO</h3>
                    <p>Aquí podras ver un cronograma de las actividades que ya se realizaron y las que se harán proximamente</p>
                </div>
                <div className="overlay"></div>
            </article>
            <article id="subcontenedor">
                <a href="recorrido.html">
                    <div id="apartado1">
                        <img src={recorridoimg} id='muestra' />
                        <div>
                            <h3>RECORRIDO VIRTUAL</h3>
                            <p>Te invitamos a que recorras una parte del museo de forma virtual</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </a>
                <NavLink to="/mision">
                    <div id="apartado2">
                        <img src={misionimg} id='muestra2' />
                        <div>
                            <h3>NUESTRA MISIÓN</h3>
                            <p>Te contamos un poco sobre que hacemos en el museo</p>
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

export default Section2;