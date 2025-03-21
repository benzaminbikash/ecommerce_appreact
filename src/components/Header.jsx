import React from "react";
import { Link } from "react-router-dom";
import CartPage from "../img/header.jpg";
import { useGetCouponQuery } from "../redux/Api/admin/AdminCoupon";

function Header({ title }) {
  const { data } = useGetCouponQuery();
  const coupon = data?.data[0];
  return (
    <div
      className="container-fluid page-header headerbackground py-5  "
      style={{
        backgroundImage: `url(${CartPage})`,
      }}
    >
      <h3 className="text-center text-white ">{title}</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <Link className="fw-bold subtitlehero" to="/">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item text-white subtitlehero">Pages</li>
        <li className="breadcrumb-item active text-white subtitlehero">
          {title}
        </li>
      </ol>
      {coupon?.status == "active" && (
        <marquee className="marquee position-absolute bottom-0   fs-6">
          Use coupon code <span className="marqueecode">{coupon?.code}</span> to
          get a discount of <span>{coupon?.discount}%</span> on a minimum spend
          of Rs <span>{coupon?.minimum_spend}!</span> Valid from{" "}
          <span>{coupon?.valid_from?.split("T")[0]}</span> to{" "}
          <span>{coupon?.valid_to?.split("T")[0]}</span> for{" "}
          <span>{coupon.used_limit}</span> Customer.
        </marquee>
      )}
    </div>
  );
}

export default Header;
