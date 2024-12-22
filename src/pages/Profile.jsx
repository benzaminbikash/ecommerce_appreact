import React from "react";

function Profile() {
  return (
    <>
      <h1>My details</h1>
      <p>Personal Information</p>
      <p class="text-muted">
        Assertively utilize adaptive customer service for future-proof
        platforms. Completely drive optimal markets.
      </p>

      <form>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control border-1 py-3 mb-4"
              id="firstName"
            />
          </div>
          <div class="col-md-6">
            <label for="secondName" class="form-label">
              Second Name
            </label>
            <input
              type="text"
              class="form-control border-1 py-3 mb-4"
              id="secondName"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="birthDate" class="form-label">
              Birth Date
            </label>
            <input
              type="date"
              class="form-control border-1 py-3 mb-4"
              id="birthDate"
            />
          </div>
          <div class="col-md-6">
            <label for="phoneNumber" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control border-1 py-3 mb-4"
              id="phoneNumber"
            />
            <small class="text-muted">
              Keep 9-digit format with no spaces and dashes.
            </small>
          </div>
        </div>
        <button
          type="submit"
          class="w-25 btn form-control border-secondary py-3 bg-white text-primary "
        >
          Save
        </button>
      </form>
      <hr />

      <h5>Email address</h5>
      <p class="text-muted">
        Assertively utilize adaptive customer service for future-proof
        platforms. Completely drive optimal markets.
      </p>
      <div class="mb-3">
        <label for="emailAddress" class="form-label">
          Email Address
        </label>
        <input
          type="email"
          class="form-control border-1 py-3 mb-4"
          id="emailAddress"
          placeholder="email@example.pl"
        />
      </div>
    </>
  );
}

export default Profile;
