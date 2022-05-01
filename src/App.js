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


  
  const updateQuantity = (text, id) => {
      
         setCart(prevValue => prevValue.map(item => {   
           if(item.id === id) {
             if(text === "+") {
             return {...item, quantity: item.quantity + 1}
             }
             else if ((item.quantity > 0) && (text === "-")) {
               return {...item, quantity: item.quantity - 1}
             }
             else if (item.quantity === 0) {
               return item
             }
             
           }
           else return item
         }))
         setItemList(prevValue => prevValue.map(item => {
          if(item.id === id) {
            if(text === "+") {
            return {...item, quantity: item.quantity + 1}
            }
            else if ((item.quantity > 0) && (text === "-")) {
              return {...item, quantity: item.quantity - 1}
            }
            else if (item.quantity === 0) {
              return item
            }
            
          }
          else return item
        }))
          
       
  }

  const addCart = (id) => {
    itemList.map(item => {
      if(item.id === id) {
        if(cart.includes(item) === false) {
        setCart(prevValue => [...prevValue, item])
        }
      
        }
    })
  }

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
        <Route path="/cart" element={<ShoppingCart cart={cart} updateQuantity={updateQuantity} deleteCart={deleteCart} />}/>
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
