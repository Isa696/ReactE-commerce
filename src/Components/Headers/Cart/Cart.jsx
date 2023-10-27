import React, { useContext } from 'react';
import './Cart.css';
import trashIcon from '../../../Assets/trash-remove-item.png';
import { CartContext } from '../../../Context/CartContext';
import { StyledLink } from '../../Main/StyledLink/StyledLink';

function Cart() {
    const {cart, priceTotal, clearCart, removeItem } = useContext(CartContext);

  return (
        <div className='cart-card-container'>

            {
            cart.map((prod) => (
                <div key={prod.id} className='cart-card'>
                    <img src={prod.image} alt="Imagen del item" className='item-img' />
                    <h3 className='text-card'>{prod.title}</h3>
                    <p className='text-card'>Precio unit: ${prod.price}</p>
                    <p className='text-card'>Cant: {prod.quantity}</p>
                    <p className='text-card'>Precio total: ${prod.price * prod.quantity}</p>
                    <img src={trashIcon} className='trash-img' alt='icono quitar' onClick={() => removeItem(prod.id)}></img>
                </div>
            ))
        }

            {
            cart.length > 0 ?
            <div className='cart-card'>
                <h2 className='text-card' >Precio Final: ${priceTotal()}</h2>
                <button className='text-card btn-hover' onClick={() => clearCart()}>Quitar todo</button>
                <StyledLink  to="/checkout">Finalizar compra</StyledLink>
            </div> :
            <h2 className='text-card'>El carrito está vacío :(</h2>
        }

        </div>
  )
}

export default Cart;