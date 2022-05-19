import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "../redux/productSlice";
import { fetchCategory, categorySelector } from "../redux/categorySlice";
import { useLocation } from "react-router-dom";

export default function MediaControlCard() {
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

  let state = useLocation();
  const [map, setMap] = React.useState(state.state);
  const gallery = map.images;
  console.log(gallery);

  return (
    <Card sx={{ display: "flex" }}>
      {gallery.map((item) => (
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`http://localhost:3002/files/${item}`}
          alt="Live from space album cover"
        />
      ))}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            {map.name}
          </Typography>
          <Typography component="div" variant="h5">
            قیمت:{map.price}
          </Typography>
          <Typography component="div" variant="h5">
            موجودی:{map.count}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {map.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
