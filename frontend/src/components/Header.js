import { NavLink } from 'react-router-dom';
import entradaAsocFomento from '../img/entradaAsocFomento.png';
import '../styles/Header.css';
const Header = (props) => {
    return (
        <header className='header1'>
            <NavLink to="/">
                <img src={entradaAsocFomento} />
            </NavLink>
            <h1>MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO </h1>
        </header>
    )
}

export default Header;