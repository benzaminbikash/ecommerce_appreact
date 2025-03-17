import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import { constant } from "../common/constant";
import { useGetProductQuery } from "../../redux/Api/admin/AdminProduct";

function BestSell() {
  const navigate = useNavigate();
  const { data } = useGetProductQuery();
  const products = data?.data?.filter((i) => i?.bestSeller == true);

  // paginated
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container-fluid ">
      <div className="container ">
        <div className="text-center mx-auto mb-5 bestselling">
          <h5>Bestseller Products</h5>
          <p className="stock">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolores, iure.
          </p>
        </div>
        <div className="row g-4 d-lg-none mb-4">
          {displayedProducts?.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/product-detail/${item._id}`, {
                  state: item,
                });
              }}
              className="col-4 col-md-4 col-lg-4 col-xl-3 border-0 bg-transparent"
            >
              <div className="rounded shadow-lg position-relative fruite-item">
                <div className="product-img rounded-top">
                  <img
                    src={`${constant.IMAGEURL}/${item?.mainimage}`}
                    className=" w-100 responsiveimageforproduct rounded-top  
                                      "
                    alt="randomImage"
                  />
                </div>

                <div className="p-2 shadow-sm shadow-red border-top-0 rounded-bottom">
                  <h6 className="text-start responsivetitle fw-dark ">
                    {item?.title}
                  </h6>

                  <div className="d-flex gap-2 align-items-center">
                    <p className=" responsivetitle text-dark priceline fw-bold">
                      Rs.{item?.priceafterdiscount}
                    </p>
                    <p className="priceline fw-bold">
                      <s>Rs.{item?.price}</s>
                    </p>
                  </div>

                  <div className="d-flex my-1">
                    {item?.rating && (
                      <Rating
                        style={{ maxWidth: 40 }}
                        value={item?.rating}
                        readOnly={true}
                      />
                    )}
                  </div>

                  <div className="my-2 d-flex">
                    <button className="buynow rounded">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* for laptop */}
        <div className="row g-4 ">
          {displayedProducts?.map((item, index) => (
            <div key={index} className="d-lg-block d-none  col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-white shadow">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={`${constant?.IMAGEURL}/${item?.mainimage}`}
                      className="img-fluid bestsellerimagemodify"
                      alt="randomImage"
                    />
                  </div>
                  <div className="col-6">
                    <h6 className=" text-primary fw-bold">{item?.title}</h6>

                    <div className="d-flex gap-2 ">
                      <p className=" responsivetitle text-dark priceline fw-bold">
                        Rs.{item?.priceafterdiscount}
                      </p>
                      <p className="priceline fw-bold">
                        <s>Rs.{item?.price}</s>
                      </p>
                    </div>

                    <div className="d-flex my-1">
                      {item?.rating ? (
                        <Rating
                          style={{ maxWidth: 90 }}
                          value={item?.rating}
                          readOnly={true}
                        />
                      ) : (
                        <p>No rating</p>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        navigate(`product-detail/${item?._id}`, {
                          state: item,
                        });
                      }}
                      className="mt-1 btn ratingbackground px-3 py-1 rounded  text-white"
                    >
                      <i className="fa fa-shopping-bag me-2 stock text-white fs-6"></i>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {displayedProducts?.length != 0 && (
            <div className="d-flex justify-content-center mt-3 gap-2">
              {currentPage != 1 && (
                <button
                  className="btn btn-outline-primary"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              <span className="align-self-center">
                {currentPage} / {totalPages}
              </span>
              {currentPage != totalPages && (
                <button
                  className="btn btn-outline-primary"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BestSell;
