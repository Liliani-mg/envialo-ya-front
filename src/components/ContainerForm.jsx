import React from "react";
import Form from "./Form";
import NavBar from "./NavBar";
import "./ContainerForm.css";

function ContainerForm() {
  return (
    <div id="container-form" class="d-flex flex-column">
      <div>
        <NavBar />
      </div>
      <div class="container-fluid mt-1">
        <Form />
      </div>
    </div>
  );
}

export default ContainerForm;
