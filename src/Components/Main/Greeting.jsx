import React from 'react'
import { StyledLink } from './StyledLink/StyledLink';

function Greeting() {
  return (
    <>
        <h1 className='titleGreeting'>Bienvenido/a a nuestra tienda!!!</h1>
        <div className='category'>
        <StyledLink to="/category/gorra">Gorras</StyledLink>
        <StyledLink to="/category/remera">Remeras</StyledLink>
        </div>
    </>
  )
}

export default Greeting;