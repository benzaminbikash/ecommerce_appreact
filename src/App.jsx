import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import { hideNavbarandFooter, routing } from "./components/common/constant";
import PersistLogin from "./components/common/PersistLogin";
import AdminAuthRole from "./components/common/AdminRole";
import UserAuthRole from "./components/common/UserRole";

// Root Layout
const RootLayout = () => {
  return (
    <>
      <ScrollUp />
      <ScrollRestoration getKey={(location, matches) => location.pathname} />
      {!hideNavbarandFooter() && <Navbar />}
      <Outlet />
      {!hideNavbarandFooter() && <Footer />}
    </>
  );
};

// User Dashboard Layout
const UserDashboardLayout = () => (
  <routing.ProfileLayout>
    <Outlet />
  </routing.ProfileLayout>
);

// Admin Dashboard Layout
const AdminDashboardLayout = () => (
  <routing.Dashboardlayout>
    <Outlet />
  </routing.Dashboardlayout>
);

// Define Routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <PersistLogin />,
        children: [
          {
            path: "/",
            element: <routing.Home />,
          },
          { path: "/shop", element: <routing.Shop /> },
          { path: "/cart", element: <routing.Cart /> },
          { path: "/contact", element: <routing.Contact /> },
          { path: "/login", element: <routing.Login /> },
          { path: "/signup", element: <routing.Signup /> },
          { path: "/verifyaccount", element: <routing.VerifyAccount /> },
          { path: "/forget-password", element: <routing.Forgetpassword /> },
          { path: "/otp-verify", element: <routing.Otpverify /> },
          { path: "/change-password", element: <routing.Changepassword /> },
          { path: "/product-detail/:id", element: <routing.ProductDetail /> },
          { path: "/address", element: <routing.Address /> },
          { path: "/blog", element: <routing.BlogUser /> },
          { path: "/blogdetail/:id", element: <routing.BlogDetail /> },
          { path: "*", element: <routing.Notfound /> },

          // Protected Routes for User
          {
            element: <UserAuthRole />,
            children: [
              {
                path: "/account",
                element: <UserDashboardLayout />,
                children: [
                  { path: "profile", element: <routing.Profile /> },
                  { path: "cart", element: <routing.ProfileCart /> },
                  {
                    path: "oldpassword",
                    element: <routing.Oldpasswordchange />,
                  },
                  { path: "order", element: <routing.Order /> },
                ],
              },
            ],
          },

          // Protected Routes for Admin
          {
            element: <AdminAuthRole />,
            children: [
              {
                path: "/admin",
                element: <AdminDashboardLayout />,
                children: [
                  { path: "", element: <routing.Dashboard /> },
                  { path: "product", element: <routing.Product /> },
                  { path: "product/:id", element: <routing.Productdetail /> },
                  { path: "category", element: <routing.Category /> },
                  { path: "subcategory", element: <routing.SubCategory /> },
                  { path: "contact", element: <routing.ContactAdmin /> },
                  {
                    path: "category/addcategory",
                    element: <routing.AddCategory />,
                  },
                  {
                    path: "product/addproduct",
                    element: <routing.AddProduct />,
                  },
                  { path: "banner", element: <routing.Banner /> },
                  { path: "carousel", element: <routing.Carousel /> },
                  {
                    path: "carousel/addcarousel",
                    element: <routing.AddCarousel />,
                  },
                  { path: "banner/addbanner", element: <routing.AddBanner /> },
                  { path: "users", element: <routing.User /> },
                  { path: "users/adduser", element: <routing.AddUser /> },
                  { path: "users/updateuser", element: <routing.EditUser /> },
                  { path: "allorders", element: <routing.AllOrder /> },
                  { path: "canceled/orders", element: <routing.CancelOrder /> },
                  {
                    path: "delivered/orders",
                    element: <routing.DeliveredOrder />,
                  },
                  { path: "pending/orders", element: <routing.PendingOrder /> },
                  { path: "confirm/orders", element: <routing.ConfirmOrder /> },
                  { path: "blogs", element: <routing.Blog /> },
                  { path: "blogs/addblog", element: <routing.AddBlog /> },
                  {
                    path: "onthedelivery/orders",
                    element: <routing.OnDeliveryOrder />,
                  },
                  { path: "attribute", element: <routing.Attributes /> },
                  { path: "subattribute", element: <routing.SubAttributes /> },
                  {
                    path: "attribute/addattribute",
                    element: <routing.AddAttributes />,
                  },
                  {
                    path: "subattribute/subaddattribute",
                    element: <routing.AddSubAttributes />,
                  },
                  { path: "testimonial", element: <routing.Testimonial /> },
                  {
                    path: "testimonial/addtestimonial",
                    element: <routing.AddTestimonial />,
                  },
                  {
                    path: "subcategory/addsubcategory",
                    element: <routing.AddSubCategory />,
                  },
                  { path: "coupon", element: <routing.Coupon /> },
                  { path: "coupon/addcoupon", element: <routing.AddCoupon /> },
                ],
              },
              {
                path: "/admin/changepassword",
                element: <routing.ChangepasswordAdmin />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
