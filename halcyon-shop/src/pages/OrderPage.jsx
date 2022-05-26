import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder, orderSelector } from "../redux/orderSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

export default function CustomizedTables() {
  const [rows, setRows] = useState([]);
  const [all,setAll] = useState([])
  let moment = require("moment-jalaali");
  const dispatch = useDispatch();
  const { orders } = useSelector(orderSelector);
  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    {
      field: "name",
      headerName: "نام کاربر",
      width: 150,
    },
    {
      field: "price",
      headerName: "مجموع مبلغ",
      width: 110,
    },
    {
      field: "time",
      headerName: "زمان ثبت سفارش",
      width: 200,
      sortable: false,
    },
    {
      field: "action",
      headerName: "",
      width: 170,
      sortable: false,
      renderCell: (params) => {
        const handleStatus = () => {};
        return (
          <>
            <Button variant="contained" color="primary" onClick={handleStatus}>
              وضعیت سفارش
            </Button>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    orders.map((item) =>
      setRows((rows) => [
        ...rows,
        {
          id: item.id,
          name:
            item.customerDetail.firstName + " " + item.customerDetail.lastName,
          price: Number(item.purchaseTotal).toLocaleString(),
          time: moment(item.orderDate).format("jYYYY/jM/jD"),
          status: item.orderStatus,
        },
      ])
    );
  }, [orders]);
  useEffect(() => {
    orders.map((item) =>
      setAll((rows) => [
        ...rows,
        {
          id: item.id,
          name:
            item.customerDetail.firstName + " " + item.customerDetail.lastName,
          price: Number(item.purchaseTotal).toLocaleString(),
          time: moment(item.orderDate).format("jYYYY/jM/jD"),
          status: item.orderStatus,
        },
      ])
    );
  }, [orders]);

  const handleChange = (e) => {
    if (e.target.value === "recived") {
      return setRows(all.filter((item) => item.status === 6 || item.status === 1));
    } else if (e.target.value === "waiting") {
      return setRows(all.filter((item) => item.status === 3 || item.status === 5));
    }else{
    }
  };
  return (
    <div className="managePage">
      <div className="topTable">
        <h3>مدیریت سفارش‌ها</h3>
        <FormControl className="radioGroup">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ paddingTop: "20px" }}
            onChange={handleChange}
          >
            <FormControlLabel
              value="recived"
              control={<Radio />}
              label="سفارش‌های تحویل داده شده"
            />
            <FormControlLabel
              value="waiting"
              control={<Radio />}
              label="سفارش‌های در انتظار تحویل"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <DataGrid rows={rows} columns={columns} autoHeight pageSize={5} />
    </div>
  );
}
