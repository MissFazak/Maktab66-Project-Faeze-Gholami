import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import service from "../redux/http";
import { orderSelector } from "../redux/orderSlice";

export default function Payment() {
  const dispatch = useDispatch();
  const buyed = JSON.parse(localStorage.getItem("order"));

  const handlePaymentSuccess = () => {
    service.updateOrder(buyed.id, { orderStatus: 3 });
    localStorage.removeItem("order");
    dispatch(clearCart());
  };
  const handlePaymentFailed = () => {
    service.updateOrder(buyed.id, { orderStatus: 4 });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2" sx={{ textAlign: "center", marginY: "5%" }}>
        به صفحه پرداخت فیک ما خوش آمدید
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Link to={{ pathname: "..//success" }}>
          <Button
            onClick={handlePaymentSuccess}
            variant="contained"
            color="success"
          >
            پرداخت شد
          </Button>
        </Link>
        <Link to={{ pathname: "..//failed" }}>
          <Button
            variant="contained"
            color="error"
            onClick={handlePaymentFailed}
          >
            پرداخت نشد
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
