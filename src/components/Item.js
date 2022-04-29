
import React from 'react'
import { Link, Outlet } from "react-router-dom"




function Item({name, url, price, id, addCart, handleClick}) {


  return (
   
        <div className='entireItem'>
            <div id={id} className="item--container" onClick={(e) => handleClick(e.target.id)}>
                <div className="image" >
                    <Link to={`/items/${name}`}><img onClick={(e) => handleClick(e.target.id)} id={id} className='item--image' src={url} alt={name} /></Link>
                </div>
                <div className="item--info">
                    <span className='item--name'>{name}</span>
                    -
                    <span className="item--price">${price}</span>
                </div> 
            </div>
            <p id={id} onClick={(e) => handleClick(e.target.id)} className="moreDetails"><Link id={id} onClick={(e) => handleClick(e.target.id)} className="text--link" to={`/items/${name}`}>More Details</Link></p>
             <button className="addCart" onClick={(e) => addCart(e.target.id)} id={id}>Add to Cart</button>
             <Outlet />
        </div>
  )
}

export default Item