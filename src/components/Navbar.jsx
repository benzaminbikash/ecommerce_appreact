import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthRole from "./common/AuthRole";
import { useSelector } from "react-redux";

function Navbar() {
  const { isAdmin } = AuthRole();
  const [data, setData] = useState(false);
  const showshadow = () => {
    if (window.scrollY > 250) {
      setData(true);
    } else {
      setData(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showshadow);
    return () => window.removeEventListener("scroll", showshadow);
  }, []);
  const state = useSelector((item) => item?.auth?.accessToken);
  console.log(state);

  return (
    <div className={`container-fluid fixed-top ${data && "shadow"}`}>
      {!data && (
        <div className="container topbar bg-secondary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2 py-1">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-white"></i>{" "}
                <a href="" className="text-white policy">
                  Gwarko, Lalitpur
                </a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-white"></i>
                <a href="" className="text-white policy">
                  Email@Example.com
                </a>
              </small>
            </div>
            <div className="top-link pe-2">
              <NavLink to="#" className="mx-2 policy">
                Privacy Policy
              </NavLink>
              <NavLink href="#" className="mx-2 policy">
                Terms of Use
              </NavLink>
              <NavLink href="#" className="ms-2  policy ">
                Sales and Refunds
              </NavLink>
            </div>
          </div>
        </div>
      )}

      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <Link to="/" className="navbar-brand">
            <h4 className="text-primary display-7">Tech-G</h4>
          </Link>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <NavLink to="/" className="nav-item nav-link ">
                Home
              </NavLink>
              <NavLink to="/shop" className="nav-item nav-link">
                Shop
              </NavLink>
              {/* <NavLink to="/shopdetail" className="nav-item nav-link">
              Shop Detail
            </NavLink> */}
              {/* <div className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle pagepointer ${
                  location.pathname == "/cart" && "active" || location.pathname=='/checkout'
                }`}
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0 bg-secondary rounded-0">
                <NavLink to="cart" className="dropdown-item">
                  Cart
                </NavLink>
                <NavLink to="checkout" className="dropdown-item">
                  Checkout
                </NavLink>
                <NavLink to="testimonial" className="dropdown-item">
                  Testimonial
                </NavLink>
              </div>
            </div> */}
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>
            </div>
            <div className="d-flex m-3 me-0">
              {state && (
                <NavLink to="/cart" className="position-relative me-4 my-auto">
                  <i className="fas fa-shopping-bag iconsize"></i>
                  <span className="position-absolute bg-danger rounded-circle d-flex align-items-center justify-content-center text-dark px-1 cartnumber">
                    3
                  </span>
                </NavLink>
              )}
              <NavLink
                to={state ? "/account/profile" : "login"}
                className="my-auto"
              >
                <i className="fas fa-user iconsize"></i>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
