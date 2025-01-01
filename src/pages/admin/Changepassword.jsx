import React from "react";
import AdminC from "../../img/adminc.png";

function Changepassword() {
  return (
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card w-50 shadow-lg">
        <div class="form-header">
          <img src={AdminC} alt="" className="w-25 h-25" />
          <h3>Change Password</h3>
        </div>
        <div class="form-body">
          <form>
            <div class="mb-3">
              <label for="currentPassword" class="form-label">
                Current Password <span class="text-danger">*</span>
              </label>
              <input
                type="password"
                class="form-control py-3"
                id="currentPassword"
                placeholder="Enter Current password"
                required
              />
            </div>
            <div class="mb-3">
              <label for="newPassword" class="form-label">
                New Password <span class="text-danger">*</span>
              </label>
              <input
                type="password"
                class="form-control py-3"
                id="newPassword"
                placeholder="Enter New password"
                required
              />
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">
                Confirm Password <span class="text-danger">*</span>
              </label>
              <input
                type="password"
                class="form-control py-3"
                id="confirmPassword"
                placeholder="Enter confirm password"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary text-white w-100 py-3">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
