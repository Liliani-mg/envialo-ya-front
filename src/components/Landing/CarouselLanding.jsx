import React from "react";
import "./CarouselLanding.css";

const image1 =
  "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg002_rw3qet.jpg";
const image2 =
  "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg001_u2kmyd.jpg";
const image3 =
  "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg004_rkzo0w.jpg";

function CarouselLanding() {
  return (
    <div id="container" class="d-md-flex ">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
       
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block  img-fluid " />
       
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block  img-fluid" />

          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block  img-fluid " />

          </div>
        </div>
     
      </div>
    </div>
  );
}

export default CarouselLanding;
