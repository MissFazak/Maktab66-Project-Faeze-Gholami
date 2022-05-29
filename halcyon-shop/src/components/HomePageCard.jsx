import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "../redux/productSlice";
import { fetchCategory, categorySelector } from "../redux/categorySlice";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import Carousel from "react-elastic-carousel";
import { v4 as uuidv4 } from "uuid";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
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
        <div className="homePageCardWrapper" key={uuidv4()}>
          <Link to={{ pathname: "list-brands" }}>
            <h1>{cat.name}</h1>
          </Link>
          <Carousel breakPoints={breakPoints}>
            {Object.values(items).map((item) => {
              if (cat.id == item.category) {
                return <CardComponent item={item} key={uuidv4()}/>;
              }
            })}
          </Carousel>
        </div>
      ))}
    </div>
  );
}
