import React from "react";
import DashboardHead from "../components/DashboardHead";
import ManagePage from '../pages/ManagePage'
import ManageOfSP from '../pages/ManageOfSP'
import OrderPage from '../pages/OrderPage'

import { Routes,Route } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <DashboardHead />
      <Routes>
        <Route path="manage-page" element={<ManagePage/>} />
        <Route path="manage-of-sp" element={<ManageOfSP/>}/>
          <Route path="order-page" element={<OrderPage/>}/>
      </Routes>
    </div>
  );
}
