import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemsPage from "./components/ItemsPage";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import ItemInfoPage from "./components/ItemInfoPage";
import { useState, useEffect } from 'react'
import Data from "./components/Data";





const App = () => {

  const list = Data()

  const [cart, setCart] = useState([])
  const [itemList, setItemList] = useState([])
  
  

  useEffect(() => {
    setItemList(list)
  }, [])

  const lessQuantity = (id) => {
    const exist = cart.find((x) => x.id === id);
    if(exist.quantity === 1) {
      setCart(prevValue => prevValue.filter((x) => x.id !== id))
    }
    else {
      setCart(prevValue => prevValue.map((x) => 
        x.id === id ? {...exist, quantity: exist.quantity -1} : x
      ))
    }
  } 
 
  const addQuantity = (id) => {
        
         setCart(prevValue => prevValue.map(item => {   
           if(item.id === id) {
             return {...item, quantity: item.quantity + 1}
             }
           else return item
         }))   
       
  }

  const addCart = (id) => {
    const exist = cart.find((x) => x.id === id);
    if(exist) {
      setCart(prevValue => prevValue.map((x) => 
        x.id === id ? {...exist, quantity: exist.quantity + 1} : x
      ))
    } 
    else {
    itemList.map(item => {
      if(item.id === id) {
        setCart(prevValue => [...prevValue, item])
        }
      
        })
    }
  }
  console.log(cart)

  const deleteCart =(id) => {
    setCart(prevValue => prevValue.filter(item => {
     if(item.id !== id) {
       return item
     }
    }))
     setItemList(prevValue => prevValue.map(item => {
       if(item.id === id) {
         return {...item, quantity: 1}
       }
       else return item
     }))
  }

  return (

    <Router>
      <div className="App">
      <Header cart={cart}/>
      <div className="main">
      <Routes>
       
          <Route path="/" element={<Home  />}/>
          <Route path="/items" element={<ItemsPage addCart={addCart}/>}/>
          <Route path="/items/:id" element={<ItemInfoPage addCart={addCart}/>}/>
          <Route path="/cart" element={<ShoppingCart cart={cart} addQuantity={addQuantity} lessQuantity={lessQuantity} deleteCart={deleteCart} />}/>
          <Route
              path="*"
              element={
                <main style={{ padding: "1rem",
                fontSize: "50px"}}>
                  <p>There's nothing here! Incorrect Link.</p>
                </main>
              } />
       
      </Routes>
      </div>
      <Footer />
       </div>
    </Router>

  );
}

export default App;
