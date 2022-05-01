import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import { useEffect, useState } from "react"

const ShoppingCart =({cart, addQuantity, updateCart, lessQuantity, deleteCart}) => {

 
 
  const totalC = []

  const mapp = cart.forEach(item => {
    totalC.push(item.quantity * item.price)
  })
  const subTotal = totalC.reduce((partialSum, a) => partialSum + a, 0)
  const taxes = subTotal * 0.065
  const shipping = ((subTotal + taxes) > 50 ? 0.00 : 10.00)
  const total = subTotal + taxes + shipping

  console.log(total)

  const cartElements = cart.map(item => {
    return (
    <ShoppingCartItem key={item.id} url={item.url} quantity={item.quantity} name={item.name} price={item.price} id={item.id} deleteCart={deleteCart} addQuantity={addQuantity} lessQuantity={lessQuantity} updateCart={updateCart} />
    )
  })


  return (
    
    <div className="entireCart">
      <div>{cartElements}</div>
      {cart.length > 0 && <div>
        <div className="totalCost">Subtotal: <span className='span1'>${subTotal.toFixed(2)}</span> </div>
        <div className="totalCost">Taxes: <span className='span1'>${taxes.toFixed(2)}</span> </div>
        <div className="totalCost">Shipping: <span className='span1'>${shipping.toFixed(2)}</span> </div>
        <div style={{fontWeight: "bold", marginTop: "25px"}} className="totalCost">Subtotal: <span className='span1'>${total.toFixed(2)}</span> </div>
        
      </div>}
      {cart.length === 0 && <div style={{fontSize: "30px"}}>Cart is empty.</div>}
    </div>
    
  )
}

export default ShoppingCart