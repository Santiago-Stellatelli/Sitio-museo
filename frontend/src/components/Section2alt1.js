import '../styles/Section2.css'
import actividadesimg from '../img/Inauguracion.jpeg'
import recorridoimg from '../img/Inauguracion2.jpeg'
import novedadesimg from '../img/novedades.jpeg'
import contactoimg from '../img/entradaAsocFomento.png'
import { BrowserRouter, Link, NavLink, Routes } from 'react-router-dom'
const Section2alt1 = (props) => {
    return (
        <section id="contenedor2">
            <div className='postext'>
            <div className="text">¡SEGUÍ EXPLORANDO NUESTRA PÁGINA!</div>
            </div>
            <Link to="/">
            <article id="parte1">
                <img src={actividadesimg} id='actividades' />
                <div>
                    <h3>VOLVER AL INICIO</h3>
                </div>
                <div className="overlay"></div>
            </article>
            </Link>
            <article id="subcontenedor">
                <Link to="/recorrido">
                    <div id="apartado1">
                        <img src={recorridoimg} id='muestra' />
                        <div>
                            <h3>RECORRIDO VIRTUAL</h3>
                            <p>Te invitamos a que recorras una parte del museo de forma virtual</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                    </Link>
                <Link to="/novedades">
                    <div id="apartado2">
                        <img src={novedadesimg} id='muestra2' />
                        <div>
                            <h3>NOVEDADES</h3>
                            <p>Cronograma de las actividades que se harán proximamente</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </Link>
                <Link to="/contacto">
                    <div id="apartado3">
                        <img src={contactoimg} id='muestra3' />
                        <h3>CONTACTANOS</h3>
                    </div>
                </Link>
            </article>
        </section >

    )
}

export default Section2alt1;