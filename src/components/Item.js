import React from 'react'
import {Link} from 'react-router-dom'


const Item = ({item}) => {
  return (

     <Link to={"/item/" + item.id} className='text-decoration-none'>
      <div className='container'>
        <div className='card border border-0'>
          <img src= {item.pictureUrl} className='card-img-top' alt={item.tittle}/>
           <div className='card-body text-center'>
            <p className='card-text'>{item.tittle}</p>
           </div>
        </div>
      </div>
    </Link>
    
  )
}

export default Item