import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import arrayProductos from '../productos.json'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const onAdd = (cantidad) => {
      console.log(`agregaste ${cantidad}`);
    }



  
  const [item, setItem] = useState([]);
  const {id} = useParams;



  useEffect(()=>{
    const fetchData = async()=>{
      try{
       const data = await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos)
        }, 2000);
       });
       setItem(data);
       
      }catch(error){
       console.log('Error:', error);
     }
   };
   fetchData();

  }, [id])



  return (
    <div>
        


        <ItemCount initial={1} stock={10} onAdd={onAdd} />

        <ItemList item={item}/>







    </div>
  );
}

export default ItemListContainer