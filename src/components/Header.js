import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
        <h1 className="header--title">Frank's Farm Supply</h1>
        <nav>
            <li ><Link className="text--link" to="/">Home</Link></li>
            <li ><Link className='text--link' to="/items">Shop</Link></li>
            <li >
                <Link className='text--link' to="/cart"><img src="favicon-32x32.png" alt="" /></Link>
            </li>
                <span className="cart--count">0</span>
           
        </nav>
    </div>
  )
}

export default Header