import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({cart : []})

export const CartProvider = ({children}) => {

    const cartInicial = JSON.parse(localStorage.getItem("CartAdded")) || [];

    const [cart, setCart] = useState(cartInicial);

    const addItem = (item, quantity) => {

        const addedItem = {...item , quantity};
        const newCart = [...cart];

        const isInCart = newCart.find((prod) => prod.id === addedItem.id)

        if (isInCart) {
            isInCart.quantity += quantity;
        } else {
            newCart.push(addedItem);
        }
        setCart(newCart);
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const priceTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }

    useEffect(() => {
        localStorage.setItem("CartAdded", JSON.stringify(cart));
    }, [cart])

    return(
        <CartContext.Provider value ={{cart, addItem, removeItem, clearCart, cartQuantity, priceTotal}}>
            {children}
        </CartContext.Provider>
        )
}