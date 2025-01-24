import React from "react";

function BannerModal({ data, type }) {
  console.log(data?.name);
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            {type === "testimonail" && (
              <>
                <div className="text-center">
                  <img
                    src={`http://localhost:8000/uploads/${data?.image}`}
                    alt={data?.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4 className="text-center">{data?.name}</h4>
                <p className="text-muted text-center">{data?.profession}</p>
                {/* <p>{data?.description}</p> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, esse molestias similique id earum eos sunt dolor
                  voluptate temporibus fuga autem ut commodi, rem vero
                  aspernatur unde quis culpa distinctio?
                </p>
                <div className="text-center mt-2">
                  <strong>Rating: {data?.rating} ⭐</strong>
                </div>
              </>
            )}
            {type === "banner" && (
              <>
                <div className="text-center">
                  <img
                    src={`http://localhost:8000/uploads/${data?.image}`}
                    alt={data?.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="fw-bolder text-primary">
                  Title: <span className="fw-light">{data?.title}</span>
                </p>
                <p className="fw-bolder text-primary">
                  SubTitle: <span className="fw-light">{data?.subtitle}</span>
                </p>
                {/* <h6 className="">Description: {data?.description}</h6> */}
                <p className="fw-bolder text-primary">
                  Description:{" "}
                  <span className="fw-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus quos architecto veritatis quidem sed expedita
                    rem sapiente dolorem quae ea deleniti, aperiam odio et sit
                    aut amet labore iure nihil vero dolor harum accusamus minus
                    vel. Accusantium enim, facere natus deserunt, soluta
                    assumenda aut odit facilis repellendus libero modi illum
                    maxime! Pariatur repellat at est illo, nulla eaque vel a ab
                    facilis sunt adipisci in? Aliquam nam, earum voluptatem
                    tenetur, soluta ipsa omnis voluptatum placeat aperiam,
                    officia vitae accusantium sed blanditiis ad illo ex itaque.
                    Totam sunt numquam, exercitationem dicta cupiditate
                  </span>
                </p>
                <p className="fw-bolder text-primary">
                  Price: <span className="fw-light">Rs {data?.price}</span>
                </p>
                <p className="fw-bolder text-primary">
                  Weight: <span className="fw-light">{data?.weight} Kg</span>
                </p>
                <p className="fw-bolder text-primary">
                  Button Name:
                  <span className="bg-primary rounded-2 px-2 py-1 text-uppercase w-25 mx-1">
                    {data?.submit}
                  </span>
                </p>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary text-white"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerModal;
