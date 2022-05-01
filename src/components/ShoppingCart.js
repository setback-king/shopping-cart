import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import { useEffect, useState } from "react"

const ShoppingCart =({cart, updateQuantity, updateCart, deleteCart}) => {

 
 
  const totalC = []

  const mapp = cart.forEach(item => {
   
    totalC.push(item.quantity * item.price)
  })
  
  const totalCostt = totalC.reduce((partialSum, a) => partialSum + a, 0)
  
  const cartElements = cart.map(item => {
    return (
    <ShoppingCartItem key={item.id} url={item.url} quantity={item.quantity} name={item.name} price={item.price} id={item.id} deleteCart={deleteCart} updateQuantity={updateQuantity} updateCart={updateCart} />
    )
  })


  return (
    
    <div className="entireCart">
      <div>{cartElements}</div>
      <div className="totalCost">TOTAL COST: <span style={{marginLeft: "20px"}}>${totalCostt.toFixed(2)}</span> </div>
    </div>
    
  )
}

export default ShoppingCart