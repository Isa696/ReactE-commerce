import '../Headers/Headers.css';
import { StyledLinkHeaders } from './StyledLinkHeaders/StyledLinkHeaders';
import CartWidget from './CartWidget/CartWidget';

const Header = () => {
    return (
        <header className='contenedor-header'>
                <StyledLinkHeaders to="/" className='top-centered' >Inicio</StyledLinkHeaders>
            <CartWidget/>
        </header>
    )
}

export default Header;