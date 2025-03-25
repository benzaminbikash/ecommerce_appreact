import React, { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/Slice/AuthSlice";
import { useUserInfoQuery } from "../../../redux/Api/AuthApi";
import Sidebar from "./Sidebar";

function Header() {
  const { data } = useUserInfoQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin/login", replace);
  };
  const [show, setShow] = useState(false);
  return (
    <>
      <header
        className=" mylayout d-flex align-items-center justify-content-between text-dark "
        style={{
          height: "80px",
          borderBottom: "1px solid red",
        }}
      >
        <div className="d-flex align-items-center">
          <i
            onClick={() => {
              setShow(true);
            }}
            className=" d-lg-none fas fa-bars"
          ></i>
        </div>

        <div className="d-flex align-items-center gap-2">
          <div className="dropdown">
            <button
              className="border-0 text-dark bg-white text-decoration-none dropdown-toggle"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {data?.data?.email}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="profileDropdown"
            >
              <li>
                <button
                  onClick={() => navigate("/admin/changepassword")}
                  className="dropdown-item"
                >
                  Change Password
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="dropdown-item"
                  href="#"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="d-lg-none position-fixed top-0  sidebarformobile">
        {show && <Sidebar setShow={setShow} />}
      </div>
    </>
  );
}

export default Header;
