import React from "react";
import DashboardHead from "../components/DashboardHead";
import HambergerMenu from "../components/HambergerMenu";

import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      {/* <DashboardHead />
       */}
      {/* <HambergerMenu/> */}
      <HambergerMenu>
        <Outlet />
      </HambergerMenu>
    </div>
  );
}
