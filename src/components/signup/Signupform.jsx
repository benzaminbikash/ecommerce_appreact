import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Showmessage from "../common/Showmessage";
import { useRegistrationMutation } from "../../redux/Api/AuthApi";

function Signupform() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmationpassword: "",
    term: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [authRegistration] = useRegistrationMutation();

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    const api = await authRegistration(form);
    if (api.error) {
      setError(api.error?.data?.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess(`${api.data.message} Now you can login.`);
      setForm({
        fullname: "",
        email: "",
        phone: "",
        password: "",
        confirmationpassword: "",
        term: false,
      });
    }
  };

  return (
    <form onSubmit={formHandler}>
      {error && <Showmessage message={error} status={"fail"} />}
      {success && (
        <Showmessage
          message={
            <>
              {success}
              <Link
                to="/login"
                className="loginaftersuccess"
                onClick={() => {}}
              >
                Login Here
              </Link>
            </>
          }
          status={"success"}
        />
      )}

      <input
        name="fullname"
        onChange={handleOnChange}
        value={form.fullname}
        type="text"
        className="w-100 form-control border-1 py-2 mb-4"
        placeholder="Full Name *"
      />
      <input
        name="email"
        onChange={handleOnChange}
        value={form.email}
        type="email"
        className="w-100 form-control border-1 py-2 mb-4"
        placeholder="Email *"
      />
      <input
        name="phone"
        onChange={handleOnChange}
        value={form.phone}
        type="tel"
        className="w-100 form-control border-1 py-2 mb-4"
        placeholder="Phone Number *"
      />
      <input
        name="password"
        onChange={handleOnChange}
        value={form.password}
        type="password"
        className="w-100 form-control border-1 py-2 mb-4"
        placeholder="Password *"
      />
      <input
        name="confirmationpassword"
        onChange={handleOnChange}
        value={form.confirmationpassword}
        type="password"
        className="w-100 form-control border-1 py-2 mb-4"
        placeholder="Confirmation Password *"
      />
      <div className="d-flex flex-row align-items-center gap-2 mb-2">
        <input
          name="term"
          onChange={handleOnChange}
          type="checkbox"
          checked={form.term}
          style={{ verticalAlign: "middle" }}
        />
        <p style={{ margin: 0 }} className="stock">
          I agree to terms and policy.
        </p>
      </div>
      <button
        className="w-100 btn form-control bg-secondary stock py-2 text-white"
        type="submit"
      >
        Submit
      </button>
      <div className=" stock mt-2 text-center">
        Already have an account?{" "}
        <NavLink to="/login" className="stock text-secondary createhere">
          Login
        </NavLink>
      </div>
    </form>
  );
}

export default Signupform;
