import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header
      className=" mylayout d-flex align-items-center justify-content-between text-dark "
      style={{
        height: "80px",
        borderBottom: "1px solid red",
      }}
    >
      <div className="d-flex align-items-center">
        <h5 className=""></h5>
      </div>

      <div className="d-flex align-items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-circle"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <div className="dropdown">
          <button
            className="border-0 text-dark bg-white text-decoration-none dropdown-toggle"
            id="profileDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            admin@admin.com
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="profileDropdown"
          >
            <li>
              <Link to="/admin/changepassword" className="dropdown-item">
                Change Password
              </Link>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
