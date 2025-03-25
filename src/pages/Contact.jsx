import React from "react";
import Header from "../components/Header";
import Contactform from "../components/contact/Contactform";

function Contact() {
  return (
    <>
      <Header title={"Contact"} />
      <div className="container contact ">
        <div className="container py-5">
          <div className="p-2 p-lg-5 bg-light shadow rounded">
            <div className="row g-4">
              <div className="col-12">
                <div className="text-center mx-auto">
                  <h5 className="text-primary">Contact Us</h5>
                  <p className="mb-2 subtitlehero stock text-center ">
                    Got a question? We'd love to hear from you. Send us a
                    message and we'll respond as soon as possible.
                  </p>
                </div>
              </div>

              <div className="col-lg-7">
                <Contactform />
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-3 rounded mb-4 bg-white">
                  <i className="fas fa-map-marker-alt iconsize footericon  me-4"></i>
                  <div>
                    <h6>Address</h6>
                    <p className="mb-2 stock">123 Street New York.USA</p>
                  </div>
                </div>
                <div className="d-flex p-3 rounded mb-4 bg-white">
                  <i className="fas fa-envelope iconsize footericon  me-4"></i>
                  <div>
                    <h6>Mail Us</h6>
                    <p className="mb-2 stock">info@example.com</p>
                  </div>
                </div>
                <div className="d-flex p-3 rounded bg-white">
                  <i className="fa fa-phone-alt iconsize footericon  me-4"></i>
                  <div>
                    <h6>Telephone</h6>
                    <p className="mb-2 stock ">(+012) 3456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
