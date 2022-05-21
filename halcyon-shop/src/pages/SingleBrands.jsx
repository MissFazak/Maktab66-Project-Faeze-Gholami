import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { fetchItems, itemsSelector } from "../redux/productSlice";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";

export default function SingleBrands() {
  let moment = require("moment-jalaali");

  const dispatch = useDispatch();
  const { items } = useSelector(itemsSelector);
  let state = useLocation();
  const map = state.state
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="homePageCardWrapper" style={{ paddingTop: "50px" }}>
      <div className="homePageCard">
        {items.map((item) => {
          if (item.category == map.id) {
            return (
              <Card className="cardStyle" key={uuidv4()}>
                <CardHeader
                  title={item.name}
                  subheader={moment(item.createdAt).format("jYYYY/jM/jD")}
                  color="primary"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={`http://localhost:3002/files/${item.thumbnail}`}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="body2" color="secondary">
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}
