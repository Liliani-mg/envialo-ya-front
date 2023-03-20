import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "./SideBar";
import "./ContainerBackoffice.css";


function ContainerBackoffice() {
 
  
    return (
      <div id="container" class="container-fluid bg-light">
          <NavBar/>
          <div class="d-flex flex-column">
           <SideBar/>
           <div class="d-flex flex-column justify-content-center align-items-center border rounded-2 p-3 pb-1 bg-success m-4 mt-1">
            <ul>
                <li> <h6>Visualice transacciones</h6></li>
                <li>  <h6>Visualice Cotizaciones o agregue nuevas</h6></li>
            </ul>
                     
           </div>
          </div>
          
      </div>
    );
}

export default ContainerBackoffice;
