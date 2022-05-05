import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from '../components/SideBar'
import ManageOfSP from '../pages/ManageOfSP'
import OrderPage from '../pages/OrderPage'
import ManagePage from '../pages/ManagePage'


export default function Dashboard() {
  return (
    <div>
        <SideBar/>
        <Routes>
            <Route path='/manage_of_sp' element={<ManageOfSP/>}/>
            <Route path='/order_page' element={<OrderPage/>}/>
            <Route path='/managepage' element={<ManagePage/>}/>
        </Routes>
    </div>
  )
}
