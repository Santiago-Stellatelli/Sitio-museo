import '../styles/Section2.css'
import actividadesimg from '../img/actividades.jpeg'
import recorridoimg from '../img/recorrido.jpeg'
import misionimg from '../img/mision.jpeg'
import contactoimg from '../img/contacto.jpeg'
import misionpage from '../pages/misionpage'
const Section2 = (props) => {
    return(
        <section id="contenedor2">
        <article id="parte1">
            <img src={actividadesimg} id='actividades'/>
            <h3>INAUGURACIÓN DEL MUSEO</h3>
        </article>
        <article id="subcontenedor">
            <a href="recorrido.html">
                <div id="apartado1">
                    <img src= {recorridoimg} id='muestra'/>
                    <h3>RECORRIDO VIRTUAL</h3>
                </div>
            </a>
            <a href= '../pages/misionpage.js'>
                <div id="apartado2">
                    <img src= {misionimg} id='muestra2'/>
                    <h3>NUESTRA MISIÓN</h3>
                </div>
            </a>
            <a href="contacto.html">
                <div id="apartado3">
                    <img src={contactoimg} id='muestra3'/>
                    <h3>CONTACTANOS</h3>
                </div>
            </a>
        </article>
    </section>
    )
}

export default Section2;