import React from "react";
import { Link } from "react-router";
import SidebarImage from "../../../img/Sidebarlogo.png";

function Sidebar() {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#2a3042",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={SidebarImage}
          alt=""
          style={{
            width: 80,
            height: 80,
            color: "white",
          }}
        />
      </div>
      <ul class="nav flex-column">
        <p className=" my-3 fw-bold titleofsidebar">DASHBOARD</p>
        <li class="nav-item  ">
          <Link
            to="/admin"
            class=" d-flex align-items-center  navitemofsidebar"
          >
            <i class="bi bi-house me-2"></i> Dashboard
          </Link>
        </li>

        <p className=" my-3 fw-bold titleofsidebar">Category</p>
        <li class="nav-item">
          <Link
            to="/admin/category"
            class=" d-flex align-items-center navitemofsidebar"
          >
            <i class="bi bi-people me-2"></i> Category
          </Link>
        </li>
        <p className=" my-3 fw-bold titleofsidebar">PRODUCT</p>
        <li class="nav-item ">
          <Link
            to="/admin/product"
            class=" d-flex align-items-center navitemofsidebar"
          >
            <i class="bi bi-people me-2"></i> Product
          </Link>
        </li>
        <p className=" my-3 fw-bold titleofsidebar">ATTRIBUTE</p>
        <li class="nav-item ">
          <Link
            to="/admin/attribute"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i> Attributes
          </Link>
          <Link
            to="/admin/subattribute"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i>Sub Attributes
          </Link>
        </li>

        <p className=" my-3 fw-bold titleofsidebar">BANNER</p>
        <li class="nav-item ">
          <Link
            to="/admin/carousel"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i> Carousel
          </Link>
        </li>
        <li class="nav-item ">
          <Link
            to="/admin/banner"
            class=" d-flex align-items-center navitemofsidebar"
          >
            <i class="bi bi-people me-2"></i> Banner
          </Link>
        </li>

        <p className=" my-3 fw-bold titleofsidebar">Testimonial</p>
        <li class="nav-item ">
          <Link
            to="/admin/testimonial"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i> Testimonial
          </Link>
        </li>

        <p className=" my-3 fw-bold titleofsidebar">USER</p>
        <li class="nav-item ">
          <Link
            to="/admin/users"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i> Users
          </Link>
        </li>

        <p className=" my-3 fw-bold titleofsidebar">ORDER</p>
        <li class="nav-item ">
          <Link
            to="/admin/pending/orders"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i> Pending Orders
          </Link>
          <Link
            to="/admin/users"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i> Accepted Orders
          </Link>
          <Link
            to="/admin/users"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i> On Delivery Orders
          </Link>
          <Link
            to="/admin/delivered/orders"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i> Delivered Orders
          </Link>
          <Link
            to="/admin/canceled/orders"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i> Canceled Orders
          </Link>
          <Link
            to="/admin/allorders"
            class=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i class="bi bi-people me-2"></i> All Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
