import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function CardComponent(props) {

  let moment = require("moment-jalaali");
  return (
    <Card className="cardStyle">
      <Link to={{ pathname: "..//mobile" }} state={props.item}>
        <CardHeader
          title={props.item.name}
          subheader={moment(props.item.createdAt).format("jYYYY/jM/jD")}
          color="primary"
        />

        <CardMedia
          component="img"
          height="194"
          image={`http://localhost:3002/files/${props.item.thumbnail}`}
          alt={props.item.name}
        />
      </Link>
      <Button>افزودن به سبد خرید</Button>
    </Card>
  );
}
