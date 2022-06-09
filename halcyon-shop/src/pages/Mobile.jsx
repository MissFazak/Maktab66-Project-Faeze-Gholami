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
    <Card sx={{ display: "flex", margin: "auto", flexDirection:{md:'row',xs:'column'} }}>
      <Box sx={{ width: {md:"50%",xs:'100%'} }}>
        
          <Craousel
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            indicators={false}
            height={900}
          >
            {gallery.map((item) => (
              
                <div className="itemCraousel">
                  <img
                    src={`http://localhost:3002/files/${item}`}
                  />
                </div>
              
            ))}
          </Craousel>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: {md:"70%",xs:'100%'} }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography sx={{fontFamily:'Rubik'}} component="div" variant="h5" color='secondary'>
            {map.name}
          </Typography>
          <Typography variant="subtitle1">
            قیمت : {Number(map.price).toLocaleString()} تومان
          </Typography>
          
          <Typography variant="subtitle1">
            موجودی : {map.count}
          </Typography>
          {button}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ height: "200px", overflow: "auto",width:'90%' }}
          >
            {map.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
