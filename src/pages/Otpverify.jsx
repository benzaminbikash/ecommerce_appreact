import Lottie from "react-lottie";
import { Link } from "react-router";
import OtpInput from "react-otp-input";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Onetimepassword from "../img/otp.json";

function Otpverify() {
  const [otp, setOtp] = useState("");
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
                  height={250}
                  options={{
                    animationData: Onetimepassword,
                  }}
                />
              </div>
              <div className="col-12 col-md-6">
                <p className="fw-bold mb-1 fs-2 text-black">OTP Verification</p>
                <p className="mb-2">
                  One Time Password (OTP) has been sent via Email to
                  <span className="fw-bold text-dark">
                    {" "}
                    zendayaapi@gmail.com
                  </span>
                </p>
                <p className="mb-2">Enter the OTP below to verify it.</p>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderInput={(props) => <input {...props} />}
                  inputType="tel"
                  inputStyle={{
                    borderRadius: 100,
                    width: 50,
                    marginRight: 10,
                    height: 50,
                    borderWidth: 0.5,
                  }}
                  shouldAutoFocus={true}
                  onPaste={true}
                />
                <button
                  className="d-block mt-3 w-25 mb-2 btn form-control border-secondary py-3 bg-white text-dark "
                  type="submit"
                >
                  Submit
                </button>
                <Link to="/login" className="backtologin mt-2">
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

export default Otpverify;
