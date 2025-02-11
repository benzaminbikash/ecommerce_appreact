import React, { useState } from "react";
import fruit5 from "../../img/fruite-item-5.jpg";
import { useGetProductQuery } from "../../redux/Api/admin/AdminProduct";
import { constant } from "../common/constant";
import { useNavigate } from "react-router";
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
  return (
    <div className="container  py-5">
      <div className=" py-5">
        <div className=" text-center">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Our Products</h1>
            </div>
            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                <li
                  onClick={() => {
                    setSelect("All Products");
                  }}
                  className="nav-item"
                >
                  <button
                    className={`d-flex m-2 py-2  border-0 rounded-pill ${
                      select === "All Products" ? "bg-primary" : "bg-light"
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
                      }}
                      className="nav-item"
                    >
                      <button
                        className={`d-flex m-2 py-2 border-0  rounded-pill ${
                          select === item.title ? "bg-primary " : "bg-light"
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
                <div className="row g-4">
                  {filterData?.map((item, index) => (
                    <button
                      onClick={() => {
                        navigate(`/product-detail/${item._id}`, {
                          state: item,
                        });
                      }}
                      className="col-md-6 col-lg-4 col-xl-3 border-0 bg-transparent"
                    >
                      <div className="rounded position-relative fruite-item">
                        <div className="product-img rounded-top">
                          <img
                            src={`${constant.IMAGEURL}/${item?.mainimage}`}
                            className="img-fluid w-100 rounded-top  
                            "
                            alt=""
                          />
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute productinfo">
                          {item?.category?.title}
                        </div>
                        <div className="p-2 border border-secondary border-top-0 rounded-bottom">
                          <h4 className="text-start fw-light fs-5">
                            {item?.title}
                          </h4>

                          <div className="d-flex gap-2">
                            <p className=" text-dark fw-bold">
                              Rs {item?.priceafterdiscount}
                            </p>
                            <p className="priceline fw-bold">
                              <s>Rs {item?.price}</s>
                            </p>
                          </div>
                          <div className="d-flex justify-content-between my-2">
                            <a
                              href="#"
                              className="text-start btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              Add to cart
                            </a>
                            <a
                              href="#"
                              className="btn btn-secondary text-white text-start btn border border-secondary rounded-pill px-3 "
                            >
                              Buy Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruitsearch;
