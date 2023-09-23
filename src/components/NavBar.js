import React from 'react'
import BotonesNavbBar from './BotonesNavbBar'
import Logo from './Logo'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
   
        <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
            <div className="bg-primary">
              <Link className="navbar-brand " to={"/home"}>
               <Logo/>
              La Verduleria </Link>
            </div>
           
           <BotonesNavbBar/>
           <CartWidget/>
           

        </div>
      </nav>
    
    )
}

export default NavBar