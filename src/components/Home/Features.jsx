import React from "react";
import Feature1 from "../../img/featur-1.jpg";
import Feature2 from "../../img/featur-2.jpg";
import Feature3 from "../../img/featur-3.jpg";

function Features() {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <a href="#">
              <div className="service-item bg-secondary rounded border border-secondary">
                <img
                  src={Feature1}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div className="px-4 rounded-bottom">
                  <div className="service-content bg-primary text-center p-4 rounded">
                    <h5 className="text-white">Fresh Apples</h5>
                    <h3 className="mb-0">20% OFF</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a href="#">
              <div className="service-item bg-dark rounded border border-dark">
                <img
                  src={Feature2}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div className="px-4 rounded-bottom">
                  <div className="service-content bg-light text-center p-4 rounded">
                    <h5 className="text-primary">Tasty Fruits</h5>
                    <h3 className="mb-0">Free delivery</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a href="#">
              <div className="service-item bg-primary rounded border border-primary">
                <img
                  src={Feature3}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div className="px-4 rounded-bottom">
                  <div className="service-content bg-secondary text-center p-4 rounded">
                    <h5 className="text-white">Exotic Vegitable</h5>
                    <h3 className="mb-0">Discount 30$</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
