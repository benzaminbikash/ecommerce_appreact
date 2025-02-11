import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useLoginUserMutation } from "../../redux/Api/AuthApi";
import { setCredentials } from "../../redux/Slice/AuthSlice";
import { useDispatch } from "react-redux";
import Showmessage from "../common/Showmessage";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginUser] = useLoginUserMutation();

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
      navigate("/");
    }
  };

  return (
    <form action="" onSubmit={handleLoginform}>
      {error != "" && <Showmessage message={error} status="fail" />}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        className="w-100 form-control border-1 py-3 mb-4"
        placeholder="Enter Your Email *"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        className="w-100 form-control border-1 py-3 mb-4"
        placeholder="Enter Your Password *"
      />
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex flex-row align-items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            id=""
            style={{ verticalAlign: "middle" }}
          />
          <p style={{ margin: 0 }}>Remember me</p>
        </div>
        <NavLink
          to="/forget-password"
          style={{ margin: 0 }}
          className="forgetpassword"
        >
          Forget Password?
        </NavLink>
      </div>
      <button
        className="w-100 btn form-control border-secondary py-3 bg-white text-dark "
        type="submit"
      >
        Submit
      </button>
      <div className="mt-2 text-center">
        Don't have any account?{" "}
        <NavLink to="/signup" className=" createhere ">
          Create here
        </NavLink>
      </div>
    </form>
  );
}

export default LoginForm;
