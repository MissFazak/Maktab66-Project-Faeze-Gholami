import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { itemsSelector } from "../redux/productSlice";
import CardComponent from "../components/CardComponent";
import { Box } from "@mui/material";

export default function SingleBrands() {
  const { items } = useSelector(itemsSelector);
  let state = useLocation();
  const map = state.state;

  return (
    <div className="homePageCardWrapper">
      {items.map((item) => {
        if (item.category == map.id) {
          return <CardComponent item={item}></CardComponent>;
        }
      })}
    </div>
  );
}
