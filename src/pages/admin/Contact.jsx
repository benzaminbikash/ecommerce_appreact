import React, { useEffect, useState } from "react";
import BannerModal from "../../components/admin/dashboard/AdminDataModal";
import {
  useAllContactQuery,
  useDeleteContactMutation,
} from "../../redux/Api/ContactApi";
import { itemperPage } from "../../components/common/constant";
import Showmessage from "../../components/common/Showmessage";

function Contact() {
  const { data: Api, refetch } = useAllContactQuery();
  const blogs = Api?.data;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = itemperPage;
  const totalPages = Math.ceil(blogs?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = blogs?.slice(startIndex, endIndex);
  const [DELETE] = useDeleteContactMutation();
  const [message, setMessage] = useState("");

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDelete = async (id) => {
    if (confirm("Do you want to delete this Message?") == true) {
      const api = await DELETE(id);
      setMessage("Contact Deleted Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };
  const [selectItem, setSelectItem] = useState({});

  useEffect(() => {
    refetch();
  }, [Api]);

  return (
    <main>
      <BannerModal data={selectItem} type="contact" />
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h6>Contact List</h6>
      </div>

      {message != "" && <Showmessage message={message} status={"success"} />}
      {displayedProducts?.length == 0 ? (
        <p className="text-center fw-bold text-primary fs-5">No Contact</p>
      ) : (
        <>
          <div className="table-responsive scroll-container card p-3 ">
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th className="text-dark">S.N</th>
                  <th className="text-dark">Name</th>
                  <th className="text-dark">Email</th>
                  <th className="text-dark">Action</th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts &&
                  displayedProducts?.map((product, index) => (
                    <tr key={product._id}>
                      <td>{startIndex + index + 1}</td>
                      <td>{product?.name}</td>
                      <td>{product?.name}</td>

                      <td>
                        <i
                          onClick={() => setSelectItem(product)}
                          className="fas ps-1 fa-eye adminactionupdate"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
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
    </main>
  );
}

export default Contact;
