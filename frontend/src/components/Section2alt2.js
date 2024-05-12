import '../styles/Section2.css'
import actividadesimg from '../img/Inauguracion.jpeg'
import recorridoimg from '../img/Inauguracion2.jpeg'
import misionimg from '../img/mision.jpeg'
import novedadesimg from '../img/novedades.jpeg'
import { BrowserRouter, Link, NavLink, Routes } from 'react-router-dom'
const Section2alt2 = (props) => {
    return (
        <section id="contenedor2">
            <div className='postext'>
                <div className="text">¡SEGUÍ EXPLORANDO NUESTRA PÁGINA!</div>
            </div>
            <NavLink to="/">
                <article id="parte1">
                    <img src={actividadesimg} id='actividades' />
                    <div>
                        <h3>VOLVER AL INICIO</h3>
                    </div>
                    <div className="overlay"></div>
                </article>
            </NavLink>
            <article id="subcontenedor">
                <NavLink to="/recorrido">
                    <div id="apartado1">
                        <img src={recorridoimg} id='muestra' />
                        <div>
                            <h3>RECORRIDO VIRTUAL</h3>
                            <p>Te invitamos a que recorras una parte del museo de forma virtual</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </NavLink>
                <NavLink to="/novedades">
                    <div id="apartado2">
                        <img src={novedadesimg} id='muestra2' />
                        <div>
                            <h3>NOVEDADES</h3>
                            <p>Cronograma de las actividades que se harán proximamente</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </NavLink>
                <NavLink to="/mision">
                    <div id="apartado3">
                        <img src={misionimg} id='muestra3' />
                        <div>
                            <h3>NUESTRA MISIÓN</h3>
                            <p>Te contamos un poco sobre que hacemos en el museo</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </NavLink>
            </article>
        </section >

    )
}

export default Section2alt2;