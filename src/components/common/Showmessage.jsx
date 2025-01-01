import React from "react";

function Showmessage({ status, message }) {
  return (
    <div
      className="showmessage w-75 d-flex gap-2 py-3 px-2 align-items-center rounded "
      style={{
        backgroundColor: status == "success" ? "#4CAF50" : " #FF0000",
      }}
    >
      {status == "success" ? (
        <i
          className="fas fa-check-circle"
          style={{
            color: "white",
          }}
        ></i>
      ) : (
        <i
          class="fas fa-times-circle"
          style={{
            color: "white",
          }}
        ></i>
      )}

      <p className="text-white ">{message}</p>
    </div>
  );
}

export default Showmessage;
