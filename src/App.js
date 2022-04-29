import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemsPage from "./components/ItemsPage";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import ItemInfoPage from "./components/ItemInfoPage";
import { useState } from 'react'
import Data from "./components/Data";





const App = () => {

  const list = Data()

  const [cart, setCart] = useState([])
  const [pageItem, setPageItem] = useState([])
  

  
 const handleClick = (id) => {
  list.forEach(item => {
    if(item.id === id) {
      setPageItem(item)
      
    }
  }) 
 }
 


  const addCart = (id) => {
    list.map(item => {
      if(item.id === id) {
        setCart(prevValue => [...prevValue, item])
        }
    })
  }

  console.log(pageItem)


  return (

    <Router>
      <div className="App">
      <Header cart={cart}/>
      <div className="main">
      <Routes>
       
          <Route path="/" element={<Home  />}/>
          <Route path="/items" element={<ItemsPage handleClick={handleClick} addCart={addCart}/>}/>
          <Route path="/items/:item" element={<ItemInfoPage itemInfo={pageItem} addCart={addCart}/>}/>
          <Route path="/cart" element={<ShoppingCart cart={cart} />}/>
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
