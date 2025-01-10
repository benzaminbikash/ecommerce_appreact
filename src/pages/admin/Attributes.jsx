import React from "react";
import { NavLink } from "react-router";

function Attributes() {
  return (
    <main className="">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h1 className="fs-5 fw-bold mt-3">Attributes</h1>
        <NavLink
          to="/admin/attribute/addattribute"
          className="btn btn-primary text-white py-2"
        >
          <i className="bi bi-plus me-2"></i>Add New Attributes
        </NavLink>
      </div>

      <div className="table-responsive card p-3 ">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th className="text-dark">S.N</th>
              <th className="text-dark">Title</th>
              <th className="text-dark">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Color</td>
              <td>
                <i className="bi bi-pencil-square adminactionupdate"></i>
                <i className="bi bi-trash ps-3 adminactiondelete"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Attributes;
