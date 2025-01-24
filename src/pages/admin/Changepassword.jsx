import React from "react";
import AdminC from "../../img/adminc.png";

function Changepassword() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card w-50 shadow-lg">
        <div className="form-header">
          <img src={AdminC} alt="" className="w-25 h-25" />
          <h3>Change Password</h3>
        </div>
        <div className="form-body">
          <form>
            <div className="mb-3">
              <label for="currentPassword" className="form-label">
                Current Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control py-3"
                id="currentPassword"
                placeholder="Enter Current password"
                required
              />
            </div>
            <div className="mb-3">
              <label for="newPassword" className="form-label">
                New Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control py-3"
                id="newPassword"
                placeholder="Enter New password"
                required
              />
            </div>
            <div className="mb-3">
              <label for="confirmPassword" className="form-label">
                Confirm Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control py-3"
                id="confirmPassword"
                placeholder="Enter confirm password"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary text-white w-100 py-3"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
