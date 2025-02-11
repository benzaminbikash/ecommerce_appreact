import React, { useEffect, useState } from "react";

import SearchModal from "../components/SearchModal";
import Header from "../components/Header";
import { useLocation } from "react-router";
import { constant } from "../components/common/constant";
import { useSelector } from "react-redux";
import Showmessage from "../components/common/Showmessage";
import { useAddCartMutation } from "../redux/Api/CartApi";

function ProductDetail() {
  const token = useSelector((state) => state.auth.accessToken);
  const { state } = useLocation();
  const [select, setSelect] = useState(0);
  const [attribute, setAttribute] = useState([]);
  const [quanity, setQuanity] = useState(1);
  const [message, setMessage] = useState("");
  const [CART] = useAddCartMutation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const AddToCartHandler = async () => {
    if (!token) {
      return setMessage("Please Login First!");
    }
    if (attribute.length === 0) {
      return setMessage("Please select product attributes!");
    }
    const selectedAttributes = state?.attributes.map((attr) => ({
      title: attr.title._id,
      values: attribute.filter((val) => attr.values.includes(val)),
    }));

    const api = await CART({
      product: state._id,
      quantity: quanity,
      attributes: selectedAttributes,
    });
    console.log(api);
    if (api.error) {
      setMessage(api.error?.data?.message);
    } else {
      setMessage(api?.data?.message);
    }
  };

  const getData = (value) => {
    if (attribute.includes(value)) {
      const data = attribute.filter((item) => item != value);
      setAttribute(data);
    } else {
      setAttribute([...attribute, value]);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);
  return (
    <>
      <SearchModal />
      <Header title={"Product Detail"} />
      {/* Product INFO */}
      <div className="container py-5">
        {message && <Showmessage status={"fail"} message={message} />}
        <div className="container ">
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-12 mb-2">
                  <img
                    src={`${constant?.IMAGEURL}/${state?.images[select]}`}
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
              <hr />

              {state?.attributes.map((item, index) => {
                return (
                  <div className="d-flex align-items-center gap-2  ">
                    <p>{item.title.title}:</p>
                    {item.values.map((value, valueIndex) => (
                      <button
                        onClick={() => getData(value)}
                        key={valueIndex}
                        className={`m-1 rounded border-0 ${
                          attribute?.includes(value)
                            ? "bg-primary px-2 border-1 text-white my-2"
                            : "px-2 my-2"
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                );
              })}

              <div className="d-flex align-items-center gap-3  mt-2 mb-3">
                Quantity:
                <button
                  disabled={quanity == 1 ? true : false}
                  onClick={() => {
                    if (quanity > 1) {
                      setQuanity(quanity - 1);
                    } else {
                    }
                  }}
                  className="carticon"
                >
                  -
                </button>
                <p className="fs-5 fw-bold text-primary">{quanity}</p>
                <button
                  onClick={() => {
                    setQuanity(quanity + 1);
                  }}
                  className="carticon "
                >
                  +
                </button>
              </div>
              <div className="d-flex  my-1">
                <button
                  onClick={() => AddToCartHandler()}
                  className="btn btn-yellow w-25 me-2"
                >
                  ADD TO CART
                </button>
                <button className="btn btn-dark w-25">BUY NOW</button>
              </div>

              <hr />
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
