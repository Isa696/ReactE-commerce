import Item from './Item';
import './Main.css';

const ItemList = ({ productos}) => {
  return (
    <div className='item-list-container'>
    {productos.length > 0 &&
      productos.map((producto) => {
        return (
          <Item key={producto.id} producto={producto}/>
          )
        })
      }
      </div>
      )
}

export default ItemList;