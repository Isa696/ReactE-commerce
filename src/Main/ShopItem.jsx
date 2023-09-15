import './Main.css';

export const ShopItem = ({title, image, stock, description}) => {
  return (
    <div className='item-card'>
        <h3 className='title-card'>{title}</h3>
            <img src={image} alt="Imagen del producto" className='item-img'/>
        <button className='text-card'>Añadir al carro</button>
        <p className='text-card'>Stock: {stock}</p>
        <p className='text-card'>{description}</p>
    </div>
  )
}

export default ShopItem;