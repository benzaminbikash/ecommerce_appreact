import React from "react";
import { Link } from "react-router";

function Sidebar() {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <ul class="nav flex-column">
        <p className=" my-3 fw-bold titleofsidebar">DASHBOARD</p>
        <li class="nav-item  ">
          <Link
            to="/admin/dashboard"
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
        <p className=" my-3 fw-bold titleofsidebar">Banner</p>
        <li class="nav-item ">
          <Link
            to="/admin/carousel"
            class=" d-flex align-items-center navitemofsidebar mb-1"
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

        <br />

        <li class="nav-item">
          <a
            class=" d-flex align-items-center"
            data-bs-toggle="collapse"
            href="#uiElements"
            role="button"
            aria-expanded="false"
            aria-controls="uiElements"
          >
            UI Elements <span class="ms-auto">+</span>
          </a>
          <div class="collapse" id="uiElements">
            <ul class="nav flex-column ">
              <li class=" my-2">
                <a href="#" class="">
                  Option 1
                </a>
              </li>
              <li class="">
                <a href="#" class="">
                  Option 2
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
