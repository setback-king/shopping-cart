import React from 'react'
import { Link } from "react-router-dom"

const Header = ({cart}) => {
  return (
    <div className="header">
        <h1 className="header--title"><Link className="text--link" to="/">Frank's Farm Supply</Link></h1>
        <nav>
            <li ><Link className="text--link" to="/">Home</Link></li>
            <li ><Link className='text--link' to="/items">Shop</Link></li>
            <li >
                <Link className='text--link' to="/cart"><img src="favicon-32x32.png" alt="" /></Link>
            </li>
                <span className="cart--count">{cart.length}</span>
           
        </nav>
    </div>
  )
}

export default Header