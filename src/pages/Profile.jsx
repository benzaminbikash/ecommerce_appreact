import React, { useState } from "react";
import { useUserInfoQuery } from "../redux/Api/AuthApi";

function Profile() {
  const { data: User } = useUserInfoQuery();
  const user = User?.data;
  return (
    <>
      <h1>My details</h1>
      <p>Personal Information</p>
      <p className="text-muted">
        Assertively utilize adaptive customer service for future-proof
        platforms. Completely drive optimal markets.
      </p>

      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label for="firstName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control border-1 py-3 mb-4"
              id="firstName"
              value={user?.fullname}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label for="secondName" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control border-1 py-3 mb-4"
              id="secondName"
              value={user?.email}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label for="secondName" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control border-1 py-3 mb-4"
              id="secondName"
              value={user?.phone}
              disabled
            />
          </div>
        </div>
      </form>
      <hr />
    </>
  );
}

export default Profile;
