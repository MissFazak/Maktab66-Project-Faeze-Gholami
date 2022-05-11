import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

export default function CustomizedTables() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
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
            <th>تصویر</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
          
          {Object.values(data).map((row) => (
                <tr className="bodyTr" key={row.id}>
                  <td>
                    {row.name}
                  </td>
                  <td align="right">{row.price}</td>
                  <td align="right">{row.count}</td>
                </tr>
              ))}
          
        </table>
      </div>
    </div>
  );
}
