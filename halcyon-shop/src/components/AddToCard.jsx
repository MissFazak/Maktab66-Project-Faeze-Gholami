import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function AddToCard({ count, map }) {
  const dispatch = useDispatch();
  const message = document.getElementById("alertText");
  const [counter, setCounter] = useState(0);
  const increase = (map) => {
    dispatch(addToCart(map));
    if (counter < count) {
      setCounter(counter + 1);
    } else {
      message.innerHTML = "موجودی کافی نیست";
    }
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      {counter > 0 ? (
        <>
          <Box sx={{ display: "flex" }}>
            <Button onClick={()=>increase(map)}>+</Button>
            <Typography>{counter}</Typography>
            <Button onClick={decrease}>
              {counter == 1 ? <DeleteIcon /> : "-"}
            </Button>
          </Box>
          <Typography id="alertText"></Typography>
        </>
      ) : (
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "5px", margin: "10px" }}
          onClick={() => increase(map)}
        >
          افزودن به سبد خرید
        </Button>
      )}
    </>
  );
}
