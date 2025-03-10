import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { logout } from "../../redux/Slice/AuthSlice";
import { toast } from "react-toastify";
import { sideBar } from "./constant";

function Sidebox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ul className="nav profilesidebar flex-column">
      {sideBar.map((item, index) => {
        return (
          <li key={index} className="text-primary mb-2">
            <NavLink
              className={`nav-link text-primary   stock rounded`}
              to={item.link}
            >
              {item.name}
            </NavLink>
          </li>
        );
      })}
      <li className="nav-item mb-2">
        <button
          onClick={() => {
            navigate("/");
            dispatch(logout());
            toast.success("Logout Successfully!");
          }}
          className={`nav-link border-0 text-primary bg-transparent stock `}
        >
          Logout
        </button>
      </li>
    </ul>
  );
}

export default Sidebox;
