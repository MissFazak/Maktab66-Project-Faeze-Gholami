import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import Craousel from "react-material-ui-carousel";
import Item from "../components/Item";
import { Button } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddToCard from "../components/AddToCard";


export default function MediaControlCard() {

  let state = useLocation();
  const [map, setMap] = React.useState(state.state);
  const gallery = map.images;
  console.log(Number(map.price).toLocaleString());
  let button;
  if (map.count > 0) {
    button = (
      <AddToCard count={map.count} map={map}/>
    );
  } else {
    button = (
      <Button variant="contained" color="error" sx={{ marginY: "20px" }}>
        <NotificationsActiveIcon />
        موجود شد خبر بده
      </Button>
    );
  }

  return (
    <Card sx={{ display: "flex", margin: "auto" }}>
      <Box sx={{ width: "40%" }}>
        <Craousel
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          indicators={false}
        >
          {gallery.map((item) => (
            <Item>
              <img
                style={{ height: "80%" }}
                src={`http://localhost:3002/files/${item}`}
              />
            </Item>
          ))}
        </Craousel>
        <div className="thumbnail">
          {gallery.map((item) => (
            <img src={`http://localhost:3002/files/${item}`} />
          ))}
        </div>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            {map.name}
          </Typography>
          <Typography component="div" variant="h6">
            قیمت : {Number(map.price).toLocaleString()} تومان
          </Typography>
          
          <Typography component="div" variant="h6">
            موجودی : {map.count}
          </Typography>
          {button}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ height: "200px", overflow: "auto" }}
          >
            {map.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
