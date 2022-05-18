import React from "react";
import DashboardHead from "../components/DashboardHead";

import {Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <DashboardHead />
      <Outlet/>
    </div>
  );
}
