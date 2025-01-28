import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import { useGetCarouselQuery } from "../../redux/Api/admin/AdminCarousel";
import { constant } from "../../components/common/constant";

function Carousel() {
  const { data, refetch } = useGetCarouselQuery();

  return (
    <main className="">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h1 className="fs-5 fw-bold mt-3">Carousel</h1>
        <NavLink
          to="/admin/carousel/addcarousel"
          className="btn btn-primary text-white py-2"
        >
          <i className="bi bi-plus me-2"></i>Add Carousel
        </NavLink>
      </div>

      <div className="table-responsive card p-3 ">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th className="text-dark">S.N</th>
              <th className="text-dark">Title</th>
              <th className="text-dark">Subtitle</th>
              <th className="text-dark">Images</th>

              <th className="text-dark">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.subtitle}</td>
                  <td>
                    {item?.carsoualimage.map((item, index) => {
                      return (
                        <>
                          {index + 1}.
                          <Link to={`${constant.IMAGEURL}/${item}`}>
                            <img
                              className="adminImage pl-2 border-1"
                              src={`${constant.IMAGEURL}/${item}`}
                              alt=""
                            />
                          </Link>
                          <br />
                        </>
                      );
                    })}
                  </td>
                  <td>
                    <i className="bi bi-pencil-square adminactionupdate"></i>
                    <i className="bi bi-trash ps-3 adminactiondelete"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Carousel;
