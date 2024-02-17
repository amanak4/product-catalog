import React from "react";
import { Route,Routes} from "react-router-dom";
import Home from "./views/home/home";
import Category from "./views/category/category";
import Product from "./views/products/product";
import Cart from "./views/cart/cart";
import Wishlist from "./views/cart/wishlist";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <div>
    <Navbar />
     <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/1/:id" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
