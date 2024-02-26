import entradaAsocFomento from '../img/entradaAsocFomento.png';
import '../styles/Header.css';
const Header = (props) => {
    return(
        <header className='header1'>
        <img src={entradaAsocFomento}/>
        <h1>MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO </h1>
        </header>
    )
}

export default Header;