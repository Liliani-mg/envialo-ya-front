import React from "react";
import CarouselLanding from "../components/CarouselLanding";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import Form from "../components/Form";

const imageBg =
  "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg002_rw3qet.jpg";


function Landing() {
  const navigate = useNavigate();

  return (
    <div >
      <NavBar />
      <CarouselLanding />
      <a
        class="btn btn-primary rounded-pill "
        href="/form"
        // data-bs-toggle="offcanvas"
        // href="#offcanvasExample"
        // role="button"
        // aria-controls="offcanvasExample"
      >
        Enviar Dinero
      </a>
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
