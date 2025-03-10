import React from "react";
import { useGetCarouselQuery } from "../../redux/Api/admin/AdminCarousel";
import { constant } from "../common/constant";

function Hero() {
  const { data } = useGetCarouselQuery();
  const hero = data?.data[0];

  return (
    <div className="container-fluid py-0  py-md-2  py-lg-5 mb-5 hero-header">
      <div className="container py-0 pt-lg-4">
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-6">
            <h5 className="mb-1 text-primary">{hero?.title}</h5>
            <p className="mb-0 mb-lg-5  stock ">{hero?.subtitle}</p>
          </div>
          <div className="col-md-12 col-lg-6">
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
                      className="img-fluid w-100  h-100 bg-secondary rounded"
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
