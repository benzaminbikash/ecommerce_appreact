import React from "react";
import Fruits5 from "../../img/fruite-item-5.jpg";

function Fruititems() {
  return (
    <div className="row g-4 justify-content-center">
      <div className="col-md-6 col-lg-6 col-xl-4">
        <div className="rounded position-relative fruite-item">
          <div className="fruite-img">
            <img src={Fruits5} className="img-fluid w-100 rounded-top" alt="" />
          </div>
          <div className="text-white bg-secondary px-3 py-1 rounded position-absolute freshfruit">
            Fruits
          </div>
          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>Grapes</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod te incididunt
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                cart
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="pagination d-flex justify-content-center mt-5">
          <a href="#" className="rounded">
            &laquo;
          </a>
          <a href="#" className="active rounded">
            1
          </a>
          <a href="#" className="rounded">
            2
          </a>
          <a href="#" className="rounded">
            3
          </a>
          <a href="#" className="rounded">
            4
          </a>
          <a href="#" className="rounded">
            5
          </a>
          <a href="#" className="rounded">
            6
          </a>
          <a href="#" className="rounded">
            &raquo;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fruititems;
