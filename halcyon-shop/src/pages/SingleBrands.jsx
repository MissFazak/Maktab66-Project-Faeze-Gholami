import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchItems, itemsSelector } from "../redux/productSlice";
import CardComponent from "../components/CardComponent";

export default function SingleBrands() {

  const dispatch = useDispatch();
  const { items } = useSelector(itemsSelector);
  let state = useLocation();
  const map = state.state
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="homePageCardWrapper" style={{ paddingTop: "50px" }}>
      
        {items.map((item) => {
          if (item.category == map.id) {
            return (
             
                <div style={{width:'30%',display:'inline-block'}}>
                  <CardComponent item={item}></CardComponent>
                </div>
              
            );
          }
        })}
     
    </div>
  );
}
