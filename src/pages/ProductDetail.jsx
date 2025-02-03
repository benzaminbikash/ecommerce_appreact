import React, { useEffect, useState } from "react";

import SearchModal from "../components/SearchModal";
import Header from "../components/Header";
import { useLocation } from "react-router";
import { constant } from "../components/common/constant";

function ProductDetail() {
  const { state } = useLocation();
  const [select, setSelect] = useState(0);
  const [attribute, setAttribute] = useState([]);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "instant",
  //   });
  // }, []);

  const getData = (value) => {
    if (attribute.includes(value)) {
      const data = attribute.filter((item) => item != value);
      setAttribute(data);
    } else {
      setAttribute([...attribute, value]);
    }
  };
  console.log(attribute);
  return (
    <>
      <SearchModal />
      <Header title={"Product Detail"} />

      {/* Product INFO */}
      <div className="container py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-12 mb-2">
                  <img
                    src={`${constant?.IMAGEURL}/${state?.images[select]}`}
                    // src={`${constant.IMAGEURL}/${state?.mainimage}`}
                    className="img-fluid rounded h-auto"
                    alt="Main Product"
                  />
                </div>
                <div className="d-flex gap-2  rounded">
                  {state?.images.map((item, index) => {
                    return (
                      <img
                        onMouseEnter={() => {
                          setSelect(index);
                        }}
                        key={index}
                        src={`${constant?.IMAGEURL}/${item}`}
                        className="cardImage2 mb-1 rounded"
                        style={{
                          border: select == index ? "1px solid red " : "",
                        }}
                        alt="randomImage"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <p className="product-title">{state?.title}</p>
              <p className="text-muted">{state?.category.title}</p>
              <p className="price">
                Rs {state?.priceafterdiscount}.00{" "}
                <span className="old-price">Rs {state?.price}.00</span>{" "}
              </p>

              <div className="d-flex align-items-center gap-2 ">
                Stock:
                <h6>{state?.stock}</h6>
              </div>

              {state.attributes.map((item, index) => {
                return (
                  <div className="d-flex align-items-center gap-2  ">
                    <p>{item.title.title}:</p>
                    {item.values.map((value, valueIndex) => (
                      <button
                        onClick={() => getData(value)}
                        key={valueIndex}
                        className={`m-1 rounded border-0 ${
                          attribute.includes(value)
                            ? "bg-primary border-1 text-white"
                            : null
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                );
              })}

              <div className="d-flex align-items-center gap-3  mt-1">
                Quantity:
                <button className="carticon">-</button>
                <h5>1</h5>
                <button className="carticon ">+</button>
              </div>
              <div className="d-flex  my-1">
                <button className="btn btn-yellow w-25 me-2">
                  ADD TO CART
                </button>
                <button className="btn btn-dark w-25">BUY NOW</button>
              </div>

              <hr />

              <p className="delivery-info">
                <strong>Eligible for Delivery?</strong>
              </p>
              <ul className="list-unstyled">
                <li>🚚 Get it by Thu, 20 Aug</li>
                <li>🔄 Easy returns available</li>
                <li>💰 Cash on delivery available</li>
              </ul>
            </div>

            <div
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: state?.description }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
