import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = (props) => {
    return (
        <nav class="barranav">
            <ul>
                <li><NavLink to="/" className={({ isActive}) =>
                    isActive ? "activo" : undefined}>Inicio</NavLink></li>
                <li><NavLink to="/..." className={({ isActive}) =>
                    isActive ? "activo" : undefined}>Recorrido virtual</NavLink></li>
                <li><NavLink to="/mision" className={({ isActive}) =>
                    isActive ? "activo" : undefined}>Nuestra misión</NavLink></li>
                <li><NavLink to="/contacto" className={({ isActive}) =>
                    isActive ? "activo" : undefined}>Contacto</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;