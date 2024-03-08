import '../styles/Carousel.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/Recorridopage.css'
function Carousel() {
  return (
    <div className='fondo'>
            <Header />
    <section className='contcarousel'>
      <div className="container">
        <div>
          <div className="content">
            <h2>GACETILLAS</h2>
            <span>Las gacetillas de finales de los años 90, dónde se informaban de las distintas gestiones realizadas por la Asociación así cómo noticias de interés general</span>
          </div>
        </div>
        <div>
          <div className="content">
            <h2>PERIÓDICOS HISTÓRICOS</h2>
            <span>Testimonios de las primeras construcciones en nuestro barrio y de los inicios de la Asociación</span>
          </div>
        </div>
        <div>
          <div className="content">
            <span>Homenaje a los trabajadores/as " Nuestros embarrados de compromiso"</span>
          </div>
        </div>
        <div>
          <div className="content">
            <span>¡Nuestro Rincón Infantil para grandes y chicos!</span>
          </div>
        </div>
      </div>

      <Link to="/recorrido">
        <h3 id='volver'><i class="fa-solid fa-angles-left"></i>  Volver</h3>
      </Link>
    </section>
    </div>
  )
}

export default Carousel;