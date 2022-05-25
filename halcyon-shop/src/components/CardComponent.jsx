import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Item from "./Item";
import MobileItem from "./MobileItem";

export default function CardComponent(props) {
  let moment = require("moment-jalaali");

  return (
    <MobileItem>
      <Card className="cardStyle">
        <Link to={{ pathname: "..//mobile" }} state={props.item}>
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
        >
          افزودن به سبد خرید
        </Button>
      </Card>
    </MobileItem>
  );
}
