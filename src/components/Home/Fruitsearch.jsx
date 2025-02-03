import React from "react";
import fruit5 from "../../img/fruite-item-5.jpg";
import { useGetProductQuery } from "../../redux/Api/admin/AdminProduct";
import { constant } from "../common/constant";
import { useNavigate } from "react-router";

function Fruitsearch() {
  const { data: AllProduct } = useGetProductQuery();
  const products = AllProduct?.data;
  const navigate = useNavigate();
  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <div className="tab-class text-center">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Our Products</h1>
            </div>
            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                <li className="nav-item">
                  <a className="d-flex m-2 py-2 bg-light rounded-pill active">
                    <span className="text-dark filterfruit">All Products</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex py-2 m-2 bg-light rounded-pill">
                    <span className="text-dark filterfruit">Vegetables</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex m-2 py-2 bg-light rounded-pill">
                    <span className="text-dark filterfruit">Fruits</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex m-2 py-2 bg-light rounded-pill">
                    <span className="text-dark filterfruit">Bread</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex m-2 py-2 bg-light rounded-pill">
                    <span className="text-dark">Meat</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  {products?.map((item, index) => (
                    <button
                      onClick={() => {
                        navigate(
                          `/product-detail/${item.title.toLowerCase()}`,
                          {
                            state: item,
                          }
                        );
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
                              <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                              Add to cart
                            </a>
                            <a
                              href="#"
                              className="btn btn-secondary text-white text-start btn border border-secondary rounded-pill px-3 "
                            >
                              <i className="fa fa-shopping-bag me-2 "></i> Buy
                              Now
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
