import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import { useUserInfoQuery } from "../redux/Api/AuthApi";
import Showmessage from "../components/common/Showmessage";
import {
  useAddCartMutation,
  useRemoveCartMutation,
} from "../redux/Api/CartApi";
import CarsoualProduct from "../components/products/CarsoualProduct";
// import Scroller from "../components/common/Scroller";
import Seo from "../components/common/Seo";

function ProductDetail() {
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.accessToken);
  const { data: userinfo, refetch } = useUserInfoQuery();
  const [REMOVE] = useRemoveCartMutation();

  const { state } = useLocation();

  const [attribute, setAttribute] = useState([]);
  const [quanity, setQuanity] = useState(1);
  const [CART] = useAddCartMutation();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const checkData = userinfo?.data?.cart.find(
    (item) => item?.product?.title == state?.title
  );

  const AddToCartHandler = async () => {
    if (!token) {
      return setError("Please Login First!");
    }
    if (attribute.length === 0) {
      return setError("Please select product attributes!");
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
    if (api.error) {
      setError(api.error?.data?.message);
    } else {
      refetch();
      setSuccess(api?.data?.message);
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

  const removeCart = async () => {
    const api = await REMOVE({ product: state?._id });
    if (api.error) {
      setError(api.error?.data?.message);
    } else {
      refetch();
      setSuccess(api?.data?.message);
    }
  };

  const BuyNow = async () => {
    if (!token) {
      return setError("Please Login First!");
    }
    if (attribute.length === 0) {
      return setError("Please select product attributes!");
    }
    const selectedAttributes = state?.attributes.map((attr) => ({
      title: attr.title._id,
      values: attribute.filter((val) => attr.values.includes(val)),
    }));
    const product = {
      product: state,
      quantity: quanity,
      attributes: selectedAttributes,
    };
    navigate("/address", {
      state: product,
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  }, [success, error]);

  // useEffect(() => {
  //   Scroller();
  // }, []);

  return (
    <>
      <Seo title={state?.title} description={state?.description} />
      <Header title={"Product Detail"} />
      {/* Product INFO */}
      <div className="container py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <div className="col-12 mb-2 ">
                  <CarsoualProduct state={state} />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              {error && (
                <p className="mt-2">
                  <Showmessage status="fail" message={error} />
                </p>
              )}
              {success && (
                <p className="mt-2">
                  <Showmessage status="success" message={success} />
                </p>
              )}
              <h5 className="mt-2">{state?.title}</h5>
              <p className="categoryproducttitle stock">
                {state?.category.title}
              </p>
              <p className="price">
                Rs {state?.priceafterdiscount}.00
                <span className="old-price">Rs {state?.price}.00</span>
                {"  "}
              </p>
              <div className="d-flex align-items-center gap-2 ">
                {state?.stock == 0 ? (
                  <p>Out of stock</p>
                ) : (
                  <p className="subtitlehero stock">
                    {" "}
                    Stock:{" "}
                    <span className="stockitems stock">
                      {state?.stock}
                    </span>{" "}
                  </p>
                )}
              </div>
              <div className="categorytitle"></div>
              {state?.attributes.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-2  "
                  >
                    <p className="stock">{item.title.title}:</p>
                    {item.values.map((value, valueIndex) => (
                      <button
                        onClick={() => getData(value)}
                        key={valueIndex}
                        className={`m-1 rounded border-0 stock py-1 ${
                          attribute?.includes(value)
                            ? "bg-danger px-4 text-white my-2"
                            : "px-4 my-2"
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                );
              })}

              <div className="d-flex align-items-center gap-2 stock  mt-2 mb-3">
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
                <p className=" fw-bold stock text-primary">{quanity}</p>
                <button
                  onClick={() => {
                    setQuanity(quanity + 1);
                  }}
                  className="carticon  rounded-circle"
                >
                  +
                </button>
              </div>

              <div className="d-flex  ">
                {checkData ? (
                  <button
                    onClick={() => removeCart()}
                    className="btn text-center btn-yellow  w-50  w-25  me-2 text-white subtitlehero"
                  >
                    REMOVE CART
                  </button>
                ) : (
                  <button
                    onClick={() => AddToCartHandler()}
                    className="btn text-center ratingbackground rounded  w-50  w-25  me-2 text-white stock"
                  >
                    ADD TO CART
                  </button>
                )}
                <button
                  onClick={() => BuyNow()}
                  className="btn text-center w-25 w-50   border-danger rounded bg-white text-primary   stock"
                >
                  BUY NOW
                </button>
              </div>

              <hr />
            </div>

            <div
              className="mt-2 stock description"
              dangerouslySetInnerHTML={{ __html: state?.description }}
            />
          </div>
          <div className="d-flex mt-5 gap-2 video  rounded">
            {state?.video && (
              <iframe
                width="100%"
                src={state?.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            {/* {state?.images.map((item, index) => {
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
                  })} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
