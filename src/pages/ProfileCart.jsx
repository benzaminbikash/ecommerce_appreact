import React, { useCallback, useEffect, useMemo } from "react";
import { useUserInfoQuery } from "../redux/Api/AuthApi";
import {
  useDecreaseCartMutation,
  useIncreaseCartMutation,
  useRemoveCartMutation,
} from "../redux/Api/CartApi";
import Carttotal from "../components/Cart/cartTotal";
import { constant } from "../components/common/constant";
import Empty from "../img/emptyCart.jpg";
import Scroller from "../components/common/Scroller";

function ProfileCart() {
  const { data, refetch } = useUserInfoQuery();
  const cart = data?.data?.cart;
  const [INCREASE] = useIncreaseCartMutation();
  const [DECREASE] = useDecreaseCartMutation();
  const [REMOVECART] = useRemoveCartMutation();

  const increase = useCallback(
    async (item) => {
      await INCREASE({
        product: item.product._id,
      });
      refetch();
    },
    [INCREASE, refetch]
  );

  const decrease = useCallback(
    async (item) => {
      if (item.quantity > 1) {
        await DECREASE({
          product: item.product._id,
        });
        refetch();
      } else {
        if (confirm("Do you want to remove this product?") == true) {
          await REMOVECART({
            product: item.product._id,
          });
          refetch();
        }
      }
    },
    [DECREASE, REMOVECART, refetch]
  );
  const removeCart = useCallback(
    async (item) => {
      await REMOVECART({
        product: item.product._id,
      });
      refetch();
    },
    [REMOVECART, refetch]
  );

  const totalPrice = useMemo(() => {
    return cart?.reduce(
      (acc, item) => acc + item.quantity * item.product.priceafterdiscount,
      0
    );
  }, [cart]);

  useEffect(() => {
    refetch();
    Scroller();
  }, []);

  if (cart?.length == 0) {
    return (
      <div className="container-fluid">
        <div className="container py-5 d-flex flex-column align-items-center">
          <img
            src={Empty}
            alt="randomImage"
            className="w-25 h-25 object-fit-cover"
          />
          <p className="stock text-primary fw-bold text-center">
            Your cart is empty!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" ">
      <div className=" ">
        <div className="table-responsive scroll-container border rounded ">
          <table className="table table-bordered ">
            <thead>
              <tr className="stock text-primary">
                <th scope="col  tablehead">SN</th>
                <th scope="col tablehead">Products</th>
                <th scope="col tablehead">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr key={index} className="stock text-primary">
                  <td>
                    <p className="mb-0">{index + 1}</p>
                  </td>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={`${constant?.IMAGEURL}/${item?.product?.mainimage}`}
                        className="img-fluid me-5 rounded-circle cartinfo"
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0">{item?.product?.title}</p>
                  </td>
                  <td>
                    <p className="mb-0">
                      Rs {item?.product?.priceafterdiscount}
                    </p>
                  </td>
                  <td>
                    <div
                      style={{ width: "80px" }}
                      className="gap-0  d-flex align-items-center "
                    >
                      <button
                        onClick={() => decrease(item)}
                        className="border-0 bg-transparent"
                      >
                        <i className="fas fa-minus-circle  footericon fs-4"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control bg-transparent  form-control-sm text-center text-primary border-0"
                        value={item?.quantity}
                        disabled
                      />

                      <button
                        onClick={() => increase(item)}
                        className="border-0 bg-transparent"
                      >
                        <i className="fas fa-plus-circle footericon  fs-4"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0">
                      {item?.quantity * item.product.priceafterdiscount}
                    </p>
                  </td>
                  <td>
                    <button
                      onClick={() => removeCart(item)}
                      className="   bg-transparent border-0"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Carttotal data={totalPrice} />
      </div>
    </div>
  );
}

export default ProfileCart;
