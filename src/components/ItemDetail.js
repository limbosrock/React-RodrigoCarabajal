import React from 'react';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import arrayProductos from '../productos.json';




const ItemDetail = () => {

    const {id} = useParams();
    const [item, setItem] = useState([]);
    
    const onAdd = (cantidad) => {
        console.log(`agregaste ${cantidad} productos`);
    }


    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
          setTimeout(()=>{
            resolve(arrayProductos.find(item=> item.id === id))
          }, 2000)
        });
        promesa.then((data)=>{
          setItem(data)
        })
        }, [id])

        console.log(item)

  return (
    <div className='row'>
     <div className='col-md-4 offset-md-4'>
        <img src= {item.pictureUrl} className='img-fluid'alt={item.tittle}/>
        <h2>{item.tittle}</h2>
        <p>Precio por Kilo</p>
        <p> $ {item.price}</p>
        <p> Cantidad en kilos</p>
     </div>
     <div>
        <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
     </div>
     </div>
  )
}

export default ItemDetail