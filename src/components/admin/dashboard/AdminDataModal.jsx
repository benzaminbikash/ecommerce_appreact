import React from "react";
import { constant } from "../../common/constant";
import { Link } from "react-router-dom";

function BannerModal({ data, type }) {
  return (
    <div
      className="modal fade w-100 "
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body w-100">
            {type === "testimonail" && (
              <>
                <div className="text-center">
                  <img
                    src={`http://localhost:8000/uploads/${data?.image}`}
                    alt={data?.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4 className="text-center">{data?.name}</h4>
                <p className="text-muted text-center">{data?.profession}</p>
                <p>{data?.description}</p>
                <div className="text-center mt-2">
                  <strong>Rating: {data?.rating} ⭐</strong>
                </div>
              </>
            )}
            {type === "banner" && (
              <>
                <div className="text-center">
                  <img
                    src={`http://localhost:8000/uploads/${data?.image}`}
                    alt={data?.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="fw-bolder stock text-primary stock">
                  Title:{" "}
                  <span className="fw-light text-dark">{data?.title}</span>
                </p>
                <p className="fw-bolder text-primary stock">
                  SubTitle:{" "}
                  <span className="fw-light text-dark">{data?.subtitle}</span>
                </p>
                <p className="fw-bolder text-primary stock">
                  Description:{" "}
                  <span className="fw-light text-dark">
                    {data?.description}
                  </span>
                </p>
                <p className="fw-bolder text-primary stock">
                  Price:{" "}
                  <span className="fw-light text-dark">Rs {data?.price}</span>
                </p>
              </>
            )}
            {type === "order" && (
              <>
                <h6 className="text-center">Products</h6>
                <div className="">
                  {data?.products?.map((item, index) => (
                    <div key={index} className="d-flex gap-2 mb-2">
                      <p className=" text-primary producttileorder">
                        {item?.product?.title}
                      </p>
                      <img
                        className="orderimage1"
                        src={`${constant?.IMAGEURL}/${item?.product?.mainimage}`}
                        alt="randomImage"
                      />
                      <div className="mx-2">
                        {item?.attributes?.map((d, index) => (
                          <div key={index} className="text-primary">
                            {d?.title?.title}: [{d?.values}]
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <hr />
                <h6 className="text-center">Shipping Address</h6>
                <p className="fw-bolder text-primary">
                  Province:{" "}
                  <span className="fw-light">
                    {data?.shippingAddress?.province}
                  </span>
                </p>
                <p className="fw-bolder text-primary">
                  District:{" "}
                  <span className="fw-light">
                    {data?.shippingAddress?.district}
                  </span>
                </p>
                <p className="fw-bolder text-primary">
                  Municipality:{" "}
                  <span className="fw-light">
                    {data?.shippingAddress?.municipality}
                  </span>
                </p>
                <p className="fw-bolder text-primary">
                  Address:{" "}
                  <span className="fw-light">
                    {data?.shippingAddress?.address}
                  </span>
                </p>
                <hr />
                <h6 className="text-center">Payment Method</h6>
                <p className="fw-bolder text-primary">
                  Method:{" "}
                  <span className="fw-light">{data?.payment_method}</span>
                </p>
                {data?.onlinepayimage && (
                  <p className="fw-bolder text-primary">
                    Image:
                    <Link to={`${constant.IMAGEURL}/${data?.onlinepayimage}`}>
                      {" "}
                      <img
                        className="orderimage1"
                        src={`${constant?.IMAGEURL}/${data?.onlinepayimage}`}
                        alt=""
                      />
                    </Link>
                  </p>
                )}
              </>
            )}
            {type === "blog" && (
              <div
                dangerouslySetInnerHTML={{ __html: data?.description }}
              ></div>
            )}
            {type === "contact" && <div>{data.message}</div>}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary text-white"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerModal;
