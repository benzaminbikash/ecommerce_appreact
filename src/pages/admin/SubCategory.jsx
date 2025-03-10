import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Showmessage from "../../components/common/Showmessage";
import {
  useDeleteSubCategoryMutation,
  useGetSubCategoryQuery,
} from "../../redux/Api/admin/AdminSubCategory";

function SubCategory() {
  const { data: Api, refetch } = useGetSubCategoryQuery();
  const subCategories = Api?.data;
  const [deleteSubCategory] = useDeleteSubCategoryMutation();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(subCategories?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = subCategories?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDelete = async (id) => {
    if (confirm("Do you want to delete this Sub Category?") == true) {
      await deleteSubCategory(id);
      setMessage("Delete Category Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };
  const selectUpdateData = (item) => {
    navigate("/admin/subcategory/addsubcategory", {
      state: item,
    });
  };
  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h6>Sub Category List</h6>
        <NavLink
          to="/admin/subcategory/addsubcategory"
          className="btn btn-primary text-white py-1 py-lg-2 stock"
        >
          <i className="bi bi-plus me-2"></i>Add Sub Category
        </NavLink>
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      {displayedProducts?.length == 0 ? (
        <p className="text-center fw-bold text-primary fs-5">No Sub Category</p>
      ) : (
        <>
          <div className="table-responsive scroll-container card p-3 ">
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th className="text-dark">S.N</th>
                  <th className="text-dark">Category Name</th>
                  <th className="text-dark">Title</th>
                  <th className="text-dark">Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts &&
                  displayedProducts?.map((product, index) => (
                    <tr key={product.id}>
                      <td>{startIndex + index + 1}</td>
                      <td>{product?.category.title}</td>
                      <td>{product?.title}</td>
                      <td>
                        <i
                          className="bi bi-pencil-square adminactionupdate"
                          onClick={() => selectUpdateData(product)}
                        ></i>
                        <i
                          className="bi bi-trash ps-3 adminactiondelete"
                          onClick={() => handleDelete(product._id)}
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

export default SubCategory;
