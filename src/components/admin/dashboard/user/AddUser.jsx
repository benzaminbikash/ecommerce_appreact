import React, { useState } from "react";

function AddUser() {
  const [selectImage, setSelectImage] = useState(null);

  return (
    <main className="">
      <div className="card shadow-sm  mt-4">
        <div className="card-header bg-white ">
          <h5 className="text-primary  my-3 ">Add User</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control p-3 bg-light"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control p-3 bg-light"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control p-3 bg-light"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Confirmation Password
                </label>
                <input
                  type="password"
                  id="c_password"
                  className="form-control p-3 bg-light"
                  placeholder="Enter confirmation password"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="iconImage" className="form-label">
                  Image
                </label>
                <div className="input-group">
                  <input
                    onChange={(e) => setSelectImage(e.target.files)}
                    type="file"
                    className="form-control p-3 bg-light"
                    id="iconImage"
                    aria-label="Upload"
                    required
                  />
                </div>
              </div>
              {selectImage && (
                <div className="mt-3">
                  <h6>Selected Image:</h6>
                  <div className="row g-2">
                    <div className="col-3">
                      <img
                        src={URL.createObjectURL(selectImage[0])}
                        alt="Selected"
                        className="img-thumbnail"
                        style={{ maxHeight: "100px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div class="form-check form-switch m-2">
                <input
                  class="form-check-input "
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label class="form-check-label" for="flexSwitchCheckChecked">
                  is Admin
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddUser;
