import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import BannerModal from "../../components/admin/dashboard/AdminDataModal";
import {
  useDeleteTestimonialMutation,
  useGetTestimonialQuery,
} from "../../redux/Api/admin/AdminTestimonial";
import Showmessage from "../../components/common/Showmessage";
import { itemperPage } from "../../components/common/constant";

function Testimonial() {
  const { data: API, refetch } = useGetTestimonialQuery();
  const testimonial = API?.data;
  const [deleteTestimonial] = useDeleteTestimonialMutation();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = itemperPage;
  const totalPages = Math.ceil(testimonial?.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const displayTestimonial = testimonial?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDelete = async (id) => {
    if (confirm("Do you want to delete this Category?") == true) {
      await deleteTestimonial(id);
      setMessage("Delete Category Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (message) {
        setMessage("");
      }
    }, 3000);
  }, [message]);

  const selectUpdateData = (item) => {
    navigate("/admin/testimonial/addtestimonial", {
      state: item,
    });
  };
  const [selectItem, setSelectItem] = useState({});

  return (
    <>
      <BannerModal data={selectItem} type="testimonail" />
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h6>Testimonial List</h6>
        <NavLink
          to="/admin/testimonial/addtestimonial"
          className="btn btn-primary text-white py-lg-2 py-1"
        >
          <i className="bi bi-plus me-2"></i>Add Testimonial
        </NavLink>
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      {displayTestimonial?.length == 0 ? (
        <p className="text-center fw-bold text-primary fs-5">No Testimonial</p>
      ) : (
        <>
          <div className="table-responsive scroll-container card p-3 ">
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th className="text-dark">S.N</th>
                  <th className="text-dark">Name</th>
                  <th className="text-dark">Profession</th>
                  <th className="text-dark">Description</th>
                  <th className="text-dark">Rating</th>
                  <th className="text-dark">Image</th>
                  <th className="text-dark">Action</th>
                </tr>
              </thead>
              <tbody>
                {displayTestimonial &&
                  displayTestimonial?.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1 + startIndex}</td>
                      <td>{item.name}</td>
                      <td>{item.profession}</td>
                      <td>
                        {item.description.length > 30
                          ? item.description.substring(0, 30) + "..."
                          : item.description}
                      </td>
                      <td>{item.rating}</td>

                      <Link to={`http://localhost:8000/uploads/${item?.image}`}>
                        <img
                          className="adminImage"
                          src={`http://localhost:8000/uploads/${item?.image}`}
                          st
                          alt="randomImage"
                        />
                      </Link>
                      <td>
                        <i
                          onClick={() => selectUpdateData(item)}
                          className="bi bi-pencil-square adminactionupdate"
                        ></i>
                        <i
                          onClick={() => handleDelete(item._id)}
                          className="bi bi-trash ps-3 adminactiondelete"
                        ></i>

                        <i
                          onClick={() => setSelectItem(item)}
                          className="fas ps-3 fa-eye adminactionupdate"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        ></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-outline-primary"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="stock text-dark align-self-center">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-outline-primary"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Testimonial;
