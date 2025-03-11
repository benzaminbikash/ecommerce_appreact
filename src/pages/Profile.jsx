import React from "react";
import { useUserInfoQuery } from "../redux/Api/AuthApi";

function Profile() {
  const { data: User } = useUserInfoQuery();
  const user = User?.data;

  return (
    <div className=" card px-2">
      <h6>Personal Information</h6>
      <form>
        <div className="row mb-3">
          <div className="col-md-12">
            <label for="firstName" className="form-label stock">
              Full Name
            </label>
            <input
              type="text"
              className="form-control border-1 py-2 mb-4"
              id="firstName"
              value={user?.fullname}
              disabled
            />
          </div>
          <div className="col-md-12">
            <label for="secondName" className="form-label stock">
              Email
            </label>
            <input
              type="text"
              className="form-control border-1 py-2 mb-4"
              id="secondName"
              value={user?.email}
              disabled
            />
          </div>
          <div className="col-md-12">
            <label for="secondName" className="form-label stock">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control border-1 py-2 mb-4"
              id="secondName"
              value={user?.phone}
              disabled
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
