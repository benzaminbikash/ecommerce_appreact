import React from "react";
import Sidebox from "./Sidebox";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Header from "../Header";
import { sideBar } from "./constant";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Slice/AuthSlice";

function ProfileLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Header title="Profile" />
      <div className="container ">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 d-none d-lg-block   rounded-1 vh-lg-100  p-3 bg-light ">
              <Sidebox />
            </div>
            <div className=" col-md-9 ">
              <div className="profilemobileview d-lg-none  d-flex align-items-center  p-3  w-100  justify-content-center  gap-5">
                {sideBar.map((item, index) => (
                  <NavLink
                    className={({ isActive }) =>
                      `d ${isActive ? "active-link" : ""}`
                    }
                    key={index}
                    to={item.link}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={item.name}
                  >
                    <i className={`fas hello ${item.icon}`}></i>
                  </NavLink>
                ))}

                <button
                  onClick={() => {
                    navigate("/");
                    dispatch(logout());
                    toast.success("Logout Successfully!");
                  }}
                  className={`nav-link border-0 nav-item bg-transparent  `}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Logout"
                >
                  <i className="fas fa-sign-out-alt text-primary "></i>
                </button>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
