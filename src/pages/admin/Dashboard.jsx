import React, { useEffect, useState } from "react";
import { useUserInfoQuery } from "../../redux/Api/AuthApi";
import { useGetProductQuery } from "../../redux/Api/admin/AdminProduct";
import { useAllUsersQuery } from "../../redux/Api/admin/AdminUser";
import { useGetBlogQuery } from "../../redux/Api/admin/AdminBlog";
import { useGetCategoryQuery } from "../../redux/Api/admin/AdminCategory";
import { useGetSubCategoryQuery } from "../../redux/Api/admin/AdminSubCategory";
import { useGetTestimonialQuery } from "../../redux/Api/admin/AdminTestimonial";
import { useGetSubAttributeQuery } from "../../redux/Api/admin/AdminSubAttribute";
import { constant, dashboardOrderList } from "../../components/common/constant";
import { useAllOrderQuery } from "../../redux/Api/OrderApi";
import BannerModal from "../../components/admin/dashboard/AdminDataModal";

function Dashboard() {
  const { data: myInfo, refetch } = useUserInfoQuery();
  const { data: Product } = useGetProductQuery();
  const { data: User } = useAllUsersQuery();
  const { data: Order, refetch: orderRefetch } = useAllOrderQuery();
  const { data: Blog } = useGetBlogQuery();
  const { data: Category } = useGetCategoryQuery();
  const { data: SubCategory } = useGetSubCategoryQuery();
  const { data: Testimonial } = useGetTestimonialQuery();
  const { data: Attribute } = useGetTestimonialQuery();
  const { data: SubAttribute } = useGetSubAttributeQuery();

  const order = Order?.data;
  const user = User?.data;
  const product = Product?.data;
  const category = Category?.data;
  const subcategory = SubCategory?.data;
  const testimonial = Testimonial?.data;
  const attribute = Attribute?.data;
  const subattribute = SubAttribute?.data;
  const blog = Blog?.data;

  // for filter
  const [status, setstatus] = useState("Pending");
  const filterOrder = order?.filter((item) => item?.status == status);
  const [selectOrder, setSelectOrder] = useState({});

  useEffect(() => {
    refetch();
    orderRefetch();
  }, [myInfo, Order]);
  return (
    <main>
      <BannerModal type="order" data={selectOrder} />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h5 className="h2">Dashboard</h5>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-lg text-primary bg-white mb-3">
            <div className="card-body">
              <h6 className="card-title text-primary fw-bold ">Total Orders</h6>
              <p className="card-text">{order?.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-lg  text-primary bg-white mb-3">
            <div className="card-body">
              <h6 className="card-title text-primary fw-bold">
                Total Products
              </h6>
              <p className="card-text">{product?.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-lg  text-primary bg-white mb-3">
            <div className="card-body">
              <h6 className="card-title text-primary fw-bold">Total User</h6>
              <p className="card-text">{user?.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-lg  text-primary bg-white mb-3">
            <div className="card-body">
              <h6 className="card-title text-primary fw-bold">
                Total Category{" "}
              </h6>
              <p className="card-text">{category?.length}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-lg  text-primary bg-white mb-3">
            <div className="card-body">
              <h6 className="card-title text-primary fw-bold">
                Total Sub Category
              </h6>
              <p className="card-text">{subcategory?.length}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-lg  text-primary bg-white mb-3">
            <div className="card-body">
              <h6 className="card-title text-primary fw-bold">
                Total Attributes
              </h6>
              <p className="card-text">{attribute?.length}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-lg  text-primary bg-white mb-3">
            <div className="card-body">
              <h6 className="card-title text-primary fw-bold">
                Total Sub Attributes
              </h6>
              <p className="card-text">{subattribute?.length}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-lg text-primary bg-white mb-3">
            <div className="card-body">
              <h6 className="card-title text-primary fw-bold">Total Blog</h6>
              <p className="card-text">{blog?.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-lg text-primary bg-white mb-3">
            <div className="card-body">
              <h6 className="card-title text-primary fw-bold">
                Total Testimonial
              </h6>
              <p className="card-text">{testimonial?.length}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h6>Order Information</h6>
      <div className="row mt-2 mb-5">
        {/* left side */}
        <div className="col-md-3">
          <div className="d-flex flex-column gap-2">
            {dashboardOrderList?.map((item) => (
              <button
                key={item?._id}
                className={`border-0 py-2 rounded  ${
                  status == item?.title
                    ? "bg-secondary text-white "
                    : "bg-light text-primary"
                }`}
                onClick={() => setstatus(item?.title)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="col-md-9">
          {filterOrder?.length == 0 ? (
            <div className=" text-center ">
              <h6 className="stock text-dark mt-3">
                No Order List For {status}{" "}
              </h6>
            </div>
          ) : (
            <div className="table-responsive scroll-container card ">
              <table className="table table-bordered table-sm">
                <thead>
                  <tr>
                    <th className="stock text-primary">S.N</th>
                    <th
                      className="stock text-primary d-flex align-items-center justify-content-between"
                      style={{ cursor: "pointer" }}
                    >
                      Date{" "}
                    </th>
                    <th className="stock text-primary">Customer Name</th>
                    <th className="stock text-primary">Phone Number</th>
                    <th className="stock text-primary">Product Title</th>
                    <th className="stock text-primary">Price(Rs)</th>
                    <th className="stock text-primary">Quantity</th>
                    <th className="stock text-primary">Total Price (Rs)</th>
                    <th className="stock text-primary">Payment Method</th>
                    <th className="stock text-primary">Transaction Code</th>
                    <th className="stock text-primary">Payment Image</th>

                    <th className="stock text-primary">Status</th>
                    <th className="stock text-primary">More</th>
                  </tr>
                </thead>
                <tbody>
                  {filterOrder?.map((product, index) => (
                    <tr key={product._id}>
                      <td className="stock">{index + 1}</td>
                      <td className="stock">
                        {product?.createdAt.split("T")[0]}
                      </td>
                      <td className="stock">{product?.user?.fullname}</td>
                      <td className="stock">{product?.user?.phone}</td>
                      <td>
                        {product?.products?.map((item) => (
                          <div key={item?._id} className="stock d-block">
                            {item?.product?.title}
                          </div>
                        ))}
                      </td>
                      <td>
                        {product?.products?.map((item) => (
                          <div key={item._id} className="stock d-block">
                            {item?.product?.priceafterdiscount}
                          </div>
                        ))}
                      </td>
                      <td>
                        {product?.products?.map((item) => (
                          <div key={item?._id} className="stock d-block">
                            {item?.quantity}
                          </div>
                        ))}
                      </td>
                      <td>
                        {product?.products?.map((item, index) => (
                          <div key={item?._id} className="stock d-block">
                            {item?.quantity * item?.product?.priceafterdiscount}
                          </div>
                        ))}
                      </td>
                      <td>{product?.payment_method}</td>
                      <td>{product?.transactionid}</td>
                      <td>
                        {product?.onlinepayimage && (
                          <img
                            src={`${constant.IMAGEURL}/${product?.onlinepayimage}`}
                            alt="randomImage"
                            className="adminImage img-fluid"
                          />
                        )}
                      </td>

                      <td>{product?.status}</td>
                      <td>
                        <i
                          onClick={() => setSelectOrder(product)}
                          className="fas fa-eye adminactionupdate"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
