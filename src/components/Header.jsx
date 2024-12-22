import React from "react";
import { Link } from "react-router";
import CartPage from "../img/cart-page-header-img.jpg";

function Header({ title }) {
  return (
    <div
      className="container-fluid page-header headerbackground py-5"
      style={{
        backgroundImage: `url(${CartPage})`,
      }}
    >
      <h1 className="text-center text-white display-6">{title}</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <Link className="fw-bold" to="/">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item text-white">Pages</li>
        <li className="breadcrumb-item active text-white">{title}</li>
      </ol>
    </div>
  );
}

export default Header;
