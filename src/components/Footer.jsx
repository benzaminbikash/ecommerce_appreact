import React from "react";

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white footer pt-5 mt-5 pb-3">
      <div className="container">
        <div className="pb-4 mb-1 footermain">
          <div className="row g-4">
            <div className="col-lg-3">
              <h6 className=" text-white mb-0">Revolution Technology</h6>
              <p className="text-white stock mb-0">Tech Products</p>
            </div>
            <div className="col-lg-3">
              <div className="d-flex justify-content-end pt-3"></div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="footer-item">
              <h6 className="text-light mb-3">Why People Like us!</h6>
              <p className=" text-justify stock ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti eius minima aliquid quisquam perspiciatis, culpa totam
                omnis pariatur maxime in.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex gap-1 flex-column  ">
              <h6 className="text-light mb-3">Keep Connected</h6>
              <div className="d-flex">
                <i className="fab fa-twitter  footericoncursor me-4"></i>

                <i className="fab fa-facebook-f  me-4 footericoncursor"></i>

                <i className="fab fa-youtube  me-4 footericoncursor"></i>

                <i className="fab fa-linkedin-in  footericoncursor"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="footer-item">
              <h6 className="text-light mb-3">Contact Information</h6>
              <div className="d-flex align-items-center gap-2 mb-1">
                <i className="fas text-white fa-map-marker-alt "></i> Gwarko
              </div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <i className="fas text-white fa-envelope "></i>{" "}
                testing@gmail.com
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fas text-white fa-phone-alt"></i> +977 9857451234
              </div>
            </div>
          </div>
        </div>
        <div className="stock text-end mt-4 ">
          &copy; 2024 All Rights Reserved | Power by Techg
        </div>
      </div>
    </div>
  );
}

export default Footer;
