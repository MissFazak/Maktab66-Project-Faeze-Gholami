import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CustomizedTables() {
  const [data, setData] = useState({});
  let moment = require('moment-jalaali')
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get("http://localhost:3002/orders",{headers:{token:token}})
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="managePage">
      <div className="topTable">
        <h3>مدیریت موجودی و قیمت‌ها</h3>
        <button>ذخیره</button>
      </div>
      <div className="managePageTable">
        <table>
          <tr>
            <th>نام کاربر</th>
            <th>مجموع مبلغ</th>
            <th>زمان ثبت سفارش</th>
            <th></th>

          </tr>
          
          
          {Object.values(data).map((row) => (
                <tr className="bodyTr" key={row.id}>
                  <td>
                    {row.customerDetail.firstName+" "+row.customerDetail.lastName}
                  </td>
                  <td align="right">{row.purchaseTotal}</td>
                  <td align="right">{moment(row.orderDate).format('jYYYY/jM/jD')}</td>
                  <td align="right"><a>بررسی سفارش</a></td>
                </tr>
            

              ))}
          
        </table>
      </div>
    </div>
  );
}
