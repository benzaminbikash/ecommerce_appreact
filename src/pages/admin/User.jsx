import React, { useState } from "react";
import Lottie from "react-lottie";
import { useAllUsersQuery } from "../../redux/Api/admin/AdminUser";
import usernotfound from "../../img/usernotfound.json";
import { itemperPage } from "../../components/common/constant";

function User() {
  const [search, setSearch] = useState("");
  const { data: API } = useAllUsersQuery();
  const User = API?.data;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = itemperPage;
  const filteredUsers = User?.filter((item) => {
    if (search == "") {
      return item;
    } else {
      return (
        item.fullname.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.phone.includes(search)
      );
    }
  });
  const totalPages = Math.ceil(filteredUsers?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayUsers = filteredUsers?.slice(startIndex, endIndex);
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <main className="">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
        <h6>Users List</h6>
      </div>

      <div className="d-flex gap-2 w-50 mb-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="productinput my-2"
          placeholder="Search for a user..."
          aria-label="Search"
        />
      </div>
      {displayUsers?.length == 0 ? (
        <p className="text-center fw-bold text-primary fs-5">No User</p>
      ) : (
        <div className="table-responsive scroll-container card p-3">
          {displayUsers?.length == 0 && search != "" ? (
            <>
              <Lottie
                style={{ width: 250 }}
                options={{
                  animationData: usernotfound,
                }}
              />
            </>
          ) : (
            <table className="table  table-bordered table-sm">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {displayUsers?.map((item, index) => (
                  <tr key={item._id}>
                    <td>{startIndex + index + 1}</td>
                    <td>{item.fullname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {displayUsers?.length != 0 && (
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-outline-primary"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-dark stock align-self-center">
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
      )}
    </main>
  );
}

export default User;
