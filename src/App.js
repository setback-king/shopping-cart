import Header from "./components/Header";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemsPage from "./components/ItemsPage";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  return (
    <Router>
      <div className="App">
      <Header />
      <div className="main">
      <Routes>
       
          <Route path="/" element={<Home />}/>
          <Route path="/items" element={<ItemsPage />}/>
          <Route path="/cart" element={<ShoppingCart />}/>
       
      </Routes>
      </div>
      <Footer />
       </div>
    </Router>
  );
}

export default App;
