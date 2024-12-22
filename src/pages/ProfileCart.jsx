import React from "react";
import Carttotal from "../components/Cart/cartTotal";

function ProfileCart() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Products</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src="img/vegetable-item-3.png"
                      className="img-fluid me-5 rounded-circle cartinfo"
                      alt=""
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">Big Banana</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <div
                    className="input-group quantity mt-4"
                    style={{ width: "100px" }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      value="1"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src="img/vegetable-item-5.jpg"
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: "80px", height: "80px" }}
                      alt=""
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">Potatoes</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <div
                    className="input-group quantity mt-4"
                    style={{ width: "100px" }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      value="1"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src="img/vegetable-item-2.jpg"
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: "80px", height: "80px" }}
                      alt=""
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">Awesome Brocoli</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <div
                    className="input-group quantity mt-4"
                    style={{ width: "100px" }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      value="1"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Carttotal />
      </div>
    </div>
  );
}

export default ProfileCart;
