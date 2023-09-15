import './Headers.css';
import CartWidgetImg from '../Assets/cartWidgetImg.png';

export const CartWidget = () => {
    return(
        <div className='CartWidgetContainer'>
            <img src={CartWidgetImg} alt="Carrito de compras" className='CartWidget'/>
            <p id='CartCount'>0</p>
        </div>
    )
}