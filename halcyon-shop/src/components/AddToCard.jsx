import { Button, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartSelector, decreaseCartItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
import service from "../redux/http";

export default function AddToCard({ count, map }) {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  console.log(map.count);
  const findQuantity = cart.cartItems.find(
    (item) => item.id === map.id
  )?.cartQuantity;

  const increase = (map) => {
    dispatch(addToCart(map));
    service.updateProduct(map.id, {count: map.count--});
  };
  const decrease = (e) => {
    if (findQuantity > 0) {
      dispatch(decreaseCartItem(e));
      service.updateProduct(map.id,{count: map.count++});
    }
  };

  return (
    <>
      {findQuantity > 0 ? (
        <>
          <Box sx={{ display: "flex" }}>
            <Button onClick={() => increase(map)}>+</Button>
            <Typography>{findQuantity}</Typography>
            <Button onClick={() => decrease(map)}>
              {findQuantity == 1 ? <DeleteIcon /> : "-"}
            </Button>
          </Box>
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
