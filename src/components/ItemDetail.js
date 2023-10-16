import React, {useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {useCartContext} from '../context/CartContext';




const ItemDetail = ({item}) => {

    const [goToCart, setGoToCart] = useState(false);

    const {addItem} = useCartContext();


    const onAdd = (quantity) =>{
        setGoToCart(true);
        addItem(item, quantity);
       }





return (
    <div className='row'>
        <div className='col-md-4 offset-md-4'>
            <img src= {item.pictureUrl} className='img-fluid'alt={item.tittle}/>
            <h2>{item.tittle}</h2>
            <p>Precio por Kilo</p>
            <p> $ {item.price}</p>
            <p> Cantidad en kilos</p>
            <div>
            { goToCart ? 
                    <Link to={'/cart'} type="button" className="btn btn-outline-primary btn-lg" > Terminar compra </Link> :
            
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
            } 
            </div>
        </div>
    </div>
)
}

export default ItemDetail