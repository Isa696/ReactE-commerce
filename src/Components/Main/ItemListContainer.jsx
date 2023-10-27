import './Main.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import Greeting from './Greeting';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../firebase/config';


export const ItemListContainer = () => {

  const [productos, setProductos] = useState ([])

  const category = useParams().category;

      useEffect(() => {

        const productosRef = collection(db, "Items")

        const qry = category ? query(productosRef, where("category", "==", category)) : productosRef;

        getDocs(qry)
            .then((resp) =>{
              setProductos(
                resp.docs.map ((doc) =>{
                  return { ...doc.data(), id: doc.id }
                })
                )
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
