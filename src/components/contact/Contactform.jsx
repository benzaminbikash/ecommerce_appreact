import React from "react";

function Contactform() {
  return (
    <div>
      <form action="" className="">
        <input
          type="text"
          className="w-100 form-control border-1 py-3 mb-4"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="w-100 form-control border-1 py-3 mb-4"
          placeholder="Enter Your Email"
        />
        <textarea
          className="w-100 form-control border-1 mb-4"
          rows="5"
          cols="10"
          placeholder="Your Message"
        ></textarea>
        <button
          className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contactform;
