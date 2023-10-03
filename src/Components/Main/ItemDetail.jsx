import React from 'react'

function ItemDetail({item}) {
  return (
    <div className='item-card' >
              <h3 className='title-card'>{item.title}</h3>
              <img src={item.image} alt="Imagen del item" className='item-img' />
              <button className='text-card'>Añadir al carro</button>
              <p className='text-card'>${item.price}</p>
              <p className='text-card'>Stock: {item.stock}</p>
              <p className='text-card'>{item.description}</p>
          </div>
  )
}

export default ItemDetail;