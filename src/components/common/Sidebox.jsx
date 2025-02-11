import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { logout } from "../../redux/Slice/AuthSlice";

function Sidebox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);
  const sideBar = [
    {
      id: 0,
      name: "My Profile",
      link: "profile",
    },
    {
      id: 1,
      name: "My Carts",
      link: "cart",
    },
    {
      id: 2,
      name: "Payment",
      link: "checkout",
    },
  ];
  return (
    <div>
      <ul className="nav flex-column">
        {sideBar.map((item) => {
          return (
            <li className="nav-item mb-2">
              <NavLink
                onClick={() => setSelect(item.id)}
                className={`nav-link   ${
                  select == item.id ? "profileactive text-white" : "text-dark"
                }  `}
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
            }}
            className={`nav-link border-0 bg-transparent text-dark`}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebox;
