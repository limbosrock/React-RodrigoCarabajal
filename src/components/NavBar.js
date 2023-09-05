import React from 'react'
import BotonesNavbBar from './BotonesNavbBar'
import Logo from './Logo'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
   
        <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
            <div className="bg-primary">
              <a className="navbar-brand " href="#">
               <Logo/>
              La Verduleria </a>
            </div>
           
           <BotonesNavbBar/>
           <CartWidget/>
           

        </div>
      </nav>
    
    )
}

export default NavBar