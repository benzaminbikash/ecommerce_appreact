import React, { useState } from "react";
import { NavLink } from "react-router";

function Signupform() {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form action="" className="">
      <input
        name="name"
        onChange={handleOnChange}
        type="text"
        className="w-100 form-control border-1 py-3 mb-4"
        placeholder="Full Name *"
      />
      <input
        name="email"
        onChange={handleOnChange}
        type="email"
        className="w-100 form-control border-1 py-3 mb-4"
        placeholder="Email *"
      />
      <input
        name="phone"
        onChange={handleOnChange}
        type="tel"
        className="w-100 form-control border-1 py-3 mb-4"
        placeholder="Phone Number *"
      />
      <input
        name="password"
        onChange={handleOnChange}
        type="password"
        className="w-100 form-control border-1 py-3 mb-4"
        placeholder="Password *"
      />

      <input
        name="confirmationpassword"
        onChange={handleOnChange}
        type="password"
        className="w-100 form-control border-1 py-3 mb-4"
        placeholder="Confirmation Password *"
      />
      <div className="d-flex flex-row align-items-center gap-2 mb-2">
        <input
          required
          onChange={handleOnChange}
          type="checkbox"
          name="term"
          id=""
          style={{ verticalAlign: "middle" }}
        />
        <p style={{ margin: 0 }}>I agree to terms and policy.</p>
      </div>
      <button
        className="w-100 btn form-control border-secondary py-3 bg-white text-dark"
        type="submit"
      >
        Submit
      </button>
      <div className="mt-2 text-center">
        Already have an account?{" "}
        <NavLink to="/login" className=" createhere ">
          Login
        </NavLink>
      </div>
      <div className="linalign">
        <div className="linecustom"></div>
        <p>Or</p>
        <div className="linecustom"></div>
      </div>
      <button
        className="w-100 btn  border-secondary py-3 bg-white text-primary  mt-4"
        type="submit"
      >
        Continue With Google
      </button>
    </form>
  );
}

export default Signupform;
