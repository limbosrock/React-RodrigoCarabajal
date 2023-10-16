import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import arrayProductos from '../productos.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const {id} = useParams();
  const [item, setItem] = useState([]);

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


  return (
    <div className='container'>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer