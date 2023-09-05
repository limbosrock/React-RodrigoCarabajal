import React from 'react'
import cart from '../assets/carrito.png'

const CartWidget = () => {
  return (
    <div>
        <span> 0 </span>
        <a className="navbar-brand " href="#">
            <img src={cart} alt='carrito'></img>
        </a>
    </div>
    
  )
}

export default CartWidget