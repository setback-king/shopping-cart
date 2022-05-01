import React from 'react'
import { Link } from 'react-router-dom'




const Home =() => {

  return (
    <div className="home">
        <div className="shopNow">
            <span style={{marginBottom: "10px", marginTop: "15px"}}>BUY OUR FARM SUPPLIES NOW</span>
            <span className='shop--button'><Link className='text--link' to="/items" style={{color: "white", backgroundColor: "black", border: "solid black 1px", fontSize: "25px", padding: "9px", borderRadius: "2em", fontWeight: "bold"}}>SHOP</Link></span>
        </div>
       
    </div>
  )
}

export default Home