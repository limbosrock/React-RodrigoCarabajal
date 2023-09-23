import React from 'react'
import { Link } from 'react-router-dom'

const BotonesNavbBar = () => {
  return (
    
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/ofertas"}>Ofertas</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/category/fruta"}>Frutas</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/category/verdura"}>Verduras</Link>
        </li>
        </ul>
    </div>
  )
}

export default BotonesNavbBar