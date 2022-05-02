import {useParams} from "react-router-dom"
import Data from "./Data"


function ItemInfoPage({addCart}) {
 
 const list = Data()

  const {id} = useParams()
 
 

  const selectedItem = list.find((item) => item.id === id)

  const {name, price, url, description} = selectedItem

  return (
    
    <div className="itemInfoPage">
      <div style={{height: "35vh", backgroundColor: "tan", padding: "12px"}}><img className="item--image" style={{width: "100%", height: "100%"}} src={`../${url}`} alt=""/></div>
      <div className="itemInfoPage">
        <h1 style={{fontSize: "40px", marginBottom: "-20px"}}>{name}</h1>
        <p className="item--description">{description}</p>
        <span style={{marginBottom: "20px", marginTop: "-30px", fontSize: "30px"}}>${price}</span>
        <button className='addCart' style={{fontSize: "30px", backgroundColor:"black"}}id={id} onClick={(e) => addCart(e.target.id)}>Add to Cart</button>
      
      </div>
    </div>
  )
}

export default ItemInfoPage