import Header from '../components/Header';
import '../styles/Recorridopage.css'
import Puerta from '../components/puerta';
import Section2alt3 from '../components/Section2alt3';

function Recorrido() {
  return (
    <main>
            <Header />
    <section className='fondorecorrido'>
      <h2>¡RECORRÉ DESDE TU CASA!  <i className="fa-solid fa-person-walking"></i></h2>
      <i className="fa-solid fa-angles-down" id='arrowicon'></i>
      <Puerta />
      <script>
        window.onload = function() {
          window.scrollTo(0, 0)};
      </script>
    </section>
    <Section2alt3></Section2alt3>
    <script>
        window.onload = function() {
          window.scrollTo(0, 0)};
      </script>
    </main>

  )
}

export default Recorrido;