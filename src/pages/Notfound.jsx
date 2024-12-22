import React, { useEffect } from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import SearchModal from "../components/SearchModal";
import OOPS from "../img/oops.jpg";

function Notfound() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <SearchModal />
      <Header title={""} />
      <div className="container-fluid contact py-5">
        <div className="container  d-flex flex-column align-items-center">
          <img src={OOPS} alt="randomImage" className="w-25 h-25 rounded" />
          <p className="my-2 fs-3 text-dark fw-bold">404 - PAGE NOT FOUND</p>
          <p className="mb-2">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <NavLink
            to="/"
            className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
            type="button"
          >
            Back To Homepage
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Notfound;
