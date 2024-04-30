
const ItemCount = ({ quantity, increment, decrement }) =>{

    return(
        <>
        <div className="item-counter">
            <button className='text-card btn-hover' onClick={decrement}>-</button>
                <p className="text-card">{quantity}</p>
            <button className='text-card btn-hover' onClick={increment}>+</button>
        </div>
        </>
    )
}

export default ItemCount;