import React, { useState } from "react";
import { NavLink, replace, useNavigate } from "react-router-dom";
import {
  useGoogleLoginMutation,
  useLoginUserMutation,
  useResendOtpMutation,
} from "../../redux/Api/AuthApi";
import { setCredentials } from "../../redux/Slice/AuthSlice";
import { useDispatch } from "react-redux";
import Showmessage from "../common/Showmessage";
import LoadingButton from "../common/LoadingButton";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import GoogleImage from "../../img/google.png";
import { useGoogleLogin } from "@react-oauth/google";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [RESEND, { isLoading: resendLoading }] = useResendOtpMutation();
  const [GOOGLE] = useGoogleLoginMutation();

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfoResponse = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );
      const userInfo = await userInfoResponse.json();
      console.log(userInfo);
      const api = await GOOGLE({
        email: userInfo?.email,
        fullname: userInfo?.name,
        isVerify: userInfo?.email_verified,
        profilepicture: userInfo?.picture,
      });
      if (api.error) {
        setError(api.error?.data?.message);
      } else {
        const { accessToken, refreshToken } = api?.data;
        dispatch(
          setCredentials({
            accessToken: accessToken,
            refreshToken: refreshToken,
          })
        );
        setError("");
        navigate("/", replace);
      }
    },
    onError: (err) => console.log(err),
  });

  const handleLoginform = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const api = await loginUser(data);
    if (api.error) {
      setError(api.error?.data?.message);
    } else {
      const { accessToken, refreshToken } = api?.data;
      dispatch(
        setCredentials({ accessToken: accessToken, refreshToken: refreshToken })
      );
      setError("");
      if (api?.data?.data?.role == "admin") {
        navigate("/admin/", replace);
      } else {
        navigate("/", replace);
      }
    }
  };
  const resendOtp = async () => {
    const api = await RESEND({ email: email });
    if (api.error) {
      setError(api.error?.data?.message);
    } else {
      toast.success("Check your mail for otp.");
      navigate("/verifyaccount", {
        state: {
          email: email,
        },
      });
    }
  };
  const message = (
    <div className="d-flex align-items-center">
      Please Verify Your Account.
      <span
        onClick={() => resendOtp()}
        style={{
          textDecoration: "underline",
          border: "none",
          background: "none",
          cursor: "pointer",
          color: "white",
          paddingLeft: 5,
        }}
      >
        {resendLoading ? (
          <PulseLoader
            color={"white"}
            loading={true}
            size={5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          " Click Here to Verify Here"
        )}
      </span>
    </div>
  );
  return (
    <form>
      {error != "" &&
        (error == "Please Verify Your Account." ? (
          <Showmessage message={message} status="fail" />
        ) : (
          <Showmessage message={error} status="fail" />
        ))}

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        className="w-100 form-control border-1 py-2 mb-4"
        placeholder="Enter Your Email *"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        className="w-100 form-control border-1 py-2 mb-4"
        placeholder="Enter Your Password *"
      />
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex flex-row align-items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            style={{ verticalAlign: "middle" }}
          />
          <p style={{ margin: 0 }} className="stock">
            Remember me
          </p>
        </div>
        <NavLink
          to="/forget-password "
          style={{ margin: 0 }}
          className="forgetpassword stock"
        >
          Forget Password?
        </NavLink>
      </div>
      <button
        onClick={handleLoginform}
        className="w-100 btn  text-white stock py-2 ratingbackground text-dark "
        type="submit"
      >
        {isLoading ? <LoadingButton /> : "Submit"}
      </button>
      <p className="text-center">or</p>
      <div
        onClick={loginGoogle}
        className="bg-white p-2 d-flex  shadow-sm justify-content-center gap-2 align-items-center rounded stock mt-1 signinbutton "
      >
        <img className="signin" src={GoogleImage} alt="randomimage" />
        Sign In With Google
      </div>
      <div className="mt-2 text-center stock">
        Don't have any account?{" "}
        <NavLink to="/signup" className="stock createhere  text-danger">
          Create here
        </NavLink>
      </div>
    </form>
  );
}

export default LoginForm;
