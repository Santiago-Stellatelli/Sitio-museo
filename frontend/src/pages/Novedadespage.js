import Header from "../components/Header";
import '../styles/Novedadespage.css';
import Cintaimg from "../img/Cinta.jpeg";
import Section2alt4 from "../components/Section2alt4";

function Novedades(){
    return(
        <div className="fondo">
            <Header/>
            <div id="cronograma">
            <h3>INAUGURACIÓN DEL MUSEO <br/> 1º de Diciembre 2023</h3>
            <p>Al acto inaugural asistieron vecinos, representantes de diferentes instituciones y organizaciones de nuestro barrio y funcionarios municipales
                <img src={Cintaimg}/>
            </p>
            </div>
            <Section2alt4></Section2alt4>
            <script>
        window.onload = function() {
          window.scrollTo(0, 0)};
      </script>
        </div>
    )
}

export default Novedades;