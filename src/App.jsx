import React from "react";
import { Routes, Route } from "react-router";

import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/SIgnup";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Testmonial from "./pages/Testmonial";
import ShopDetail from "./pages/ShopDetail";
import Forgetpassword from "./pages/Forgetpassword";
import ProfileLayout from "./components/common/ProfileLayout";
import ProfileCart from "./pages/ProfileCart";
import ScrollUp from "./components/ScrollUp";
import Notfound from "./pages/Notfound";
import Changepassword from "./pages/Changepassword";

function App() {
  return (
    <>
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopdetail" element={<ShopDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/testimonial" element={<Testmonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route path="/change-password" element={<Changepassword />} />

        <Route path="*" element={<Notfound />} />

        {/* after login */}
        <Route path="/account" element={<ProfileLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<ProfileCart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
