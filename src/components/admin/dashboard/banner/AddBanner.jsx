import React, { useEffect, useRef, useState } from "react";
import {
  useAddBannerMutation,
  useUpdateBannerMutation,
} from "../../../../redux/Api/admin/AdminBanner";
import Showmessage from "../../../common/Showmessage";
import { useLocation } from "react-router-dom";

function AddBanner() {
  const { state } = useLocation();
  const [selectImage, setSelectImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const imageRef = useRef();

  // api
  const [ADDBANNER] = useAddBannerMutation();
  const [UPDATEBANNER] = useUpdateBannerMutation();

  const handleAddBanner = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subTitle);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", selectImage);
    const api = await ADDBANNER(formData);
    if (api?.error) {
      setError(api?.error?.data?.message);
    } else {
      setSuccess(api?.data?.message);
      setTitle("");
      setSubTitle("");
      setPrice("");
      setDescription("");
      setSelectImage(null);
      if (imageRef.current) {
        imageRef.current.value = null;
      }
    }
  };

  const handleUpdateBanner = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subTitle);
    formData.append("description", description);
    formData.append("price", price);
    if (selectImage instanceof File) {
      formData.append("image", selectImage);
    }
    const banner = {
      id: state._id,
      data: formData,
    };
    const api = await UPDATEBANNER(banner);
    if (api?.error) {
      setError(api?.error?.data?.message);
    } else {
      setSuccess(api?.data?.message);
      setTitle("");
      setSubTitle("");
      setPrice("");
      setDescription("");
      setSelectImage(null);
      if (imageRef.current) {
        imageRef.current.value = null;
      }
    }
  };

  useEffect(() => {
    if (state) {
      setTitle(state.title);
      setSubTitle(state.subtitle);
      setPrice(state.price);
      setDescription(state.description);
      setSelectImage(
        state.image ? `http://localhost:8000/uploads/${state.image}` : null
      );
    }
  }, [state]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectImage(e.target.files[0]);
    }
  };
  return (
    <main>
      <div className="card shadow-sm  mt-4">
        <div className="card-header bg-white ">
          <h5 className="text-primary  my-3 ">
            {state ? "Update Banner" : "Add Banner"}
          </h5>
        </div>
        {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />}
        <div className="card-body">
          <form onSubmit={state ? handleUpdateBanner : handleAddBanner}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control p-2 bg-light"
                  placeholder="Enter title"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Sub Title
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control p-2 bg-light"
                  placeholder="Enter sub-title"
                  required
                  onChange={(e) => setSubTitle(e.target.value)}
                  value={subTitle}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Description
                </label>
                <textarea
                  rows={3}
                  type="text"
                  id="Description"
                  className="form-control p-2 bg-light"
                  placeholder="Enter description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  id="categoryName"
                  className="form-control p-2 bg-light"
                  placeholder="Enter price"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="iconImage" className="form-label">
                  Image
                </label>
                <div className="input-group">
                  <input
                    onChange={handleImageChange}
                    type="file"
                    className="form-control p-2 bg-light"
                    id="iconImage"
                    aria-label="Upload"
                    required
                    ref={imageRef}
                  />
                </div>
              </div>
              {selectImage != null && (
                <div className="mt-3">
                  <h6>Selected Image:</h6>
                  <div className="row g-2">
                    <div className="col-3">
                      <img
                        src={
                          selectImage instanceof File
                            ? URL.createObjectURL(selectImage)
                            : selectImage
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

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                {state ? "Update Banner" : "Add Banner"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddBanner;
