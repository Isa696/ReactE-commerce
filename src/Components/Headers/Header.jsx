import '../Headers/Headers.css';
import { StyledLinkHeaders } from './StyledLinkHeaders/StyledLinkHeaders';
import CartWidget from './CartWidget/CartWidget';

const Header = () => {
    return (
        <header className='contenedor-header'>
            <div className="nav-bar">
                <StyledLinkHeaders to="/inicio">Inicio</StyledLinkHeaders>
                <StyledLinkHeaders to="/integrantes">Integrantes</StyledLinkHeaders>
                <StyledLinkHeaders to="/discografia">Discografia</StyledLinkHeaders>
                <StyledLinkHeaders to="/" >Tienda</StyledLinkHeaders>
            </div>
            <CartWidget/>
        </header>
    )
}

export default Header;