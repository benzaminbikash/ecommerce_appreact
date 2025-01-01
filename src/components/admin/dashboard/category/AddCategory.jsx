import React, { useState } from "react";

function AddCategory() {
  const [selectImage, setSelectImage] = useState(null);
  console.log(selectImage);

  return (
    <main className="">
      <div className="card shadow-sm  mt-4">
        <div className="card-header bg-white ">
          <h5 className="text-primary  my-3 ">Add New Category</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter category name"
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
                  Order Number
                </label>
                <input
                  type="text"
                  id="orderNumber "
                  className="form-control p-3 bg-light"
                  placeholder="Enter order_number"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddCategory;
