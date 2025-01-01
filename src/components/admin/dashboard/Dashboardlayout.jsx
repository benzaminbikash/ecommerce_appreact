import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import Header from "./Header";

function Dashboardlayout() {
  return (
    <>
      <div class="container-fluid">
        <div class="row gap-0">
          <nav class="col-md-2 d-none d-md-block  h-full sidebar ">
            <Sidebar />
          </nav>
          <div className="col-md-9  col-lg-10 ">
            <Header style={{ paddingLeft: 0, paddingRight: 0 }} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboardlayout;
