import './Main.css';
import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Greeting from './Greeting';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

function ItemDetailContainer() {

    const [loading, setLoading] = useState(true);


    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        const docRef = doc(db, "Items", id)
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id }
                )
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id])

    return (
        <>
            <Greeting />
            {loading ? (
                <span className="loader"></span>
            ) : (
                <div className='item-list-container'>
                    {item && <ItemDetail item={item} />}
                </div>
            )}
        </>
    )
}

export default ItemDetailContainer;