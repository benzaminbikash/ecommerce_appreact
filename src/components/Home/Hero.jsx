import React from "react";
import { useGetCarouselQuery } from "../../redux/Api/admin/AdminCarousel";
import { constant } from "../common/constant";

function Hero() {
  const { data } = useGetCarouselQuery();
  const hero = data?.data[0];

  return (
    <div className="container-fluid py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-7">
            <h3 className="mb-3 text-secondary">{hero?.title}</h3>
            <p className="mb-5 ">{hero?.subtitle}</p>
            <div className="position-relative mx-auto">
              <input
                className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                type="number"
                placeholder="Search"
              />
              <button
                type="submit"
                className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100 submitnow"
              >
                Submit Now
              </button>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div
              id="carouselId"
              className="carousel slide position-relative"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner" role="listbox">
                {hero?.carsoualimage?.map((image, index) => (
                  <div
                    key={index}
                    className={` carousel-item ${
                      index === 0 ? "active" : ""
                    } rounded`}
                  >
                    <img
                      src={`${constant.IMAGEURL}/${image}`}
                      className="img-fluid w-100 h-100 bg-secondary rounded"
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
