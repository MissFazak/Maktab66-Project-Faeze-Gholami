import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AdapterJalali from "@date-io/date-fns-jalali";

const OrderForm = () => {
  const [value, setValue] = React.useState(null);
  const timeStamp = Date.parse(value) / 1000;
  console.log(timeStamp);

  function disablePrevDates(startDate) {
    const startSeconds = Date.parse(startDate);
    return (date) => {
      return Date.parse(date) < startSeconds;
    };
  }
  const startDate = new Date()
  startDate.setDate(startDate.getDate() + 3);

  const data = {
    coust
  }

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
        <Button variant="contained" color="success" type="submit">
          پرداخت
        </Button>
      </div>
    </div>
  );
};

export default OrderForm;
