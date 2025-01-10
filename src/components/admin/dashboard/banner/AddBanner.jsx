import React, { useState } from "react";

function AddBanner() {
  const [selectImage, setSelectImage] = useState(null);

  return (
    <main className="">
      <div className="card shadow-sm  mt-4">
        <div className="card-header bg-white ">
          <h5 className="text-primary  my-3 ">Add Banner</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter title"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Sub Title
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter sub-title"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  id="Description"
                  className="form-control p-3 bg-light"
                  placeholder="Enter description"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  id="categoryName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter price"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Weight
                </label>
                <input
                  type="number"
                  id="weight"
                  className="form-control p-3 bg-light"
                  placeholder="Enter weight"
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

              <div className="col-md-6">
                <label htmlFor="orderNumber" className="form-label">
                  Submit Name
                </label>
                <input
                  type="text"
                  id="submitname "
                  className="form-control p-3 bg-light"
                  placeholder="Enter submit name"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                Add Banner
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddBanner;
