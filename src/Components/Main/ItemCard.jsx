import React from 'react';
import { StyledLink } from './StyledLink/StyledLink';

function ItemCard({producto}) {
  return (
    <div className='item-card' >
              <h3 className='title-card'>{producto.title}</h3>
              <img src={producto.image}  alt="Imagen del producto" className='item-img' />
              <p className='text-card'>Stock: {producto.stock}</p>
              <StyledLink className='text-card' to={`/item/${producto.id}`}>+info</StyledLink>
          </div>
  )
}

export default ItemCard;