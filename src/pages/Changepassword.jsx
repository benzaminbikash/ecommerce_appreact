import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router";
import Lottie from "react-lottie";
import changepassword from "../img/changepassword.json";

function Changepassword() {
  const [password, setPassword] = useState("");
  const [confirmationpassword, setConfirmationPassword] = useState("");
  const handleChangePassword = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    window.scrollTo({
      top: "0px",
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header title={"Change Password"} />
      <div className="container-fluid contact py-5">
        <div className="container pt-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className=" col-6">
                <Lottie
                  width={370}
                  options={{
                    animationData: changepassword,
                  }}
                />
              </div>
              <div className=" col-6">
                <p className="fw-bold mb-1 fs-2 text-black">
                  Change your password
                </p>
                <p className="mb-2"></p>
                <form action="" onSubmit={handleChangePassword}>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="text"
                    className="  w-100 w-lg-100 form-control border-1 py-3 mb-3"
                    placeholder="New Password"
                  />
                  <input
                    value={confirmationpassword}
                    onChange={(e) => setConfirmationPassword(e.target.value)}
                    required
                    type="text"
                    className="  w-100 w-lg-100 form-control border-1 py-3 mb-3"
                    placeholder="Confirmation Password"
                  />
                  <button
                    className="mx-auto w-25 mb-2 btn form-control border-secondary py-3 bg-white text-dark "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                <Link to="/login" className="backtologin">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Changepassword;
