import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import {
  useDeleteSubAttributeMutation,
  useGetSubAttributeQuery,
} from "../../redux/Api/admin/AdminSubAttribute";
import Showmessage from "../../components/common/Showmessage";

function SubAttributes() {
  const { data: API, refetch } = useGetSubAttributeQuery();
  const [DELETE] = useDeleteSubAttributeMutation();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const deletesubAttribute = async (id) => {
    if (confirm("Do you want to delete this sub-attribute?") == true) {
      await DELETE(id);
      setMessage("Delete Category Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };

  const selectUpdateData = (item) => {
    navigate("/admin/subattribute/subaddattribute", {
      state: item,
    });
  };
  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h6>Sub Attributes</h6>
        <NavLink
          to="/admin/subattribute/subaddattribute"
          className="btn btn-primary text-white py-lg-2 py-1 stock"
        >
          <i className="bi bi-plus me-2"></i>Add New Sub-Attributes
        </NavLink>
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      {API?.data?.length == 0 ? (
        <p className="text-center fw-bold text-primary fs-5">
          No Sub Attribute
        </p>
      ) : (
        <div className="table-responsive scroll-container card p-3 ">
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th className="text-dark">S.N</th>
                <th className="text-dark">Attribute</th>
                <th className="text-dark">Titles</th>
                <th className="text-dark">Actions</th>
              </tr>
            </thead>
            <tbody>
              {API?.data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.attribute.title}</td>
                  <td className="flex flex-row">
                    {item.title.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </td>
                  <td>
                    <i
                      onClick={() => selectUpdateData(item)}
                      className="bi bi-pencil-square adminactionupdate"
                    ></i>
                    <i
                      className="bi bi-trash ps-3 adminactiondelete"
                      onClick={() => deletesubAttribute(item._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default SubAttributes;
