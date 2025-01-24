import React from "react";

function Profile() {
  return (
    <>
      <h1>My details</h1>
      <p>Personal Information</p>
      <p className="text-muted">
        Assertively utilize adaptive customer service for future-proof
        platforms. Completely drive optimal markets.
      </p>

      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label for="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control border-1 py-3 mb-4"
              id="firstName"
            />
          </div>
          <div className="col-md-6">
            <label for="secondName" className="form-label">
              Second Name
            </label>
            <input
              type="text"
              className="form-control border-1 py-3 mb-4"
              id="secondName"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label for="birthDate" className="form-label">
              Birth Date
            </label>
            <input
              type="date"
              className="form-control border-1 py-3 mb-4"
              id="birthDate"
            />
          </div>
          <div className="col-md-6">
            <label for="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control border-1 py-3 mb-4"
              id="phoneNumber"
            />
            <small className="text-muted">
              Keep 9-digit format with no spaces and dashes.
            </small>
          </div>
        </div>
        <button
          type="submit"
          className="w-25 btn form-control border-secondary py-3 bg-white text-primary "
        >
          Save
        </button>
      </form>
      <hr />

      <h5>Email address</h5>
      <p className="text-muted">
        Assertively utilize adaptive customer service for future-proof
        platforms. Completely drive optimal markets.
      </p>
      <div className="mb-3">
        <label for="emailAddress" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control border-1 py-3 mb-4"
          id="emailAddress"
          placeholder="email@example.pl"
        />
      </div>
    </>
  );
}

export default Profile;
