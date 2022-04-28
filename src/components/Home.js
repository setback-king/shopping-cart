import React from 'react'
import { useNavigate } from 'react-router-dom'




const Home =() => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/items`; 
        navigate(path);
    }



  return (
    <div className="home">
        <div className="shopNow">
            <span>SHOP OUR FARM SUPPLIES NOW</span>
            <button className='shop--button' onClick={routeChange}>SHOP</button>
        </div>
       
    </div>
  )
}

export default Home