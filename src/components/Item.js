
import React from 'react'
import { Link, Outlet } from "react-router-dom"




function Item({name, url, price, id, addCart}) {


  return (
   
        <div className='entireItem'>
            <div id={id} className="item--container" >
                <div className="image" >
                    <Link to={`/shopping-cart/items/${id}`}><img id={id} className='item--image' src={url} alt={name} /></Link>
                </div>
                <div className="item--info">
                    <span className='item--name'>{name}</span>
                    -
                    <span className="item--price">${price}</span>
                </div> 
            </div>
            <p id={id} className="moreDetails"><Link id={id} className="text--link" to={`/shopping-cart/items/${id}`}>More Details</Link></p>
             <button className="addCart" onClick={(e) => addCart(e.target.id)} id={id}>Add to Cart</button>
             <Outlet />
        </div>
  )
}

export default Item