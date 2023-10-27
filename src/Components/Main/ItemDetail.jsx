import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount';
import { StyledLink } from './StyledLink/StyledLink';
import { CartContext } from '../../Context/CartContext';

function ItemDetail({item}) {

  const {addItem} = useContext(CartContext);

  const [quantity , setQuantity] = useState(1)

  const increment = () => {
      quantity < item.stock && setQuantity(quantity + 1)
  }

  const decrement = () => {
      quantity > 1 && setQuantity(quantity -1)
  }

  return (
    <div className='item-card' >
              <h3 className='title-card'>{item.title}</h3>
              <img src={item.image} alt="Imagen del item" className='item-img' />
              <p className='text-card'>${item.price}</p>

              <ItemCount
              stock={item.stock}
              quantity={quantity}
              increment={increment}
              decrement={decrement}
              />

                <button className='text-card' onClick={() => {addItem(item, quantity)}} disabled={!item.stock}>
                Añadir al carro</button>


                    <StyledLink to='/cart'
                    className='title-card'>Ir al carrito
                    </StyledLink>
              <p className='text-card'>Stock: {item.stock}</p>
              <p className='text-card'>{item.description}</p>
          </div>
  )
}

export default ItemDetail;