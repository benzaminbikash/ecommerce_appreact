import React, { useState } from "react";
import { NavLink } from "react-router";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginform = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="adminlogin">
      <h2>Login for Dashboard</h2>
      <form className="w-50" action="" onSubmit={handleLoginform}>
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
      </form>
    </div>
  );
}

export default LoginAdmin;
