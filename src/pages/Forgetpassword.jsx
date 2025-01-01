import Lottie from "react-lottie";
import { Link } from "react-router";
import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import forgetpassword from "../img/forgetpassword.json";
import Showmessage from "../components/common/Showmessage";

function Forgetpassword() {
  const [email, setEmail] = useState("");
  const handleForgetPassword = (e) => {
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
      <Header title={"Forget Password"} />
      <div className="container-fluid contact py-5">
        <div className="container pt-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <Lottie
                  options={{
                    animationData: forgetpassword,
                  }}
                />
              </div>
              <div className="col-12 col-md-6">
                <p className="fw-bold mb-1 fs-2 text-black">Forget Password?</p>
                <Showmessage
                  status={"fail"}
                  message={"The given email is not registerd!"}
                />
                <hr />
                <Showmessage
                  status={"success"}
                  message={"Check the your email to change the password."}
                />
                <p className="mb-2">
                  Enter your e-mail address, and we'll give you reset
                  instruction.
                </p>
                <form action="" onSubmit={handleForgetPassword}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="text"
                    className="  w-100  form-control border-1 py-3 mb-3"
                    placeholder="Your Email"
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

export default Forgetpassword;
