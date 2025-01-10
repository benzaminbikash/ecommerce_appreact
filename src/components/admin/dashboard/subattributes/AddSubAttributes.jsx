import React, { useState } from "react";

function AddSubAttributes() {
  const [names, setNames] = useState([""]);

  const handleNameChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleAddName = () => {
    setNames([...names, ""]);
  };

  const handleRemoveName = (index) => {
    const newNames = names.filter((_, i) => i !== index);
    setNames(newNames);
  };

  console.log(names);

  return (
    <main className="">
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">Add Sub Attribute</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="attributes" className="form-label">
                  Attributes
                </label>
                <select
                  className="form-control p-3 bg-light"
                  aria-label="Default select example"
                >
                  <option selected>Select Attributes</option>
                  <option value="1">Color</option>
                  <option value="2">Size</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="images" className="form-label">
                  Titles
                </label>
                {names.map((name, index) => (
                  <div key={index} className="input-group mb-3">
                    <input
                      type="text"
                      id={`name-${index}`}
                      className="form-control p-3 bg-light"
                      placeholder="Enter sub attribute title"
                      value={name}
                      onChange={(e) => handleNameChange(index, e.target.value)}
                    />
                    {names.length > 1 && (
                      <i
                        className="fas fa-minus-circle text-white btn btn-success pt-3"
                        onClick={() => handleRemoveName(index)}
                      ></i>
                    )}
                  </div>
                ))}
                <i
                  className="fas fa-plus-circle text-white w-25 btn btn-primary"
                  onClick={handleAddName}
                >
                  <span className="ps-2"> Add More</span>
                </i>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                Add Sub Attibute
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddSubAttributes;
