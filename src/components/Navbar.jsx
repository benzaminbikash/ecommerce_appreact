import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUserInfoQuery } from "../redux/Api/AuthApi";
import AuthRole from "./common/AuthRole";

function Navbar() {
  const { isAdmin } = AuthRole();
  const [data, setData] = useState(false);
  const navbarCollapseRef = useRef(null);
  const { data: CART } = useUserInfoQuery();
  let cart = CART?.data?.cart;

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

  const closeNavbar = () => {
    if (navbarCollapseRef.current) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  return (
    <div className={` container-fluid fixed-top ${data && "shadow"}`}>
      {!data && (
        <div className="container topbar bg-secondary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2 py-1">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-white"></i>{" "}
                <a className="text-white policy">Gwarko, Lalitpur</a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-white"></i>
                <a className="text-white policy">Email@Example.com</a>
              </small>
            </div>
            <div className="top-link pe-2">
              <p className="mx-2 text-white policy">Privacy Policy</p>
              <p className="mx-2 text-white policy">Terms of Use</p>
            </div>
          </div>
        </div>
      )}

      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <Link to="/" className="navbar-brand">
            <h3 className="text-primary">Tech-G</h3>
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
            className="collapse mt-1 navbar-collapse bg-white"
            id="navbarCollapse"
            ref={navbarCollapseRef}
          >
            <div className="navbar-nav mx-auto">
              <NavLink
                to="/"
                className="nav-item nav-link"
                onClick={closeNavbar}
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className="nav-item nav-link"
                onClick={closeNavbar}
              >
                Shop
              </NavLink>
              <NavLink
                to="/blog"
                className="nav-item nav-link"
                onClick={closeNavbar}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-item nav-link"
                onClick={closeNavbar}
              >
                Contact
              </NavLink>
            </div>
            <div className="navbaractivelogic d-flex m-3 me-0">
              {state && (
                <NavLink
                  to="/cart"
                  className="position-relative me-4 my-auto"
                  onClick={closeNavbar}
                >
                  <i className="fas fa-shopping-bag iconsize"></i>
                  {cart?.length > 0 && (
                    <span className="position-absolute  rounded-circle d-flex align-items-center stock justify-content-center text-white fw-bold  px-1 cartnumber">
                      {cart?.length}
                    </span>
                  )}
                </NavLink>
              )}
              <NavLink
                to={state ? "/account/profile" : "login"}
                className="my-auto"
                onClick={closeNavbar}
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
