import React from "react";
import Sidebox from "./Sidebox";
import { Outlet } from "react-router";
import Header from "../Header";

function ProfileLayout() {
  return (
    <>
      <Header title="Profile" />
      <div class="container py-5">
        <div className="container py-5">
          <div class="row">
            <div class="col-md-3  vh-40 md:vh-100  p-3 bg-light ">
              <Sidebox />
            </div>
            <div class="col-md-9 ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
