import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  itemsSelector,
} from "../redux/productSlice";
import { categorySelector } from "../redux/categorySlice";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import { v4 as uuidv4 } from "uuid";


export default function HomePageCard() {

  const { items } = useSelector(itemsSelector);
  const { category } = useSelector(categorySelector);

  return (
    <div>
      {category.map((cat) => (
        <div className="homePage">
          <Link to={{ pathname: `list-brands/brands/${cat.name}` }} 
          state={cat}
          className="brand">
            <h1>{cat.name}</h1>
          </Link>
          <div className="homePageCardWrapper" key={uuidv4()}>
            {items.map((item) => {
              if (cat.id == item.category) {
                return <CardComponent item={item} key={uuidv4()} />;
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
