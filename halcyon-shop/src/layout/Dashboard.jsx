import React from "react";
import DashboardHead from "../components/DashboardHead";
import ManagePage from '../pages/ManagePage'
import ManageOfSP from '../pages/ManageOfSP'
import OrderPage from '../pages/OrderPage'

import { Routes,Route, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <DashboardHead />
      <Outlet/>
    </div>
  );
}
