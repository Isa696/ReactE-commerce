import { CartWidget } from './CartWidget'
import './Headers.css'

export const Headers = () => {
    return (
        <header className='contenedor-header'>
            <ul className="nav-bar">
                <li className="nav-bar-li">Inicio</li>
                <li className="nav-bar-li">Integrantes</li>
                <li className="nav-bar-li">Discografia</li>
                <li className="nav-bar-li">Tienda</li>
            </ul>
            <CartWidget/>
        </header>
    )
}