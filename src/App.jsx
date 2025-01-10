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
import AddBanner from "./components/admin/dashboard/banner/AddBanner";
import User from "./pages/admin/User";
import AddUser from "./components/admin/dashboard/user/AddUser";
import AllOrder from "./pages/admin/orders/AllOrder";
import CancelOrder from "./pages/admin/orders/CancelOrder";
import DeliveredOrder from "./pages/admin/orders/DeliveredOrder";
import PendingOrder from "./pages/admin/orders/PendingOrder";
import Attributes from "./pages/admin/Attributes";
import SubAttributes from "./pages/admin/SubAttributes";
import AddAttributes from "./components/admin/dashboard/attributes/AddAttributes";
import AddSubAttributes from "./components/admin/dashboard/subattributes/AddSubAttributes";
import Testimonial from "./pages/admin/Testimonial";
import AddTestimonial from "./components/admin/dashboard/testimonial/AddTestimonial";
import AdminProtectRoute from "./protectroute/AdminProtectRoute";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname === "/admin" ||
    location.pathname === "/admin/" ||
    location.pathname === "/admin/login" ||
    location.pathname === "/admin/product" ||
    location.pathname === "/admin/category" ||
    location.pathname === "/admin/category/addcategory" ||
    location.pathname === "/admin/product/addproduct" ||
    location.pathname === "/admin/changepassword" ||
    location.pathname === "/admin/banner" ||
    location.pathname === "/admin/carousel" ||
    location.pathname === "/admin/carousel/addcarousel" ||
    location.pathname === "/admin/banner/addbanner" ||
    location.pathname === "/admin/users" ||
    location.pathname === "/admin/users/adduser" ||
    location.pathname === "/admin/allorders" ||
    location.pathname === "/admin/canceled/orders" ||
    location.pathname === "/admin/delivered/orders" ||
    location.pathname === "/admin/pending/orders" ||
    location.pathname === "/admin/attribute" ||
    location.pathname === "/admin/subattribute" ||
    location.pathname === "/admin/attribute/addattribute" ||
    location.pathname === "/admin/subattribute/subaddattribute" ||
    location.pathname === "/admin/testimonial" ||
    location.pathname === "/admin/testimonial/addtestimonial";

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
        <Route element={<AdminProtectRoute />}>
          <Route path="/admin" element={<Dashboardlayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="category" element={<Category />} />
            <Route path="category/addcategory" element={<AddCategory />} />
            <Route path="product/addproduct" element={<AddProduct />} />
            <Route path="banner" element={<Banner />} />
            <Route path="carousel" element={<Carousel />} />
            <Route path="carousel/addcarousel" element={<AddCarousel />} />
            <Route path="banner/addbanner" element={<AddBanner />} />
            <Route path="users" element={<User />} />
            <Route path="users/adduser" element={<AddUser />} />
            <Route path="allorders" element={<AllOrder />} />
            <Route path="canceled/orders" element={<CancelOrder />} />
            <Route path="delivered/orders" element={<DeliveredOrder />} />
            <Route path="pending/orders" element={<PendingOrder />} />
            <Route path="attribute" element={<Attributes />} />
            <Route path="subattribute" element={<SubAttributes />} />
            <Route path="attribute/addattribute" element={<AddAttributes />} />
            <Route
              path="subattribute/subaddattribute"
              element={<AddSubAttributes />}
            />
            <Route path="testimonial" element={<Testimonial />} />
            <Route
              path="testimonial/addtestimonial"
              element={<AddTestimonial />}
            />
          </Route>
        </Route>

        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/changepassword" element={<ChangepasswordAdmin />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
