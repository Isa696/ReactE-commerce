import './Main.css';
import ItemList from './ItemList';
import data from '../../data.json';
import { useEffect, useState } from 'react';
import Greeting from './Greeting';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [productos, setProductos] = useState ([])
  const category = useParams().category;

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
        })
      }

      useEffect(() => {
        pedirProductos()
        .then((res) =>{
          if(category){
            setProductos(res.filter ((prod) => prod.category === category))
          } else {
            setProductos(res)
          }
        })
      }, [category])

    return (
      <>
        <Greeting/>
            <ItemList productos={productos}/>
      </>
  )
}

export default ItemListContainer;
