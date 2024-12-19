import React from "react";

function Productinfo() {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Products</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center mt-2">
                <img
                  src="img/vegetable-item-2.jpg"
                  className="img-fluid rounded-circle"
                  style={{ width: "90px", height: "90px" }}
                  alt=""
                />
              </div>
            </th>
            <td className="py-5">Awesome Brocoli</td>
            <td className="py-5">$69.00</td>
            <td className="py-5">2</td>
            <td className="py-5">$138.00</td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center mt-2">
                <img
                  src="img/vegetable-item-5.jpg"
                  className="img-fluid rounded-circle"
                  style={{ width: "90px", height: "90px" }}
                  alt=""
                />
              </div>
            </th>
            <td className="py-5">Potatoes</td>
            <td className="py-5">$69.00</td>
            <td className="py-5">2</td>
            <td className="py-5">$138.00</td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center mt-2">
                <img
                  src="img/vegetable-item-3.png"
                  className="img-fluid rounded-circle"
                  style={{ width: "90px", height: "90px" }}
                  alt=""
                />
              </div>
            </th>
            <td className="py-5">Big Banana</td>
            <td className="py-5">$69.00</td>
            <td className="py-5">2</td>
            <td className="py-5">$138.00</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td className="py-5"></td>
            <td className="py-5"></td>
            <td className="py-5">
              <p className="mb-0 text-dark py-3">Total</p>
            </td>
            <td className="py-5">
              <div className="py-3 border-bottom border-top">
                <p className="mb-0 text-dark">$414.00</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Productinfo;
