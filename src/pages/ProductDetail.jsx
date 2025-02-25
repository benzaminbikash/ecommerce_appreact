import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import { constant } from "../components/common/constant";
import {
  useAddCartMutation,
  useRemoveCartMutation,
} from "../redux/Api/CartApi";
import Showmessage from "../components/common/Showmessage";
import { useUserInfoQuery } from "../redux/Api/AuthApi";

function ProductDetail() {
  const token = useSelector((state) => state?.auth?.accessToken);
  const { data: userinfo, refetch } = useUserInfoQuery();
  const [REMOVE] = useRemoveCartMutation();

  const { state } = useLocation();
  const [select, setSelect] = useState(0);
  const [attribute, setAttribute] = useState([]);
  const [quanity, setQuanity] = useState(1);
  const [CART] = useAddCartMutation();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const checkData = userinfo?.data?.cart.find(
    (item) => item?.product?.title == state?.title
  );
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

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
  useEffect(() => {
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  }, [success, error]);

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

  return (
    <>
      <SearchModal />
      <Header title={"Product Detail"} />
      {/* Product INFO */}
      <div className="container py-5">
        {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />}
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
                Rs {state?.priceafterdiscount}.00
                <span className="old-price">Rs {state?.price}.00</span>
                {"  "}
              </p>

              <div className="d-flex align-items-center gap-2 ">
                <p className="subtitlehero stock">
                  {" "}
                  Stock:{" "}
                  <span className="stockitems stock">{state?.stock}</span>{" "}
                </p>
              </div>
              <div className="categorytitle"></div>
              {state?.attributes.map((item, index) => {
                return (
                  <div className="d-flex align-items-center gap-2  ">
                    <p className="stock">{item.title.title}:</p>
                    {item.values.map((value, valueIndex) => (
                      <button
                        onClick={() => getData(value)}
                        key={valueIndex}
                        className={`m-1 rounded border-0 stock ${
                          attribute?.includes(value)
                            ? "bg-secondary px-2 border-1  text-white my-2"
                            : "px-2 my-2"
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
                  className="carticon "
                >
                  +
                </button>
              </div>
              <div className="d-flex  ">
                {checkData ? (
                  <button
                    onClick={() => removeCart()}
                    className="btn text-center btn-yellow w-25 me-2 text-black subtitlehero"
                  >
                    REMOVE CART
                  </button>
                ) : (
                  <button
                    onClick={() => AddToCartHandler()}
                    className="btn text-center btn-yellow w-25 me-2 text-black subtitlehero"
                  >
                    ADD TO CART
                  </button>
                )}
                <button className="btn text-center  btn-dark w-25 subtitlehero">
                  BUY NOW
                </button>
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
