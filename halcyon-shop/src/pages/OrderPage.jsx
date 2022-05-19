import * as React from "react";
import {useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { fetchOrder,orderSelector } from "../redux/orderSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function CustomizedTables() {
  let moment = require("moment-jalaali");
  const dispatch = useDispatch()
  const {orders} = useSelector(orderSelector)
  useEffect(()=>{
    dispatch(fetchOrder())
  },[])

  
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
        <div className="managePageTable">
          <table>
            <tr>
              <th>نام کاربر</th>
              <th>مجموع مبلغ</th>
              <th>زمان ثبت سفارش</th>
              <th></th>
            </tr>

            {Object.values(orders).map((row) => (
              <tr className="bodyTr" key={row.id}>
                <td>
                  {row.customerDetail.firstName +
                    " " +
                    row.customerDetail.lastName}
                </td>
                <td align="right">{row.purchaseTotal}</td>
                <td align="right">
                  {moment(row.orderDate).format("jYYYY/jM/jD")}
                </td>
                <td align="right">
                  <a>بررسی سفارش</a>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
 
  );
}
