import React, { useEffect, useState } from "react";
import { useUpdateUserMutation, useUserInfoQuery } from "../redux/Api/AuthApi";
import Scroller from "../components/common/Scroller";
import Showmessage from "../components/common/Showmessage";

function Profile() {
  const { data: User, refetch } = useUserInfoQuery();
  const user = User?.data;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [UPDATE] = useUpdateUserMutation();
  const [message, setMessage] = useState("");

  async function updateUser() {
    const data = {
      fullname: name,
      phone: phone,
    };
    const response = await UPDATE(data);
    console.log(response);
    setMessage(response?.data?.message);
    refetch();
  }

  useEffect(() => {
    Scroller();
  }, []);

  useEffect(() => {
    if (user) {
      setName(user?.fullname);
      setPhone(user?.phone);
    }
  }, [user]);

  return (
    <div className=" card px-2">
      <h6>Personal Information</h6>
      <div>{message && <Showmessage status="success" message={message} />}</div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label for="firstName" className="form-label stock">
            Full Name
          </label>
          <input
            type="text"
            className="form-control border-1 py-2 mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <label for="secondName" className="form-label stock">
            Email
          </label>
          <input
            type="text"
            className="form-control border-1 py-2 mb-4"
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="d-flex gap-2 ">
          <button
            onClick={updateUser}
            className="btn border-danger stock text-primary"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
