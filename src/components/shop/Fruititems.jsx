import React from "react";
import { constant } from "../common/constant";
import { useNavigate } from "react-router-dom";
import ProductNotFound from "../../img/productnotfound.json";
import Lottie from "react-lottie";
import Scroller from "../common/Scroller";

function Fruititems({
  product,
  currentPage,
  totalPages,
  nextPage,
  prePage,
  setCurrentPage,
}) {
  const navigate = useNavigate();
  return product?.length == 0 ? (
    <Lottie
      options={{
        animationData: ProductNotFound,
      }}
      width={500}
      height={400}
      style={{
        objectFit: "cover",
      }}
    />
  ) : (
    <div className="row g-4">
      {product?.map((item, index) => (
        <div
          onClick={() => {
            navigate(`/product-detail/${item._id}`, {
              state: item,
            });
          }}
          key={index}
          className="col-6 col-sm-4 col-md-4 col-lg-4 border-0 bg-transparent"
        >
          <div className="rounded shadow-lg position-relative fruite-item">
            <div className="product-img1 rounded-top">
              <img
                src={`${constant.IMAGEURL}/${item?.mainimage}`}
                className="img-fluid w-100 rounded-top"
                alt="randomImage"
              />
            </div>

            <div className="p-2 shadow-sm shadow-red border-top-0 rounded-bottom">
              <h6 className="text-start fw-bold">{item?.title}</h6>

              <div className="d-flex gap-2">
                <p className=" text-dark priceline fw-bold">
                  Rs.{item?.priceafterdiscount}
                </p>
                <p className="priceline fw-bold">
                  <s>Rs.{item?.price}</s>
                </p>
              </div>

              <div className="my-2 d-flex">
                <button className="buynow">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="col-12">
        <div className="pagination d-flex gap-2 justify-content-center mt-5">
          {currentPage != 1 && (
            <button
              onClick={() => prePage()}
              className="rounded  bg-primary btn text-white  px-3"
            >
              &laquo;
            </button>
          )}
          {[...Array(totalPages || 1)]?.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index + 1);
                Scroller();
              }}
              className={`rounded btn   px-3 ${
                currentPage == index + 1
                  ? "active ratingbackground text-white"
                  : " bg-light"
              } `}
            >
              {index + 1}
            </button>
          ))}

          {currentPage != totalPages && (
            <button
              onClick={() => nextPage()}
              className="rounded  bg-primary btn text-white  px-3"
            >
              &raquo;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Fruititems;
