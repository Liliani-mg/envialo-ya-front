import React from "react";

function SideBar() {
  return (
    <div>
      <div class="d-flex flex-column-2 p-2 hover mt-5 w-100 ">
        <div class="d-flex flex-column sidebar w-25 bg-light  ">
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a
                class="nav-link "
                aria-current="page"
                href="/panelAdmin/transacciones"
              >
                Transacciones
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/panelAdmin/cotizaciones">
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
