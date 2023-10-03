import { CartWidget } from './CartWidget';
import '../Headers/Headers.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='contenedor-header'>
            <ul className="nav-bar">
                <li className="nav-bar-li">Inicio</li>
                <li className="nav-bar-li">Integrantes</li>
                <li className="nav-bar-li">Discografia</li>
                <li> <Link className="nav-bar-li" to="/" >Tienda</Link></li>
            </ul>
            <CartWidget/>
        </header>
    )
}

export default Header;