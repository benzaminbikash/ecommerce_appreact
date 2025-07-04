import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";

import { useGetCategoryQuery } from "../../../../redux/Api/admin/AdminCategory";
import { useSubCategorySearchQuery } from "../../../../redux/Api/admin/AdminSubCategory";
import { useGetSubAttributeQuery } from "../../../../redux/Api/admin/AdminSubAttribute";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../../../redux/Api/admin/AdminProduct";
import Showmessage from "../../../common/Showmessage";
import { useLocation, useNavigate } from "react-router-dom";
import { constant, modules } from "../../../common/constant";

function AddProduct() {
  const navigate = useNavigate();
  const { state } = useLocation();
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
  const [rating, setRating] = useState("");
  const [video, setVideo] = useState("");
  const [attributes, setAttributes] = useState([
    { attribute: "", subAttributes: [] },
  ]);
  const [bestSeller, setBestSeller] = useState(false);
  const mainImageRef = useRef();
  const imagesRef = useRef([]);

  // api implement
  const { data: CATEGORYGET } = useGetCategoryQuery();
  const { data: SEARCHSUBCATEGORY } = useSubCategorySearchQuery(category);
  const { data: SUBATTRIBUTE } = useGetSubAttributeQuery();
  const [ADDPRODUCT] = useAddProductMutation();
  const [UPDATEPRODUCT] = useUpdateProductMutation();

  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index] = event.target.files[0];
    setImages(newImages);
  };

  const addMoreImages = () => {
    if (images.length < 5) {
      setImages([...images, ""]);
    }
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
    if (subCategory) {
      formData.append("subCategory", subCategory);
    }
    formData.append("description", value);
    formData.append("mainimage", mainImage);
    if (bestSeller) {
      formData.append("bestSeller", bestSeller);
    }
    if (rating) {
      formData.append("rating", rating);
    }
    if (images) {
      images.forEach((image, index) => {
        if (image) formData.append(`images`, image);
      });
    }
    if (video) {
      formData.append("video", video);
    }
    attributes.forEach((attr, index) => {
      formData.append(`attributes[${index}][title]`, attr.attribute);
      attr.subAttributes.forEach((value, valueIndex) => {
        formData.append(`attributes[${index}][values][${valueIndex}]`, value);
      });
    });

    const api = state
      ? await UPDATEPRODUCT({
          id: state?._id,
          data: formData,
        })
      : await ADDPRODUCT(formData);
    if (api?.error) {
      setSuccess("");
      setError(api?.error?.data?.message);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      setError("");
      setSuccess(api?.data?.message);
      setProduct("");
      setStock("");
      setPrice("");
      setDiscountPrice("");
      setCategory("");
      setSubCategory("");
      setMainImage(null);
      setVideo("");
      setRating("");
      if (mainImageRef.current) {
        mainImageRef.current.value = null;
      }
      setAttributes([{ attribute: "", subAttributes: [] }]);
      setImages([""]);
      setValue("");
      imagesRef.current.forEach((input) => {
        if (input) input.value = null;
      });
      setBestSeller(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (state) {
        navigate("/admin/product");
      }
    }
  };

  useEffect(() => {
    if (state) {
      setValue(state?.description);
      setCategory(state?.category?._id);
      setSubCategory(state?.subCategory?._id);
      setProduct(state?.title);
      setPrice(state?.price);
      setDiscountPrice(state?.priceafterdiscount);
      setStock(state?.stock);
      const mappedAttributes = state?.attributes.map((item) => ({
        attribute: item?.title?._id,
        subAttributes: item?.values,
      }));
      setAttributes(mappedAttributes);
      setMainImage(state?.mainimage);
      setImages(state?.images || []);
      setBestSeller(state?.bestSeller);
      setRating(state?.rating);
      setVideo(state?.video);
    }
  }, [state]);

  return (
    <main>
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">
            {state ? "Update Product" : "Add New Product"}
          </h5>
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
                  className="form-control bg-light"
                  required
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
                    className="form-control bg-light"
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
                  className="form-control bg-light"
                  placeholder="Enter product name"
                  onChange={(e) => setProduct(e.target.value)}
                  value={product}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="form-control bg-light"
                  placeholder="Enter price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="discountPrice" className="form-label">
                  Price After Discount
                </label>
                <input
                  type="number"
                  id="discountPrice"
                  className="form-control bg-light"
                  placeholder="Enter discount price"
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  value={discountPrice}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="mainImage" className="form-label">
                  Main Image
                </label>
                <input
                  type="file"
                  id="mainImage"
                  className="form-control bg-light"
                  ref={mainImageRef}
                  onChange={(e) => setMainImage(e.target.files[0])}
                  required
                />
                {mainImage && (
                  <div className="mt-3">
                    <h6>Selected Image:</h6>
                    <div className="row g-2">
                      <div className="col-3">
                        <img
                          src={
                            mainImage instanceof File
                              ? URL.createObjectURL(mainImage)
                              : `${constant.IMAGEURL}/${mainImage}`
                          }
                          alt="Selected"
                          className="img-thumbnail"
                          style={{ maxHeight: "100px", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  className="form-control bg-light"
                  placeholder="Enter stock"
                  onChange={(e) => setStock(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="images" className="form-label">
                  Images upto 5
                </label>
                {images.map((image, index) => (
                  <div key={index} className="input-group mb-3">
                    <input
                      type="file"
                      className="form-control bg-light"
                      ref={(el) => (imagesRef.current[index] = el)}
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

                {/* selet image */}
                {images != "" && (
                  <>
                    <h6>Selected Image:</h6>
                    <div className="d-flex gap-2 mb-2">
                      {images.map((item, index) => (
                        <div key={index} className="row ">
                          <div className="col-12">
                            <img
                              src={
                                item instanceof File
                                  ? URL.createObjectURL(item)
                                  : `${constant.IMAGEURL}/${item}`
                              }
                              alt="Add New"
                              className="img-thumbnail"
                              style={{
                                maxHeight: "100px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {images.length != 5 && (
                  <i
                    className="fas fa-plus-circle form-control text-white w-50 btn bg-secondary"
                    onClick={addMoreImages}
                  >
                    <span className="ps-2"> Add Images</span>
                  </i>
                )}
              </div>

              {/* Attributes */}
              <div className="col-md-6">
                <label className="form-label">Attributes</label>
                {attributes.map((attr, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <select
                        className="form-control bg-light"
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
                      ?.title.map((subAttr, index) => (
                        <div key={index} className="form-check">
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
                  className="fas fa-plus-circle form-control text-white w-50 btn bg-secondary"
                  onClick={addMoreAttributes}
                >
                  <span className="ps-2">Add Attribute</span>
                </i>
              </div>

              <div className="col-md-6">
                <label htmlFor="video" className="form-label">
                  Video
                </label>
                <input
                  type="text"
                  id="video"
                  className="form-control bg-light"
                  placeholder="Enter video link"
                  onChange={(e) => setVideo(e.target.value)}
                  value={video}
                />
              </div>
            </div>

            <div className="col-md-12 mt-2">
              <label htmlFor="description" className="form-label">
                Best Seller
              </label>
              <input
                type="checkbox"
                className="form-check-input ms-2"
                checked={bestSeller}
                onChange={() => setBestSeller(!bestSeller)}
              />
            </div>
            {/* rating */}
            {bestSeller && (
              <div className="col-md-6">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  className="form-control bg-light"
                  placeholder="Enter rating"
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                />
              </div>
            )}

            <div className="col-md-12 mt-2">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <ReactQuill
                modules={modules}
                theme="snow"
                value={value}
                onChange={setValue}
                style={{ height: 350 }}
              />
            </div>

            {/* Submit */}
            <div className="submitformt">
              <button
                type="submit"
                className="btn form-control w-25  bg-secondary text-white py-2"
              >
                {state ? "Update Product" : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddProduct;
