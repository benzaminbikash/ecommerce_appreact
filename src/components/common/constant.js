import { lazy } from "react";
import { useLocation } from "react-router-dom";

export const constant = {
  APIURL: "http://192.168.18.70:8000/api/v4",
  IMAGEURL: "http://192.168.18.70:8000/uploads",
  // APIURL: "http://192.168.18.70:8000/api/v4",
  // IMAGEURL: "http://192.168.18.70:8000/uploads",
};

export function hideNavbarandFooter() {
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
    location.pathname === "/admin/confirm/orders" ||
    location.pathname === "/admin/onthedelivery/orders" ||
    location.pathname === "/admin/attribute" ||
    location.pathname === "/admin/subattribute" ||
    location.pathname === "/admin/attribute/addattribute" ||
    location.pathname === "/admin/subattribute/subaddattribute" ||
    location.pathname === "/admin/testimonial" ||
    location.pathname === "/admin/testimonial/addtestimonial" ||
    location.pathname === "/admin/subcategory" ||
    location.pathname === "/admin/subcategory/addsubcategory" ||
    location.pathname === "/admin/users/updateuser" ||
    location.pathname === "/admin/blogs" ||
    location.pathname === "/admin/blogs/addblog" ||
    location.pathname.startsWith("/admin/product/");

  return hideNavbarAndFooter;
}

export const deliveryCharge = 100;

export const itemperPage = 10;
export const itemperPageforUser = 20;

export const sideBar = [
  {
    id: 0,
    name: "My Profile",
    link: "profile",
    icon: "fa-user-alt",
  },
  {
    id: 1,
    name: "My Carts",
    link: "cart",
    icon: "fa-cart-plus",
  },
  {
    id: 2,
    name: "My Orders",
    link: "order",
    icon: "fa-border-none",
  },
  {
    id: 3,
    name: "Change Password",
    link: "oldpassword",
    icon: "fa-unlock-alt",
  },
];

export const routing = {
  Home: lazy(() => import("../../pages/Home")),
  Shop: lazy(() => import("../../pages/Shop")),
  Cart: lazy(() => import("../../pages/Cart")),
  Login: lazy(() => import("../../pages/Login")),
  Signup: lazy(() => import("../../pages/Signup")),
  Contact: lazy(() => import("../../pages/Contact")),
  Profile: lazy(() => import("../../pages/Profile")),
  Testmonial: lazy(() => import("../../pages/Testmonial")),
  Forgetpassword: lazy(() => import("../../pages/Forgetpassword")),
  ProfileCart: lazy(() => import("../../pages/ProfileCart")),
  Notfound: lazy(() => import("../../pages/Notfound")),
  Changepassword: lazy(() => import("../../pages/Changepassword")),
  Otpverify: lazy(() => import("../../pages/Otpverify")),
  Dashboard: lazy(() => import("../../pages/admin/Dashboard")),
  Product: lazy(() => import("../../pages/admin/Product")),
  Category: lazy(() => import("../../pages/admin/Category")),
  AddCategory: lazy(() =>
    import("../../components/admin/dashboard/category/AddCategory")
  ),
  Blog: lazy(() => import("../../pages/admin/Blog")),
  AddBlog: lazy(() =>
    import("../../components/admin/dashboard/blogs/Addblogs")
  ),
  BlogUser: lazy(() => import("../../pages/Blog")),
  BlogDetail: lazy(() =>
    import("../../components/admin/dashboard/blogs/BlogDetail")
  ),
  VerifyAccount: lazy(() => import("../../pages/VerifyAccount")),
  OnDeliveryOrder: lazy(() =>
    import("../../pages/admin/orders/OnDeliverOrder")
  ),
  ConfirmOrder: lazy(() => import("../../pages/admin/orders/ConfirmOrder")),
  Order: lazy(() => import("../../pages/Order")),
  Oldpasswordchange: lazy(() => import("../../pages/Oldpasswordchange")),
  Address: lazy(() => import("../../pages/Address")),
  ProductDetail: lazy(() => import("../../pages/ProductDetail")),
  Productdetail: lazy(() =>
    import("../../components/admin/dashboard/product/Productdetail")
  ),
  EditUser: lazy(() =>
    import("../../components/admin/dashboard/user/EditUser")
  ),
  AddSubCategory: lazy(() =>
    import("../../components/admin/dashboard/subcategory/AddSubCategory")
  ),
  SubCategory: lazy(() => import("../../pages/admin/SubCategory")),
  Testimonial: lazy(() => import("../../pages/admin/Testimonial")),
  AddTestimonial: lazy(() =>
    import("../../components/admin/dashboard/testimonial/AddTestimonial")
  ),
  AddSubAttributes: lazy(() =>
    import("../../components/admin/dashboard/subattributes/AddSubAttributes")
  ),
  AddAttributes: lazy(() =>
    import("../../components/admin/dashboard/attributes/AddAttributes")
  ),
  SubAttributes: lazy(() => import("../../pages/admin/SubAttributes")),
  Attributes: lazy(() => import("../../pages/admin/Attributes")),
  PendingOrder: lazy(() => import("../../pages/admin/orders/PendingOrder")),
  DeliveredOrder: lazy(() => import("../../pages/admin/orders/DeliveredOrder")),
  CancelOrder: lazy(() => import("../../pages/admin/orders/CancelOrder")),
  AllOrder: lazy(() => import("../../pages/admin/orders/AllOrder")),

  AddUser: lazy(() => import("../../components/admin/dashboard/user/AddUser")),
  User: lazy(() => import("../../pages/admin/User")),
  AddBanner: lazy(() =>
    import("../../components/admin/dashboard/banner/AddBanner")
  ),
  AddCarousel: lazy(() =>
    import("../../components/admin/dashboard/carousel/AddCarousel")
  ),
  Carousel: lazy(() => import("../../pages/admin/Carousel")),
  Banner: lazy(() => import("../../pages/admin/Banner")),
  ChangepasswordAdmin: lazy(() => import("../../pages/admin/Changepassword")),
  AddProduct: lazy(() =>
    import("../../components/admin/dashboard/product/Addproduct")
  ),
  AddProduct: lazy(() =>
    import("../../components/admin/dashboard/product/Addproduct")
  ),
  Dashboardlayout: lazy(() =>
    import("../../components/admin/dashboard/Dashboardlayout")
  ),
  ProfileLayout: lazy(() => import("../../components/common/ProfileLayout")),
};

export const dashboardOrderList = [
  {
    id: 1,
    title: "Pending",
  },
  {
    id: 2,
    title: "Confirm",
  },
  {
    id: 3,
    title: "Processing",
  },
  {
    id: 4,
    title: "Delivered",
  },
  {
    id: 5,
    title: "Cancel",
  },
];
