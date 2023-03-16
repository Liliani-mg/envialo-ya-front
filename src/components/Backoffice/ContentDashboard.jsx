import React from "react";
import NavBar from "../NavBar";
import DashboardTransactions from "./DashboardTransactions";
import DashoardCotiz from "./DashoardCotiz";
import SideBar from "./SideBar";

function ContentDashboard() {
  const isCotiz = "/panelAdmin/cotizaciones";
  const isTransact = "/panelAdmin/transacciones";

  return (
    <div class="container-fluid bg-light">
      <NavBar />
      <div class="d-flex flex-column-2">
        <div>
          <SideBar />
        </div>
        <div class="table-responsive-xl ">
          {location.pathname === isCotiz ? (
            <DashoardCotiz />
          ) : (
            <DashboardTransactions />
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default ContentDashboard;
