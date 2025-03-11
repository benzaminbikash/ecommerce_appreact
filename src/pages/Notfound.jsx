import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import SearchModal from "../components/SearchModal";
import Lottie from "react-lottie";
import NotfoundLottie from "../img/404.json";

function Notfound() {
  return (
    <>
      <SearchModal />
      <Header title={""} />
      <div className="container-fluid contact">
        <div className="container d-flex flex-column align-items-center">
          <div className="lottie-container">
            <Lottie
              options={{
                animationData: NotfoundLottie,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={300}
              height={200}
            />
          </div>
          <p className="stock notfound-text">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <NavLink
            to="/"
            className="mt-2  ratingbackground  px-4 py-2 rounded text-white text-text-lowercase mb-4 ms-4"
            type="button"
          >
            Go To Home
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Notfound;
