import React, { useEffect, useState } from "react";

import Showmessage from "../../../common/Showmessage";
import { useLocation } from "react-router-dom";

function EditUser() {
  const { state } = useLocation();

  const [role, setRole] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");
  const handleAddUser = async (e) => {
    e.preventDefault();
    // const api = await USERREGISTRATION({
    //   role: role ? "admin" : "user",
    // });
    // if (api.error) {
    //   setError(api.error?.data?.message);
    //   setSuccess("");
    // } else {
    //   setError("");
    //   setSuccess("Role Changed Successfully.");
    //   setRole("");
    //   setRole(false);
    // }
  };

  useEffect(() => {
    if (state.role == "admin") {
      setRole(true);
    }
  }, []);

  return (
    <main className="">
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">Update User</h5>
        </div>
        {error && <Showmessage message={error} status={"fail"} />}
        {success && <Showmessage message={success} status={"success"} />}
        <div className="card-body">
          <form onSubmit={handleAddUser}>
            <div className="row g-3">
              {/* Role (Admin/User) */}
              <div className="form-check form-switch m-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked={role}
                  onChange={(e) => setRole(e.target.checked)}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  is Admin
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default EditUser;
