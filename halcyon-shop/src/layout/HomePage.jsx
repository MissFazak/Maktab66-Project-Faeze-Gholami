import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../pages/Product";
import Login from "../pages/Login";
import CartPage from "../pages/CartPage";

import { Route, Routes } from "react-router-dom";
import CarouselCom from "../components/Carousel";
import HomePageCard from "../components/HomePageCard";

export default function HomePage() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/product" element={<Product/>} />
        <Route path="login" element={<Login/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
      <CarouselCom/>
      <HomePageCard/>
      {/* <Footer /> */}
    </div>
  );
}
