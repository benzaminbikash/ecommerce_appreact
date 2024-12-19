import React from "react";
import BestProduct1 from "../../img/best-product-1.jpg";
import BestProduct4 from "../../img/fruite-item-4.jpg";

function BestSell() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5 bestselling">
          <h1 className="display-4">Bestseller Products</h1>
          <p>
            Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-xl-4">
            <div className="p-4 rounded bg-light">
              <div className="row align-items-center">
                <div className="col-6">
                  <img
                    src={BestProduct1}
                    className="img-fluid rounded-circle w-100"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-4">
            <div className="p-4 rounded bg-light">
              <div className="row align-items-center">
                <div className="col-6">
                  <img
                    src={BestProduct1}
                    className="img-fluid rounded-circle w-100"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4">
            <div className="p-4 rounded bg-light">
              <div className="row align-items-center">
                <div className="col-6">
                  <img
                    src={BestProduct1}
                    className="img-fluid rounded-circle w-100"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4">
            <div className="p-4 rounded bg-light">
              <div className="row align-items-center">
                <div className="col-6">
                  <img
                    src={BestProduct1}
                    className="img-fluid rounded-circle w-100"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSell;
