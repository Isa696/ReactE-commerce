
const ItemCount = ({ quantity, increment, decrement }) =>{

    return(
        <>
        <div className="item-counter">
            <button className='text-card' onClick={decrement}>-</button>
                <p className="text-card">{quantity}</p>
            <button className='text-card' onClick={increment}>+</button>
        </div>
        </>
    )
}

export default ItemCount;