import ItemCard from './ItemCard';
import './Main.css';

const ItemList = ({ productos}) => {
  return (
    <div className='item-list-container'>
    {productos.length > 0 &&
      productos.map((producto) => {
        return (
          <ItemCard key={producto.id} producto={producto}/>
          )
        })
      }
      </div>
      )
}

export default ItemList;