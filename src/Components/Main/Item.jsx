import React from 'react';
import { Link } from 'react-router-dom';

function Item({producto}) {
  return (
    <div className='item-card' >
              <h3 className='title-card'>{producto.title}</h3>
              <img src={producto.image}  alt="Imagen del producto" className='item-img' />
              <button className='text-card'>Añadir al carro</button>
              <p className='text-card'>Stock: {producto.stock}</p>
              <Link className='text-card' to={`/item/${producto.id}`}>+info</Link>
          </div>
  )
}

export default Item;