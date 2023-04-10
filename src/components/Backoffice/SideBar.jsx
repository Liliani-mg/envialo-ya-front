import React from "react";

function SideBar() {
  return (
    <div>
      <div class="d-flex flex-column p-2 hover mt-5 w-100 ">
        <div class="d-flex flex-column sidebar  ">
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a
                class="nav-link text-white"
                aria-current="page"
                href="/panelAdmin/transacciones"
              >
                Transacciones
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/panelAdmin/cotizaciones">
                Cotizaciones
              </a>
            </li>
          </ul>
        </div>
        {/* <div class="d-flex justify-content-center w-75">
          <ContentDashboard  />
        </div> */}
      </div>
    </div>
  );
}

export default SideBar;
