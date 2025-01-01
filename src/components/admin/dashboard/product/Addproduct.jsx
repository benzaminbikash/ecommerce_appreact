import React from "react";

function AddProduct() {
  return (
    <main>
      <div className="card shadow-sm  mt-4">
        <div className="card-header bg-white ">
          <h5 className="text-primary  my-3 ">Add New Product</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Category
                </label>
                <select
                  class="form-control  p-3 bg-light"
                  aria-label="Default select example"
                >
                  <option selected>---------------</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter category name"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="orderNumber" className="form-label">
                  price
                </label>
                <input
                  type="number"
                  id="pricenumber"
                  className="form-control p-3 bg-light"
                  placeholder="Enter price"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="iconImage" className="form-label">
                  Image
                </label>
                <div className="input-group">
                  <input
                    type="file"
                    className="form-control p-3 bg-light"
                    id="iconImage"
                    aria-label="Upload"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="orderNumber" className="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  className="form-control p-3 bg-light"
                  placeholder="Enter product description"
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

export default AddProduct;
