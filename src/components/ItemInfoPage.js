import React from 'react'


function ItemInfoPage({itemInfo, addCart}) {
 
  
 
  const {name, url, description, id, price} = itemInfo



  return (
    <div className="itemInfoPage">
      <h1>{name}</h1>
      <img src={url} alt="" />
      <p style={{fontWeight: "bold", fontSize: "35px"}}>{description}</p>
      <span style={{marginBottom: "20px", marginTop: "-60px", fontSize: "30px"}}>${price}</span>
      <button className='addCart' style={{width: "20%", height: "50px", fontSize: "30px"}}id={id} onClick={(e) => addCart(e.target.id)}>Add to Cart</button>
      
    </div>
  )
}

export default ItemInfoPage