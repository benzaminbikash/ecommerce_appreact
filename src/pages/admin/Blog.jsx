import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Showmessage from "../../components/common/Showmessage";
import BannerModal from "../../components/admin/dashboard/AdminDataModal";
import {
  useDeleteBlogMutation,
  useGetBlogQuery,
} from "../../redux/Api/admin/AdminBlog";
import { itemperPage } from "../../components/common/constant";

function Blog() {
  const { data: Api, refetch } = useGetBlogQuery();
  const blogs = Api?.data;
  const [deleteBlog] = useDeleteBlogMutation();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = itemperPage;
  const totalPages = Math.ceil(blogs?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = blogs?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDelete = async (id) => {
    if (confirm("Do you want to delete this Blog?") == true) {
      await deleteBlog(id);
      setMessage("Delete Blog Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };
  const selectUpdateData = (item) => {
    navigate("/admin/blogs/addblog", {
      state: item,
    });
  };
  useEffect(() => {
    refetch();
  }, []);
  const [selectItem, setSelectItem] = useState({});

  return (
    <main>
      <BannerModal data={selectItem} type="blog" />
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h6>Blog List</h6>
        <NavLink
          to="/admin/blogs/addblog"
          className="btn btn-primary text-white py-1 py-lg-2 stock"
        >
          <i className="bi bi-plus me-2"></i>Add Blog
        </NavLink>
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      {displayedProducts?.length == 0 ? (
        <p className="text-center fw-bold text-primary fs-5">No Blog</p>
      ) : (
        <>
          <div className="table-responsive scroll-container card p-3 ">
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th className="text-dark">S.N</th>
                  <th className="text-dark">Title</th>
                  <th className="text-dark">Image</th>
                  <th className="text-dark">Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts &&
                  displayedProducts?.map((product, index) => (
                    <tr key={product.id}>
                      <td>{startIndex + index + 1}</td>
                      <td>{product?.title}</td>
                      <Link
                        to={`http://localhost:8000/uploads/${product?.image}`}
                      >
                        <img
                          className="adminImage"
                          src={`http://localhost:8000/uploads/${product?.image}`}
                          st
                          alt="randomImage"
                        />
                      </Link>
                      <td>
                        <i
                          className="bi bi-pencil-square adminactionupdate"
                          onClick={() => selectUpdateData(product)}
                        ></i>
                        <i
                          className="bi bi-trash ps-3 adminactiondelete"
                          onClick={() => handleDelete(product._id)}
                        ></i>

                        <i
                          onClick={() => setSelectItem(product)}
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
    </main>
  );
}

export default Blog;
