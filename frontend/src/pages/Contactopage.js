import Header from "../components/Header";
import '../styles/Contacto.css';
import Section2alt2 from "../components/Section2alt2";
function Contacto() {
    return (
        <div className="fondo">
            <Header />
            <main class="contactanos">
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
                            target="_blank"><i class="fa-brands fa-facebook"></i> Facebook</a>
                        <p id="mail"><i
                            class="fa-solid fa-envelope"></i>museoelmartillo@gmail.com</p>
                        <p><i class="fa-brands fa-instagram"></i> Instagram</p>

                    </div>

                </div>
            </main>

            <div id="comentarios">
                <form action method class="formulario"/>
                    <p>
                        <label for="comentario"><i
                            class="fa-solid fa-comment-dots"></i>¡ENVIANOS TU
                            COMENTARIO!</label>
                        <textarea name="comentario"></textarea>
                        <input type="submit" value="Enviar" id="btnenv"/>
                    </p>

            </div>
            <Section2alt2/>
            <script>
        window.onload = function() {
            window.scrollTo(0, 0)};
            </script>
        </div>
    )
}

export default Contacto;