import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "../redux/productSlice";
import { fetchCategory, categorySelector } from "../redux/categorySlice";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";

export default function HomePageCard() {
  const dispatch = useDispatch();
  const { items } = useSelector(itemsSelector);
  const { category } = useSelector(categorySelector);
  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  return (
    <div>
      {Object.values(category).map((cat) => (
        <div className="homePageCardWrapper">
          <Link to={{ pathname: "list-brands" }}>
            <h1>{cat.name}</h1>
          </Link>
          <div className="homePageCard">
            {Object.values(items).map((item) => {
              if (cat.id == item.category) {
                return (
                  <CardComponent item={item}></CardComponent>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
