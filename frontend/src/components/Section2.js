import '../styles/Section2.css'
import misionimg from '../img/mision.jpeg'
import { BrowserRouter, Link, NavLink, Routes } from 'react-router-dom'
import entradaAsoc from '../img/entradaAsocFomento.png'
import inauguracionimg from '../img/Inauguracion.jpeg'
import in2 from '../img/Inauguracion2.jpeg'
const Section2 = (props) => {
    return (
        <section id="contenedor2">
            <div className='postext'>
                <div className="text">¡SEGUÍ EXPLORANDO NUESTRA PÁGINA!</div>
            </div>
            <Link to="novedades">
                <article id="parte1">
                    <img src={inauguracionimg} id='actividades' />
                    <div>
                        <h3>NOVEDADES</h3>
                        <p>Aquí podras ver un cronograma de las actividades que ya se realizaron y las que se harán proximamente</p>
                    </div>
                    <div className="overlay"></div>
                </article>
            </Link>
            <article id="subcontenedor">
                <Link to="/recorrido">
                    <div id="apartado1">
                        <img src={in2} id='muestra' />
                        <div>
                            <h3>RECORRIDO VIRTUAL</h3>
                            <p>Te invitamos a que recorras una parte del museo de forma virtual</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </Link>
                <Link to="/mision">
                    <div id="apartado2">
                        <img src={misionimg} id='muestra2' />
                        <div>
                            <h3>NUESTRA MISIÓN</h3>
                            <p>Te contamos un poco sobre que hacemos en el museo</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </Link>
                <Link to="/contacto">
                    <div id="apartado3">
                        <img src={entradaAsoc} id='muestra3' />
                        <h3>CONTACTANOS</h3>
                    </div>
                </Link>
            </article>
        </section >

    )
}

export default Section2;