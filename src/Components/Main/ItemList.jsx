import ItemCard from './ItemCard';
import './Main.css';

const ItemList = ({ productos}) => {
  return (
    <div className='item-list-container'>
          {productos.map((prod) =>
            <ItemCard key={prod.id} producto={prod}/>
          )
        }
      </div>
      )
}

export default ItemList;