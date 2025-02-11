import React, { useState } from "react";
import Fruititems from "./Fruititems";
import Bannerf from "../../img/banner-fruits.jpg";
import { useGetCategoryQuery } from "../../redux/Api/admin/AdminCategory";
import { useGetProductQuery } from "../../redux/Api/admin/AdminProduct";

function Fruitshop() {
  const [search, setSearch] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const { data: Category } = useGetCategoryQuery();
  const { data: Product } = useGetProductQuery();

  const filterData = Product?.data.filter((item) => {
    if (search == "") {
      if (selectCategory == "") {
        return item;
      } else {
        return item.category.title.includes(selectCategory);
      }
    } else {
      const product = item.title.toLowerCase().includes(search.toLowerCase());
      return product;
    }
  });

  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <h1 className="mb-4">Tech Shop</h1>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-xl-3">
                <div className="input-group w-100 mx-auto d-flex">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    className="form-control px-3 py-2"
                    placeholder="search here..."
                    aria-describedby="search-icon-1"
                    value={search}
                  />
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
                    <option value="volvo">A-Z</option>
                    <option value="saab">Z-A</option>
                    <option value="opel">Low-to-High</option>
                    <option value="audi">High-to-Low</option>
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
                        {Category?.data.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              setSearch("");
                              setSelectCategory(item.title);
                            }}
                          >
                            <div className="d-flex justify-content-between fruite-name">
                              <button
                                className={`bg-transparent border-0 ${
                                  selectCategory === item.title &&
                                  "text-secondary fw-bold fs-6"
                                }`}
                                href="#"
                              >
                                {item.title}
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/*  */}
                  {/* <Featureproduct /> */}
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
                <Fruititems product={filterData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruitshop;
