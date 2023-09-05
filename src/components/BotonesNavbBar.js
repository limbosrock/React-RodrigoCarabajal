import React from 'react'

const BotonesNavbBar = () => {
  return (
    
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Frutas</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Verduras</a>
        </li>
        </ul>
    </div>
  )
}

export default BotonesNavbBar