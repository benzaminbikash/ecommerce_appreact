import React, { useState, useRef, useEffect } from "react";
import Showmessage from "../../../common/Showmessage";
import { useLocation } from "react-router";
import ReactQuill from "react-quill";
import { constant } from "../../../common/constant";
import {
  useAddBlogMutation,
  useUpdateBlogMutation,
} from "../../../../redux/Api/admin/AdminBlog";

function AddBlog() {
  const { state } = useLocation();
  const [selectImage, setSelectImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const imageRef = useRef();

  const [BLOG] = useAddBlogMutation();

  const [UPDATEBLOG] = useUpdateBlogMutation();

  const addBlogForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (selectImage instanceof File) {
      formData.append("image", selectImage);
    }

    const api = await BLOG(formData);

    if (api?.error) {
      setSuccess("");
      setError(api?.error?.data?.message);
    } else {
      setError("");
      setSuccess(api?.data?.message);
      setTitle("");
      setDescription("");
      setSelectImage(null);
      if (imageRef.current) {
        imageRef.current.value = null;
      }
    }
  };

  const updateBlogForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    if (selectImage instanceof File) {
      formData.append("image", selectImage);
    }
    const blog = {
      id: state._id,
      data: formData,
    };
    const api = await UPDATEBLOG(blog);

    if (api?.error) {
      setError(api?.error?.data?.message);
    } else {
      setSuccess(api?.data?.message);
      setTitle("");
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
      setDescription(state.description);
      setSelectImage(
        state.image ? `${constant.IMAGEURL}/${state.image}` : null
      );
    }
  }, [state]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectImage(e.target.files[0]);
    }
  };

  return (
    <main className="">
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">
            {state != null ? "Update Blog" : "Add New Blog"}
          </h5>
        </div>

        {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />}

        <div className="card-body">
          <form onSubmit={state ? updateBlogForm : addBlogForm}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control  bg-light"
                  placeholder="Enter category name"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
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
                    className="form-control  bg-light"
                    id="iconImage"
                    aria-label="Upload"
                    ref={imageRef}
                  />
                </div>
              </div>

              {selectImage && (
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

              <div className="col-md-12 mt-2 mb-4 mb-lg-0">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                  style={{ height: 200 }}
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="mt-4 btn btn-primary text-white py-2"
              >
                {state ? "Update Blog" : "Add Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddBlog;
