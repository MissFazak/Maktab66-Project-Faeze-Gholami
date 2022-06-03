import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MobileItem from "./MobileItem";
import AddToCard from "./AddToCard";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import service from "../redux/http";


export default function CardComponent(props) {
  const dispatch = useDispatch()
  
  // console.log(props.item.count);
  const increase = (e)=>{
    dispatch(addToCart(e))
    service.updateProduct(e.id, {count:e.count--});
  }

  return (
    <MobileItem>
      <Card className="cardStyle">
        <Link to={{ pathname: `..//mobile/${props.item.id}` }} state={props.item}>
          <CardHeader
            disableTypography
            title={props.item.name}
            color="primary"
          />
          <CardMedia
            component="img"
            height="194"
            image={`http://localhost:3002/files/${props.item.thumbnail}`}
            alt={props.item.name}
          />
        </Link>
        <Button
        variant="contained"
        color="primary"
        sx={{ padding: "5px", margin: "10px" }}
        onClick={() => increase(props.item)}
        >افزودن به سبد کالا</Button>
      </Card>
    </MobileItem>
  );
}
