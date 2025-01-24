import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGetCategoryQuery } from "../../../../redux/Api/admin/AdminCategory";
import { useSubCategorySearchQuery } from "../../../../redux/Api/admin/AdminSubCategory";
import { useGetSubAttributeQuery } from "../../../../redux/Api/admin/AdminSubAttribute";
import { useAddProductMutation } from "../../../../redux/Api/admin/AdminProduct";
import Showmessage from "../../../common/Showmessage";

function AddProduct() {
  const [value, setValue] = useState("");
  const [product, setProduct] = useState("");
  const [stock, setStock] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [images, setImages] = useState([""]);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [attributes, setAttributes] = useState([
    { attribute: "", subAttributes: [] },
  ]);
  // api implement
  const { data: CATEGORYGET } = useGetCategoryQuery();
  const { data: SEARCHSUBCATEGORY } = useSubCategorySearchQuery(category);
  const { data: SUBATTRIBUTE } = useGetSubAttributeQuery();
  const [ADDPRODUCT] = useAddProductMutation();

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

  const handleAttributeChange = (index, event) => {
    const selectedAttributeId = event.target.value;
    const selectedAttribute = SUBATTRIBUTE?.data.find(
      (item) => item._id === selectedAttributeId
    );
    const newAttributes = [...attributes];
    newAttributes[index].attribute = selectedAttributeId;
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

  const removeAttribute = (index) => {
    const newAttributes = attributes.filter((_, i) => i !== index);
    setAttributes(newAttributes);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", product);
    formData.append("stock", stock);
    formData.append("price", price);
    formData.append("priceafterdiscount", discountPrice);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("description", value);
    formData.append("mainimage", mainImage);
    if (images) {
      images.forEach((image, index) => {
        if (image) formData.append(`images`, image);
      });
    }
    attributes.forEach((attr, index) => {
      formData.append(`attributes[${index}][title]`, attr.attribute);
      attr.subAttributes.forEach((value, valueIndex) => {
        formData.append(`attributes[${index}][values][${valueIndex}]`, value);
      });
    });

    const api = await ADDPRODUCT(formData);
    console.log(api);
    if (api?.error) {
      setSuccess("");
      setError(api?.error?.data?.message);
    } else {
      setError("");
      setSuccess(api?.data?.message);
    }
  };

  return (
    <main>
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">Add New Product</h5>
        </div>
        {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />}

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-control p-3 bg-light"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {CATEGORYGET?.data.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>

              {SEARCHSUBCATEGORY?.data?.length > 0 && (
                <div className="col-md-6">
                  <label htmlFor="subCategory" className="form-label">
                    Sub Category
                  </label>
                  <select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="form-control p-3 bg-light"
                  >
                    <option value="" disabled>
                      Select Sub Category
                    </option>
                    {SEARCHSUBCATEGORY.data.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="col-md-6">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter product name"
                  onChange={(e) => setProduct(e.target.value)}
                  value={product}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="form-control p-3 bg-light"
                  placeholder="Enter price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="discountPrice" className="form-label">
                  Price After Discount
                </label>
                <input
                  type="number"
                  id="discountPrice"
                  className="form-control p-3 bg-light"
                  placeholder="Enter discount price"
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  value={discountPrice}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="mainImage" className="form-label">
                  Main Image
                </label>
                <input
                  type="file"
                  id="mainImage"
                  className="form-control p-3 bg-light"
                  onChange={(e) => setMainImage(e.target.files[0])}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  className="form-control p-3 bg-light"
                  placeholder="Enter stock"
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}
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

              {/* Attributes */}
              <div className="col-md-6">
                <label className="form-label">Attributes</label>
                {attributes.map((attr, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <select
                        className="form-control p-3 bg-light"
                        value={attr.attribute}
                        onChange={(e) => handleAttributeChange(index, e)}
                      >
                        <option value="" disabled>
                          Select Attribute
                        </option>
                        {SUBATTRIBUTE?.data.map((opt) => (
                          <option key={opt._id} value={opt.attribute._id}>
                            {opt.attribute.title}
                          </option>
                        ))}
                      </select>
                      {attributes.length > 1 && (
                        <i
                          className="fas fa-minus-circle text-black btn"
                          onClick={() => removeAttribute(index)}
                        ></i>
                      )}
                    </div>

                    {SUBATTRIBUTE?.data
                      .find((opt) => opt.attribute._id === attr.attribute)
                      ?.title.map((subAttr) => (
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

            <div className="col-md-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                style={{ height: 200 }}
              />
            </div>

            {/* Submit */}
            <div className="mt-5">
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
