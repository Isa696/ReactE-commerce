import './Main.css';
import React, { useState, useEffect } from 'react';
import { pedirItemPorId } from '../../Helpers/pedirDatos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Greeting from './Greeting';

function ItemDetailContainer() {


    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])
    return (
        <>
        <Greeting/>
        <div className='item-list-container'>
            {item && <ItemDetail item={item} />}
        </div>
        </>
    )
}

export default ItemDetailContainer;