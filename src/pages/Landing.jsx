import React from "react";
import CarouselLanding from "../components/CarouselLanding";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import Form from "../components/Form";
import CardCotiz from "../components/CardCotiz";

const imageBg =
  "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg002_rw3qet.jpg";


function Landing() {
  const navigate = useNavigate();

  return (
    <div  id="background-images" class="d-flex flex-column align-items-center" >
      <NavBar />
      <CardCotiz/>
      <CarouselLanding />
     
      {/* <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
            <Form/>
        </div>
      </div> */}
    </div>
  );
}

export default Landing;
