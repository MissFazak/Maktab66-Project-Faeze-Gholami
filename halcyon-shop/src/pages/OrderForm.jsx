import React from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";

const OrderForm = () => {
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
          </form>
            <Button variant="contained" color="success" type="submit">
              پرداخت
            </Button>
        </div>
    </div>
  );
};

export default OrderForm;
