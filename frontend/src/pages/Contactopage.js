import Header from "../components/Header";
import '../styles/Contacto.css';
import Section2alt2 from "../components/Section2alt2";
function Contacto() {
  // <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d100564.34441971965!2d-57.6753848!3d-38.0322701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dee3561aad67%3A0x8be7d644df5c86c5!2sN%C3%A1poles%206825%2C%20B7608JAQ%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1709162619519!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 

  return (
    <div className="fondo">
      <Header />
      <main className="contactanos">
        <div id="acercarte">
          <h3>PODES ACERCARTE AL MUSEO </h3>
          <a
            href="https://www.google.com/maps/place/N%C3%A1poles+6825,+B7608JAQ+Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.0322701,-57.6753848,12z/data=!4m6!3m5!1s0x9584dee3561aad67:0x8be7d644df5c86c5!8m2!3d-38.0324341!4d-57.5929827!16s%2Fg%2F11lj0cj647?entry=ttu"
            target="_blank"><i
              className="fa-solid fa-location-dot"></i> Nápoles 6825</a>


        </div>

        <div id="redes">
          <h3>CONTACTANOS A TRAVÉS DE NUESTRAS REDES SOCIALES</h3>
          <div id="nombreredes">
            <a
              href="https://www.facebook.com/museo.de.la.asociacion.vecinal.de.foment.2023"
              target="_blank"><i className="fa-brands fa-facebook"></i> Facebook</a>
            <p id="mail"><i
              className="fa-solid fa-envelope"></i><a href="mailto:museoelmartillo@gmail.com">museoelmartillo@gmail.com</a></p>
            <p><i className="fa-brands fa-instagram"></i> Instagram</p>

          </div>

        </div>
      </main>

      <div id="comentarios">
        <form action="" method="" className="formulario" />
        <p>
          <label htmlFor="comentario"><i
            className="fa-solid fa-comment-dots"></i>¡ENVIANOS TU
            COMENTARIO!</label>
          <textarea name="comentario"></textarea>
        </p>
        <button>
          Enviar
        </button>

      </div>
      <Section2alt2 />
      <script>
        window.onload = function() {
          window.scrollTo(0, 0)};
      </script>
    </div>
  )
}

export default Contacto;