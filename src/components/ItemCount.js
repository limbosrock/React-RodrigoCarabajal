import {useState} from 'react';




const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCounter] = useState(initial);

    const restar =()=>{
        setCounter ( count - 1 );
    }

    const sumar =()=>{
        setCounter ( count + 1 );
    }  
    
  return (
    <div className="contador" >
        <button disabled={count <= 1}  onClick={restar}> - </button>
        <span> {count} </span>
        <button disabled={count >= stock} onClick={sumar}> + </button>
        <div>
            <button disabled={count<=0} onClick={()=>{onAdd(count)}}> Agregar </button>
        </div>


    </div>
  )
}

export default ItemCount