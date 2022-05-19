import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "../redux/productSlice";
import { fetchCategory, categorySelector } from "../redux/categorySlice";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function HomePageCard() {
  let moment = require("moment-jalaali");
  const dispatch = useDispatch();
  const { items } = useSelector(itemsSelector);
  const { category } = useSelector(categorySelector);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
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
                  <Card className="cardStyle">
                      <Link to={{ pathname: "mobile" }} state={item}>
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
                  </Link>
                    </Card>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
