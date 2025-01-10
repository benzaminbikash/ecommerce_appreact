import React, { useState } from "react";

function AddProduct() {
  const [images, setImages] = useState([""]);
  const [attributes, setAttributes] = useState([
    { attribute: "", subAttributes: [] },
  ]);

  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index] = event.target.files[0];
    setImages(newImages);
  };

  const addMoreImages = () => {
    setImages([...images, ""]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const attributeOptions = [
    { attribute: "Color", subAttributes: ["Red", "Green", "Blue"] },
    { attribute: "Size", subAttributes: ["Small", "Medium", "Large"] },
    { attribute: "Material", subAttributes: ["Cotton", "Polyester", "Silk"] },
  ];

  const handleAttributeChange = (index, event) => {
    const newAttributes = [...attributes];
    newAttributes[index].attribute = event.target.value;
    newAttributes[index].subAttributes = [];
    setAttributes(newAttributes);
  };

  const handleSubAttributeChange = (index, subAttr) => {
    const newAttributes = [...attributes];
    const currentSubAttributes = newAttributes[index].subAttributes;

    if (currentSubAttributes.includes(subAttr)) {
      newAttributes[index].subAttributes = currentSubAttributes.filter(
        (attr) => attr !== subAttr
      );
    } else {
      newAttributes[index].subAttributes.push(subAttr);
    }

    setAttributes(newAttributes);
  };

  const addMoreAttributes = () => {
    setAttributes([...attributes, { attribute: "", subAttributes: [] }]);
  };

  return (
    <main>
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">Add New Product</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Category
                </label>
                <select
                  className="form-control p-3 bg-light"
                  aria-label="Default select example"
                >
                  <option selected disabled>
                    Select Category
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter product name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="previousPrice" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  id="previousPrice"
                  className="form-control p-3 bg-light"
                  placeholder="Enter previous price"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="currentPrice" className="form-label">
                  Price After Discount
                </label>
                <input
                  type="number"
                  id="currentPrice"
                  className="form-control p-3 bg-light"
                  placeholder="Enter current price"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="mainImage" className="form-label">
                  Main Image
                </label>
                <div className="input-group">
                  <input
                    type="file"
                    className="form-control p-3 bg-light"
                    id="mainImage"
                    aria-label="Upload"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  className="form-control p-3 bg-light"
                  placeholder="Stock"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="images" className="form-label">
                  Images
                </label>
                {images.map((image, index) => (
                  <div key={index} className="input-group mb-3">
                    <input
                      type="file"
                      className="form-control p-3 bg-light"
                      onChange={(e) => handleImageChange(index, e)}
                    />
                    {images.length > 1 && (
                      <i
                        className="fas fa-minus-circle text-white btn btn-success pt-3"
                        onClick={() => removeImage(index)}
                      ></i>
                    )}
                  </div>
                ))}

                <i
                  className="fas fa-plus-circle text-white w-25 btn btn-primary"
                  onClick={addMoreImages}
                >
                  <span className="ps-2"> Add Images</span>
                </i>
              </div>

              <div className="col-md-6">
                <label className="form-label">Attributes</label>
                {attributes.map((attr, index) => (
                  <div key={index} className="mb-3">
                    <select
                      className="form-control p-3 bg-light mb-2"
                      value={attr.attribute}
                      onChange={(e) => handleAttributeChange(index, e)}
                    >
                      <option value="" disabled>
                        Select Attribute
                      </option>
                      {attributeOptions.map((opt) => (
                        <option key={opt.attribute} value={opt.attribute}>
                          {opt.attribute}
                        </option>
                      ))}
                    </select>
                    {attributeOptions
                      .find((opt) => opt.attribute === attr.attribute)
                      ?.subAttributes.map((subAttr) => (
                        <div key={subAttr} className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={attr.subAttributes.includes(subAttr)}
                            onChange={() =>
                              handleSubAttributeChange(index, subAttr)
                            }
                          />
                          <label className="form-check-label">{subAttr}</label>
                        </div>
                      ))}
                  </div>
                ))}

                <i
                  className="fas fa-plus-circle text-white w-50 btn btn-primary"
                  onClick={addMoreAttributes}
                >
                  <span className="ps-2">Add More Attribute</span>
                </i>
              </div>
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddProduct;
