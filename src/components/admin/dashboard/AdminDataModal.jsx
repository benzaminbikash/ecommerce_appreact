import React from "react";

function BannerModal({ data }) {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <h1>{data?.name}</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            aspernatur quidem earum necessitatibus voluptas voluptate adipisci
            maiores quia eius vero pariatur praesentium dolores laudantium quod,
            suscipit voluptatum soluta, deserunt doloremque accusamus. Autem
            officia facere fugit quisquam neque eos excepturi porro delectus
            eaque amet nemo dolores doloremque corporis mollitia sunt, ipsa
            repellat saepe accusamus repellendus rem similique dolor numquam?
            Delectus distinctio repellendus illo placeat doloremque aut laborum
            doloribus reprehenderit optio cupiditate facilis quisquam eum
            voluptatibus ullam corrupti ducimus asperiores nostrum quas
            accusantium, est vel rem officia neque debitis? Omnis est dolorem
            corrupti cum. Et reiciendis, optio fugit impedit corrupti nam unde?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary text-white"
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
