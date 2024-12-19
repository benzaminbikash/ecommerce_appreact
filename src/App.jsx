import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Testmonial from "./pages/Testmonial";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SIgnup";
import Forgetpassword from "./pages/Forgetpassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopdetail" element={<ShopDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/testimonial" element={<Testmonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
      </Routes>
    </>
  );
}

export default App;
