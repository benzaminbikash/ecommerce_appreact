import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import { hideNavbarandFooter, routing } from "./components/common/constant";
import PersistLogin from "./components/common/PersistLogin";
import AdminAuthRole from "./components/common/AdminRole";
import UserAuthRole from "./components/common/UserRole";

function App() {
  return (
    <>
      <ScrollUp />
      {!hideNavbarandFooter() ? <Navbar /> : null}
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<routing.Home />}></Route>
          <Route path="/shop" element={<routing.Shop />} />

          <Route path="/cart" element={<routing.Cart />} />

          <Route path="/contact" element={<routing.Contact />} />
          <Route path="/login" element={<routing.Login />} />
          <Route path="/signup" element={<routing.Signup />} />
          <Route path="/verifyaccount" element={<routing.VerifyAccount />} />
          <Route path="/forget-password" element={<routing.Forgetpassword />} />
          <Route path="/otp-verify" element={<routing.Otpverify />} />
          <Route path="/change-password" element={<routing.Changepassword />} />
          <Route
            path="/product-detail/:id"
            element={<routing.ProductDetail />}
          />
          <Route path="/address" element={<routing.Address />} />
          <Route path="/blog" element={<routing.BlogUser />} />
          <Route path="/blogdetail/:id" element={<routing.BlogDetail />} />

          <Route path="*" element={<routing.Notfound />} />

          {/* after user login */}
          <Route element={<UserAuthRole />}>
            <Route path="/account" element={<routing.ProfileLayout />}>
              <Route path="profile" element={<routing.Profile />} />
              <Route path="cart" element={<routing.ProfileCart />} />
              <Route
                path="oldpassword"
                element={<routing.Oldpasswordchange />}
              />
              <Route path="order" element={<routing.Order />} />
            </Route>
          </Route>

          {/* for admin panel */}
          <Route element={<AdminAuthRole />}>
            <Route path="/admin" element={<routing.Dashboardlayout />}>
              <Route path="" element={<routing.Dashboard />} />
              <Route path="product" element={<routing.Product />} />
              <Route path="product/:id" element={<routing.Productdetail />} />
              <Route path="category" element={<routing.Category />} />
              <Route path="subcategory" element={<routing.SubCategory />} />
              <Route path="contact" element={<routing.ContactAdmin />} />

              <Route
                path="category/addcategory"
                element={<routing.AddCategory />}
              />
              <Route
                path="product/addproduct"
                element={<routing.AddProduct />}
              />
              <Route path="banner" element={<routing.Banner />} />
              <Route path="carousel" element={<routing.Carousel />} />
              <Route
                path="carousel/addcarousel"
                element={<routing.AddCarousel />}
              />
              <Route path="banner/addbanner" element={<routing.AddBanner />} />
              <Route path="users" element={<routing.User />} />
              <Route path="users/adduser" element={<routing.AddUser />} />
              <Route path="users/updateuser" element={<routing.EditUser />} />
              <Route path="allorders" element={<routing.AllOrder />} />
              <Route path="canceled/orders" element={<routing.CancelOrder />} />
              <Route
                path="delivered/orders"
                element={<routing.DeliveredOrder />}
              />
              <Route path="pending/orders" element={<routing.PendingOrder />} />
              <Route path="confirm/orders" element={<routing.ConfirmOrder />} />
              <Route path="blogs" element={<routing.Blog />} />
              <Route path="blogs/addblog" element={<routing.AddBlog />} />

              <Route
                path="onthedelivery/orders"
                element={<routing.OnDeliveryOrder />}
              />

              <Route path="attribute" element={<routing.Attributes />} />
              <Route path="subattribute" element={<routing.SubAttributes />} />
              <Route
                path="attribute/addattribute"
                element={<routing.AddAttributes />}
              />

              <Route
                path="subattribute/subaddattribute"
                element={<routing.AddSubAttributes />}
              />
              <Route path="testimonial" element={<routing.Testimonial />} />
              <Route
                path="testimonial/addtestimonial"
                element={<routing.AddTestimonial />}
              />
              <Route
                path="subcategory/addsubcategory"
                element={<routing.AddSubCategory />}
              />
            </Route>
            {/* </Route> */}
            <Route
              path="/admin/changepassword"
              element={<routing.ChangepasswordAdmin />}
            />
          </Route>
        </Route>
      </Routes>
      {!hideNavbarandFooter() ? <Footer /> : null}
    </>
  );
}

export default App;
