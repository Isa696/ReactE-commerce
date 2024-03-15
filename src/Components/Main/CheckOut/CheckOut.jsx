import React, { useContext, useState } from 'react';
import { CartContext } from '../../../Context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import {db} from '../../../firebase/config';
import './CheckOut.css';

function CheckOut() {

    const { cart, priceTotal , clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const [pedidoId, setPedidoId] = useState("")

    const buy = (data) => {
        const pedido = {
            client : data,
            products : cart,
            total: priceTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            clearCart();
        })
    }

        if (pedidoId) {
            return (
                <div className="form-container">
                    <h1 className="text-card">Muchas gracias por tu compra</h1>
                    <p className='text-card'>Tu número de pedido es: {pedidoId}</p>
                </div>
            )
        }

    return (
        <div className="form-container">
            <h1 className="text-card">Finalizar Compra</h1>
            <form className="form" onSubmit={handleSubmit(buy)}>

                <input type="text" placeholder="Ingresá tu nombre" className="text-card"{...register("name")} />
                <input type="email" placeholder="Ingresá tu e-mail" className="text-card"{...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" className="text-card"{...register("phone")} />

                <button className="text-card btn-hover" type="submit" >Comprar</button>

            </form>
        </div>
    )
}

export default CheckOut;