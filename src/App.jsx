import React from "react";
import { Routes, Route, useLocation } from "react-router";

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
import Otpverify from "./pages/Otpverify";
import LoginAdmin from "./pages/admin/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/admin/dashboard";
import Dashboardlayout from "./components/admin/dashboard/Dashboardlayout";
import Product from "./pages/admin/Product";
import Category from "./pages/admin/Category";
import AddCategory from "./components/admin/dashboard/category/AddCategory";
import AddProduct from "./components/admin/dashboard/product/Addproduct";
import ChangepasswordAdmin from "./pages/admin/Changepassword";
import Banner from "./pages/admin/Banner";
import Carousel from "./pages/admin/Carousel";
import AddCarousel from "./components/admin/dashboard/carousel/AddCarousel";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname === "/admin/login" ||
    location.pathname === "/admin/dashboard" ||
    location.pathname === "/admin/product" ||
    location.pathname === "/admin/category" ||
    location.pathname === "/admin/category/addcategory" ||
    location.pathname === "/admin/product/addproduct" ||
    location.pathname === "/admin/changepassword" ||
    location.pathname === "/admin/banner" ||
    location.pathname === "/admin/carousel" ||
    location.pathname === "/admin/carousel/addcarousel";

  return (
    <>
      <ScrollUp />
      {!hideNavbarAndFooter && <Navbar />}
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
        <Route path="/otp-verify" element={<Otpverify />} />
        <Route path="/change-password" element={<Changepassword />} />
        <Route path="*" element={<Notfound />} />

        {/* after login */}
        <Route path="/account" element={<ProfileLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<ProfileCart />} />
        </Route>

        {/* for admin panel */}
        <Route path="/admin" element={<Dashboardlayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="category" element={<Category />} />
          <Route path="category/addcategory" element={<AddCategory />} />
          <Route path="product/addproduct" element={<AddProduct />} />
          <Route path="banner" element={<Banner />} />
          <Route path="carousel" element={<Carousel />} />
          <Route path="carousel/addcarousel" element={<AddCarousel />} />
        </Route>
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/changepassword" element={<ChangepasswordAdmin />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
