import React, { useState } from "react";
import fruit5 from "../../img/fruite-item-5.jpg";
import { useGetProductQuery } from "../../redux/Api/admin/AdminProduct";
import { constant } from "../common/constant";
import { Link, useNavigate } from "react-router";
import { useGetCategoryQuery } from "../../redux/Api/admin/AdminCategory";

function Fruitsearch() {
  const { data: AllProduct } = useGetProductQuery();
  const { data: Category } = useGetCategoryQuery();
  const products = AllProduct?.data;

  const [select, setSelect] = useState("All Products");
  const navigate = useNavigate();
  const filterData = products?.filter((item, index) => {
    if (select == "All Products") {
      return item;
    } else {
      const data = item.category.title.includes(select);
      return data;
    }
  });

  // paginated
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filterData?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filterData?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container  ">
      <div className=" py-5">
        <div className=" text-center">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h3>Our Products</h3>
            </div>
            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                <li
                  onClick={() => {
                    setSelect("All Products");
                    setCurrentPage(1);
                  }}
                  className="nav-item"
                >
                  <button
                    className={`d-flex m-2 py-1  border-0 rounded-pill ${
                      select === "All Products" ? "bg-secondary" : "bg-light"
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
                        setCurrentPage(1);
                      }}
                      className="nav-item"
                    >
                      <button
                        className={`d-flex m-2 py-1 border-0  rounded-pill ${
                          select === item.title ? "bg-secondary " : "bg-light"
                        }`}
                      >
                        <span
                          className={`filterfruit ${
                            select === item.title ? "text-white" : "text-dark"
                          }`}
                        >
                          {item.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="tab-pane fade show p-0 ">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-3">
                  {displayedProducts?.map((item, index) => (
                    <div className="col-md-6 col-lg-4 col-xl-3 border-0 bg-transparent">
                      <div className="rounded shadow-lg position-relative fruite-item">
                        <div className="product-img rounded-top">
                          <img
                            src={`${constant.IMAGEURL}/${item?.mainimage}`}
                            className="img-fluid w-100 rounded-top  
                            "
                            alt="randomImage"
                          />
                        </div>

                        <div className="p-2 shadow-sm shadow-red border-top-0 rounded-bottom">
                          <h6 className="text-start fw-light ">
                            {item?.title}
                          </h6>

                          <div className="d-flex gap-2">
                            <p className=" text-dark priceline fw-bold">
                              Rs.{item?.priceafterdiscount}
                            </p>
                            <p className="priceline fw-bold">
                              <s>Rs.{item?.price}</s>
                            </p>
                          </div>

                          <div className="my-2 d-flex">
                            <button
                              onClick={() => {
                                navigate(`/product-detail/${item._id}`, {
                                  state: item,
                                });
                              }}
                              className="buynow"
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3 gap-2">
        {currentPage != 1 && (
          <button className="btn btn-outline-primary" onClick={handlePrevious}>
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
    </div>
  );
}

export default Fruitsearch;
