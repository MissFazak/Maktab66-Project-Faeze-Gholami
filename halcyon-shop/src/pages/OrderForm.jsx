import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AdapterJalali from "@date-io/date-fns-jalali";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../redux/cartSlice";
import service from "../redux/http";
import { orderSelector } from "../redux/orderSlice";
import { Link } from "react-router-dom";

const OrderForm = () => {
  // const dispatch = useDispatch()
  const cart = useSelector(cartSelector);
  const {orders} = useSelector(orderSelector)
  const last = orders.slice(-1)[0]
  const orderNumber = last?.orderNumber + 1
  const [value, setValue] = React.useState(null);
  console.log(value);
  const timeStamp = Date.parse(value);
  const newDate = new Date();
  const orderTimeStamp = newDate.getTime();

  function disablePrevDates(startDate) {
    const startSeconds = Date.parse(startDate);
    return (date) => {
      return Date.parse(date) < startSeconds;
    };
  }
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 3);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const data = {
    customerDetail: {
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      phoneNumber: formik.values.phoneNumber,
      address: formik.values.address,
    },
    id: uuidv4(),
    orderNumber: orderNumber,
    orderDate: orderTimeStamp,
    purchaseTotal: cart.cartTotalAmount,
    orderStatus: "5",
    delivery: timeStamp,
    deliveryAt: "",
    orderItems : 
      
    cart.cartItems.map(item=>{
      return{
        name:item?.name,
        thumbnail:item?.thumbnail,
        price:item?.price,
        quantity:item?.cartQuantity,
      }
    })
      
    
  };

  const handlePayment = () => {
    service.creatOrder(data);
    localStorage.setItem("order", JSON.stringify(data))
    console.log(data);
  };

  return (
    <div className="orderBody">
      <div className="orderForm">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">نام</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label htmlFor="lastName">نام خانوادگی</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <label htmlFor="email">آدرس</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="phoneNumber">تلفن همراه</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="date">تاریخ تحویل</label>
          <LocalizationProvider dateAdapter={AdapterJalali}>
            <DatePicker
              id="date"
              name="date"
              value={value}
              shouldDisableDate={disablePrevDates(startDate)}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField sx={{ borderBottom: "none" }} {...params} />
              )}
            />
          </LocalizationProvider>
        </form>
        <Link to={{pathname:'..//payment'}}>
          <Button
            variant="contained"
            color="success"
            type="submit"
            onClick={handlePayment}
          >
            پرداخت
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderForm;
