import React from "react";
import fruit5 from "../../img/fruite-item-5.jpg";

function Fruitsearch() {
  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <div className="tab-class text-center">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Our Organic Products</h1>
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
                    <span
                      className="text-dark"
                      // style="width: 130px;"
                    >
                      Meat
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="rounded position-relative fruite-item">
                      <div className="fruite-img">
                        <img
                          src={fruit5}
                          className="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div className="text-white bg-secondary px-3 py-1 rounded position-absolute productinfo">
                        Fruits
                      </div>
                      <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Grapes</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod te incididunt
                        </p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold mb-0">
                            $4.99 / kg
                          </p>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
