import React from 'react'
import { Link } from 'react-router-dom'

function Greeting() {
  return (
    <>
        <h1 className='titleGreeting'>Bienvenido/a a nuestra tienda!!!</h1>
        <div className='category'>
        <Link className='text-card' to="/productos/gorra">Gorras</Link>
        <Link className='text-card' to="/productos/remera">Remeras</Link>
        </div>
    </>
  )
}

export default Greeting;