import {useState} from 'react';




    const Itemquantity = ({stock, initial, onAdd}) => {
        const [count, setquantityer] = useState(initial);

        const restar =()=>{
            setquantityer ( count - 1 );
        }

        const sumar =()=>{
            setquantityer ( count + 1 );
        }  
        
    return (
        <div className='contador'>
            <button disabled={count <= 1}  onClick={restar}> - </button>
            <span> {count} </span>
            <button disabled={count >= stock} onClick={sumar}> + </button>
            <div>
                <button disabled={count<=0} onClick={()=> onAdd(count)}> Agregar </button>
            </div>
           
        </div>
    )
}

export default Itemquantity