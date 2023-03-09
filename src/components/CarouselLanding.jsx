import React from "react";
import "./CarouselLanding.css";

// const image1 ="https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg002_rw3qet.jpg";
// const image2 ="https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg001_u2kmyd.jpg";
// const image3 = "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg004_rkzo0w.jpg";

function CarouselLanding() {
  return (
    <div class="d-flex flex-column w-100 h-100 ">
      <div
        id="carousel-image"
        class="carousel h-100 slide d-flex flex-column align-items-center"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item carousel-image bg-img-1 active">
            {/* <img class="d-block w-100" src={image1} alt="First slide"></img> */}
          </div>
          <div class="carousel-item carousel-image bg-img-2">
            {/* <img class="d-block w-100" src={image2} alt="Second slide"></img> */}
          </div>
          <div class="carousel-item carousel-image bg-img-3 ">
            {/* <img class="d-block w-100" src={image3} alt="Third slide"></img> */}
          </div>
        </div>
        {/* <a
        id="btn-siguiente"
          class="btn btn-primary rounded m-5 mt-1 w-25 "
          href="/form"
          // data-bs-toggle="offcanvas"
          // href="#offcanvasExample"
          // role="button"
          // aria-controls="offcanvasExample"
        >
          Siguiente
        </a> */}
      </div>
    </div>
  );
}

export default CarouselLanding;
