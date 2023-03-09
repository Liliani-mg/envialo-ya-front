import React from "react";
import CarouselLanding from "../components/CarouselLanding";
import NavBar from "../components/NavBar";
import CardCotiz from "../components/CardCotiz";

const imageBg =
  "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg002_rw3qet.jpg";

function Landing() {
  return (
    <div id="background-images" class="d-flex flex-column">
      <NavBar />
      <div class="d-sm-flex justify-content-around ">
        <CarouselLanding />
        <CardCotiz />
      </div>
    </div>
  );
}

export default Landing;
