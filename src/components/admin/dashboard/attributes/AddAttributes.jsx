import React, { useState } from "react";

function AddAttributes() {
  return (
    <main className="">
      <div className="card shadow-sm  mt-4">
        <div className="card-header bg-white ">
          <h5 className="text-primary  my-3 ">Add Attribute</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3">
              <div className="col-md-12">
                <label htmlFor="categoryName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter attribute name"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                Add Attribute
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddAttributes;
