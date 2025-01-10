import React from "react";
import { NavLink } from "react-router";
import BannerModal from "../../components/admin/dashboard/AdminDataModal";

function Testimonial() {
  return (
    <main className="">
      <BannerModal />
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h1 className="fs-5 fw-bold mt-3">Testimonial List</h1>
        <NavLink
          to="/admin/testimonial/addtestimonial"
          className="btn btn-primary text-white py-2"
        >
          <i className="bi bi-plus me-2"></i>Add Testimonial
        </NavLink>
      </div>

      <div className="table-responsive card p-3 ">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th className="text-dark">S.N</th>
              <th className="text-dark">Name</th>
              <th className="text-dark">Profession</th>
              <th className="text-dark">Description</th>
              <th className="text-dark">Rating</th>
              <th className="text-dark">Image</th>
              <th className="text-dark">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Meat Shop</td>
              <td>This is my meat shop</td>
              <td>$1230</td>
              <td>1</td>
              <td>fsdfsd</td>
              <td>
                <i className="bi bi-pencil-square adminactionupdate"></i>
                <i className="bi bi-trash ps-3 adminactiondelete"></i>

                <i
                  class="fas ps-3 fa-eye adminactionupdate"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Testimonial;
