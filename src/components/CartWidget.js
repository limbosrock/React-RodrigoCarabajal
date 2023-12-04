import React from 'react';
import cart from '../assets/carrito.png';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const {totalProducts} = useCartContext();

  return (
    <div>
        <span> {totalProducts()} </span>
        <Link className="navbar-brand " to='/cart'>
            <img src={cart} alt='carrito' width="35px"></img>
        </Link>
    </div>
    
  )
}

export default CartWidget