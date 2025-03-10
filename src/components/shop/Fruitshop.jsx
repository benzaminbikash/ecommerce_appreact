import React, { useState } from "react";
import Fruititems from "./Fruititems";
import Bannerf from "../../img/shopimage.jpg";
import { useGetCategoryQuery } from "../../redux/Api/admin/AdminCategory";
import { useGetProductQuery } from "../../redux/Api/admin/AdminProduct";

function Fruitshop() {
  const [search, setSearch] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const { data: Category } = useGetCategoryQuery();
  const { data: Product } = useGetProductQuery();

  let filterData = Product?.data.filter((item) => {
    const matchesSearch =
      search === "" || item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectCategory === "" || item.category.title.includes(selectCategory);

    return matchesSearch && matchesCategory;
  });

  if (sortOption === "A-Z") {
    filterData = filterData.sort((a, b) => a?.title.localeCompare(b?.title));
  } else if (sortOption === "Z-A") {
    filterData = filterData.sort((a, b) => b?.title.localeCompare(a?.title));
  } else if (sortOption === "Low-to-High") {
    filterData = filterData?.sort(
      (a, b) => a?.priceafterdiscount - b?.priceafterdiscount
    );
  } else if (sortOption === "High-to-Low") {
    filterData = filterData?.sort(
      (a, b) => b?.priceafterdiscount - a?.priceafterdiscount
    );
  }

  // paginated
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
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
    <div className="container-fluid fruite ">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="d-lg-none d-flex align-items-center gap-2">
                <div className="input-group   mx-auto d-flex">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    className="form-control px-3 py-2"
                    placeholder="Search here..."
                    aria-describedby="search-icon-1"
                    value={search}
                  />
                </div>
                <div className="col-xl-3 d-lg-none">
                  <div className="border mt-4 ps-3 py-2 rounded d-flex justify-content-between align-items-center mb-4">
                    <label className="subtitlehero">Sort:</label>
                    <select
                      id="sort"
                      name="sortlist"
                      className="border-0 form-select-sm me-3 border-"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="">Default</option>
                      <option value="A-Z">A-Z</option>
                      <option value="Z-A">Z-A</option>
                      <option value="Low-to-High">Low-to-High</option>
                      <option value="High-to-Low">High-to-Low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-none d-lg-inline col-xl-3">
                <div className="input-group  w-100 mx-auto d-flex">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    className="form-control px-3 py-2"
                    placeholder="Search here..."
                    aria-describedby="search-icon-1"
                    value={search}
                  />
                </div>
              </div>

              <div className="col-6"></div>

              <div className="col-xl-3 d-none d-lg-inline">
                <div className="border  ps-3 py-1 rounded d-flex justify-content-between align-items-center mb-4">
                  <label className="stock">Sort:</label>
                  <select
                    id="sort"
                    name="sortlist"
                    className="border-0 form-select-sm me-3 border-"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="">Default</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="Low-to-High">Low-to-High</option>
                    <option value="High-to-Low">High-to-Low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-3">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="mb-0 mb-lg-3">
                      <h5 className="text-primary  border-bottom-2">
                        Category
                      </h5>
                      <hr />
                      <div className="d-flex gap-2">
                        <ul
                          className=" d-lg-none d-flex list-unstyled scroll-smooth overflow-scroll"
                          style={{
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            maxWidth: "100%",
                            msOverflowStyle: "none",
                            scrollbarWidth: "none",
                          }}
                        >
                          {Category?.data?.map((item, index) => {
                            return (
                              <li
                                key={index}
                                onClick={() => {
                                  setSelectCategory(item.title);
                                  setCurrentPage(1);
                                }}
                                className="nav-item"
                              >
                                <button
                                  className={`d-flex  py-1 border-0 rounded-pill 
                                ${
                                  selectCategory === item.title
                                    ? "ratingbackground"
                                    : "bg-light"
                                }
                              `}
                                >
                                  <span
                                    className={`filterfruit ${
                                      selectCategory === item.title
                                        ? "text-white"
                                        : "text-dark"
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

                      {/* for laptop view */}
                      <ul className="d-none d-lg-block list-unstyled fruite-categorie">
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
                                className={`bg-transparent border-0  ${
                                  selectCategory === item.title &&
                                  "text-black fw-bold fs-6 text-danger"
                                }`}
                              >
                                {item.title}
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="d-none d-lg-block col-lg-12">
                    <div className="position-relative">
                      <img
                        src={Bannerf}
                        className=" img-fluid w-100 bannerimage rounded"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <Fruititems
                  product={displayedProducts}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  nextPage={handleNext}
                  prePage={handlePrevious}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruitshop;
