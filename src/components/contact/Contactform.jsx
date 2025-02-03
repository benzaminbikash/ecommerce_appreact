import React, { useState } from "react";

function Contactform() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const contactForm = async (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <div>
      <form action="" className="" onSubmit={contactForm}>
        <input
          onChange={handleInputChange}
          name="name"
          type="text"
          className="w-100 form-control border-1 py-3 mb-4"
          placeholder="Your Name"
          required
          value={contact.name}
        />
        <input
          onChange={handleInputChange}
          name="email"
          type="email"
          className="w-100 form-control border-1 py-3 mb-4"
          placeholder="Enter Your Email"
          required
          value={contact.email}
        />
        <textarea
          onChange={handleInputChange}
          name="message"
          className="w-100 form-control border-1 mb-4"
          rows="5"
          cols="10"
          placeholder="Your Message"
          required
          value={contact.message}
        ></textarea>
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

export default Contactform;
