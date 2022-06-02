import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import {
  decreaseCartItem,
  removeFromCart,
  addToCart,
  clearCart,
  cartSelector,
} from "../redux/cartSlice";

export default function DataTable() {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  console.log(cart);

  const price = cart.cartItems?.map(
    (price) => price.price * price.cartQuantity
  );
  const total = price?.reduce((a, b) => a + b, 0);
  localStorage.setItem("total", total);

  const handleClearCart = () => { 
    dispatch(clearCart())
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "نام کالا", width: 130 },
    { field: "price", headerName: "قیمت", width: 130 },
    {
      field: "count",
      headerName: "تعداد",
      type: "number",
      width: 190,
      renderCell: (params) => {
        const handleDecrease = (e) => {
          dispatch(decreaseCartItem(e));
        };

        const handleIncrease = (e) => {
          dispatch(addToCart(e));
        };
        return (
          <>
            <Box sx={{ display: "flex" }}>
              <Button onClick={() => handleIncrease(params.row)}>+</Button>
              <Typography>{params.row.count}</Typography>
              <Button onClick={() => handleDecrease(params.row)}>-</Button>
            </Box>
            <Typography id="alertText"></Typography>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "",
      renderCell: (params) => {
        const handleDelete = (e) => {
          dispatch(removeFromCart(e));
        };
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleDelete(params.row)}
          >
            حذف
          </Button>
        );
      },
    },
  ];
  const rows = cart.cartItems?.map((cartItem) => {
    return {
      id: cartItem.id,
      name: cartItem.name,
      price: cartItem.price,
      count: cartItem.cartQuantity,
    };
  });
  return (
    <div className="managePage">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      <Box sx={{ marginTop: "20px", display:'flex', justifyContent:'space-between' }}>
        مجموع سبد خرید: {cart.cartTotalAmount}
        <Button color='error' variant="contained" onClick={handleClearCart}>خالی کردن سبد خرید</Button>
        <Link to={{ pathname: "..//order" }}>
          <Button
            variant="contained"
            color="success"
            sx={{ float: "left", color: "black" }}
          >
            نهایی کردن سبد خرید
          </Button>
        </Link>
      </Box>
    </div>
  );
}
