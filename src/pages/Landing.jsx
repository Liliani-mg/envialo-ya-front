import React from "react";
import CarouselLanding from "../components/CarouselLanding";
import NavBar from "../components/NavBar";
import CardCotiz from "../components/CardCotiz";
import "./Landing.css"
import TextTitleLanding from "../components/TextTitleLanding";
import Beneficios from "../components/Beneficios";

// const imageBg =
//   "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg002_rw3qet.jpg";

function Landing() {
  return (
    <div class="d-flex flex-column">
      <div id="background-images" class="d-md-flex justify-content-around">
      <NavBar />
        {/* <CarouselLanding /> */}
        <TextTitleLanding/>
        <CardCotiz/>
      </div>
      <div id="container-beneficios" class=" d-md-flex justify-content-center">
        <Beneficios/>
      </div>
    </div>
  );
}

export default Landing;
