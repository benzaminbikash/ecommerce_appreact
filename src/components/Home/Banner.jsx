import React from "react";
import { useGetBannerQuery } from "../../redux/Api/admin/AdminBanner";
import { constant } from "../common/constant";

function Banner() {
  const { data } = useGetBannerQuery();
  const banner = data?.data[0];

  return (
    <div className="container-fluid banner bg-danger mb-5 mt-5">
      <div className="container py-3 mt-2">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="py-0 py-lg-4">
              <h6 className=" text-white">{banner?.title}</h6>
              <p className="stock text-white mb-3  fw-bold">
                {banner?.subtitle}
              </p>
              <p className="mb-3 stock text-white">{banner?.description}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src={`${constant?.IMAGEURL}/${banner?.image}`}
                className="img-fluid bannerimage1 rounded"
                alt=""
              />
              <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute bannerinfo">
                <div className="d-flex flex-column">
                  <span className="mb-0 stock fw-bold text-primary">Price</span>
                  <span className="stock text-primary mb-0">
                    Rs {banner?.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
