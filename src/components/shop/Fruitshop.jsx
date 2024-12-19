import React from "react";
import Fruititems from "./Fruititems";
import Featureproduct from "./Featureproduct";
import Bannerf from "../../img/banner-fruits.jpg";

function Fruitshop() {
  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <h1 className="mb-4">Fresh fruits shop</h1>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-xl-3">
                <div className="input-group w-100 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <div className="col-6"></div>
              <div className="col-xl-3">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                  <label for="fruits">Default Sorting:</label>
                  <select
                    id="fruits"
                    name="fruitlist"
                    className="border-0 form-select-sm bg-light me-3"
                    form="fruitform"
                  >
                    <option value="volvo">Nothing</option>
                    <option value="saab">Popularity</option>
                    <option value="opel">Organic</option>
                    <option value="audi">Fantastic</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h4>Categories</h4>
                      <ul className="list-unstyled fruite-categorie">
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2"></i>Apples
                            </a>
                            <span>(3)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2"></i>Oranges
                            </a>
                            <span>(5)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2"></i>Strawbery
                            </a>
                            <span>(2)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2"></i>Banana
                            </a>
                            <span>(8)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2"></i>Pumpkin
                            </a>
                            <span>(5)</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/*  */}
                  <Featureproduct />
                  <div className="col-lg-12">
                    <div className="position-relative">
                      <img
                        src={Bannerf}
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                      <div className="position-absolute freshfruitbanner">
                        <h3 className="text-secondary fw-bold">
                          Fresh <br /> Fruits <br /> Banner
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <Fruititems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruitshop;
