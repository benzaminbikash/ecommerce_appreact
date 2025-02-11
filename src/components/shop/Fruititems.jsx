import React from "react";
import { constant } from "../common/constant";
import { useNavigate } from "react-router";
import ProductNotFound from "../../img/productnotfound.json";
import Lottie from "react-lottie";

function Fruititems({ product }) {
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
    <div className="row g-4 ">
      {product?.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            navigate(`/product-detail/${item._id}`, {
              state: item,
            });
          }}
          className="col-md-6 col-lg-4  border-0 bg-transparent"
        >
          <div className="rounded position-relative fruite-item">
            <div className="product-img1 rounded-top">
              <img
                src={`${constant.IMAGEURL}/${item?.mainimage}`}
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute productinfo">
              {item?.category?.title}
            </div>
            <div className="p-2 border border-secondary border-top-0 rounded-bottom">
              <h4 className="text-start fw-light fs-5">{item?.title}</h4>

              <div className="d-flex gap-2">
                <p className=" text-dark fw-bold">
                  Rs {item?.priceafterdiscount}
                </p>
                <p className="priceline fw-bold">
                  <s>Rs {item?.price}</s>
                </p>
              </div>
              <div className="d-flex justify-content-center my-2">
                <a
                  href="#"
                  className="text-start btn border border-secondary rounded-pill px-3 text-primary"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </button>
      ))}

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
