import cartWidgetIcon from '../../../Assets/cart-widget-img.png';
import './cartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';

function CartWidget () {

    const {cartQuantity} = useContext(CartContext);

    return(
        <div className='CartWidgetContainer'>
            <Link to="/cart" >
            <img src={cartWidgetIcon} alt="Carrito de compras" className='CartWidget'/>
            </Link>
            {cartQuantity() !== 0 && (
                    <span id='cart-count'>{cartQuantity()}</span>
                )}
        </div>
    )
}

export default CartWidget;