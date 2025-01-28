import React, { useRef, useState } from "react";
import { useAddCarouselMutation } from "../../../../redux/Api/admin/AdminCarousel";
import Showmessage from "../../../common/Showmessage";

function AddCarousel() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const imageRef = useRef([]);

  const [ADDCAROUSEL] = useAddCarouselMutation();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  const handleAddForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    selectedImages.forEach((image) => {
      formData.append(`image`, image);
    });

    const api = await ADDCAROUSEL(formData);
    if (api?.error) {
      setSuccess("");
      setError(api?.error?.data?.message);
    } else {
      setError("");
      setSuccess(api?.data?.message);
      setTitle("");
      setSubtitle("");
      setSelectedImages([]);
      if (imageRef.current) {
        imageRef.current.value = null;
      }
    }
  };

  return (
    <main className="">
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">Add Carousel</h5>
        </div>

        {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />}

        <div className="card-body">
          <form onSubmit={handleAddForm}>
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="subTitle" className="form-label">
                  Sub Title
                </label>
                <input
                  type="text"
                  id="subTitle"
                  className="form-control p-3 bg-light"
                  placeholder="Enter sub title"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="images" className="form-label">
                  Images
                </label>
                <div className="input-group">
                  <input
                    type="file"
                    className="form-control p-3 bg-light"
                    id="images"
                    aria-label="Upload"
                    multiple
                    onChange={handleFileChange}
                    required
                    ref={imageRef}
                  />
                </div>
              </div>
            </div>
            {selectedImages.length > 0 && (
              <div className="mt-3">
                <h6>Selected Images:</h6>
                <div className="row ">
                  {selectedImages.map((image, index) => (
                    <div className="col-1" key={index}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Selected"
                        className="img-thumbnail"
                        style={{ maxHeight: "100px", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                Add Carousel
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddCarousel;
