import React, { useRef, useState } from "react";
import { useGetProductQuery } from "../../redux/Api/admin/AdminProduct";
import { constant } from "../common/constant";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetCategoryQuery } from "../../redux/Api/admin/AdminCategory";
import userNotfound from "../../img/usernotfound.json";
import Lottie from "react-lottie";
import Skeleton from "react-loading-skeleton";

function Fruitsearch() {
  const { data: AllProduct } = useGetProductQuery();
  const { data: Category } = useGetCategoryQuery();
  const products = AllProduct?.data;

  const [select, setSelect] = useState("All Products");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const filterData = products?.filter((item) => {
    if (select == "All Products") {
      return item;
    } else {
      const data = item.category.title.includes(select);
      return data;
    }
  });

  // Paginated logic
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filterData?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filterData?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setSearchParams({ page: nextPage });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setSearchParams({ page: prevPage });
    }
  };

  const elementRef = useRef();

  const sliderRight = (element) => {
    element.scrollLeft += 800;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 800;
  };

  return (
    <div className="container">
      <div className="">
        <div className="text-center">
          <div className="text-start">
            <h5 className="text-primary"></h5>
          </div>
          <div className="d-flex gap-2">
            <i
              onClick={() => sliderLeft(elementRef.current)}
              className="fas d-none d-lg-block mt-2 nextproductbox fa-chevron-circle-left"
            ></i>
            <ul
              ref={elementRef}
              className="d-flex list-unstyled scroll-smooth overflow-scroll"
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                maxWidth: "100%",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              <li
                onClick={() => {
                  setSelect("All Products");
                  setSearchParams({ page: 1 });
                }}
                className="nav-item"
              >
                <button
                  className={`d-flex m-2 py-1 border-0 rounded ${
                    select === "All Products" ? "ratingbackground" : "bg-light"
                  }`}
                >
                  <span
                    className={`filterfruit ${
                      select === "All Products" ? "text-white" : "text-dark"
                    }`}
                  >
                    All Products
                  </span>
                </button>
              </li>
              {Category?.data.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setSelect(item.title);
                      setSearchParams({ page: 1 });
                    }}
                    className="nav-item"
                  >
                    <button
                      className={`d-flex m-2 py-1 border-0 rounded ${
                        select === item.title ? "ratingbackground" : "bg-light"
                      }`}
                    >
                      <span
                        className={`filterfruit ${
                          select === item.title ? "text-white" : "text-dark"
                        }`}
                      >
                        {item.title || <Skeleton width={500} />}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <i
              onClick={() => sliderRight(elementRef.current)}
              className="d-none d-lg-block nextproductbox mt-2 fas fa-chevron-circle-right"
            ></i>
          </div>

          <div className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-3">
                  {displayedProducts?.length == 0 ? (
                    <>
                      <Lottie
                        style={{ width: 250 }}
                        options={{
                          animationData: userNotfound,
                        }}
                      />
                      <p className="stock">{select} will be added soon.</p>
                    </>
                  ) : (
                    <>
                      {displayedProducts?.map((item, index) => (
                        <div
                          onClick={() => {
                            navigate(`product-detail/${item._id}`, {
                              state: item,
                            });
                          }}
                          key={index}
                          className="col-4 col-md-4 col-lg-4 col-xl-3 border-0 bg-transparent"
                        >
                          <div className="rounded shadow-lg position-relative fruite-item">
                            <div className="product-img rounded-top">
                              <img
                                src={`${constant.IMAGEURL}/${item?.mainimage}`}
                                className="w-100 responsiveimageforproduct rounded-top"
                                alt="randomImage"
                              />
                            </div>

                            <div className="p-2 shadow-sm shadow-red border-top-0 rounded-bottom">
                              <h6 className="text-start responsivetitle fw-dark">
                                {item?.title}
                              </h6>

                              <div className="d-flex gap-2 align-items-center">
                                <p className="responsivetitle text-dark priceline fw-bold">
                                  Rs.{item?.priceafterdiscount}
                                </p>
                                <p className="priceline fw-bold">
                                  <s>Rs.{item?.price}</s>
                                </p>
                              </div>

                              <div className="my-2 d-flex">
                                <button className="buynow rounded">
                                  Buy Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  );
}

export default Fruitsearch;
