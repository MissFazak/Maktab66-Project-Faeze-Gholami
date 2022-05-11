import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

export default function CustomizedTables() {
  const [data, setData] = useState({});
  const [cat, setCat] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
      .then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3002/category").then((res) => setCat(res.data));
  }, []);

  console.log(cat.id);
  return (
    <div className="managePage">
      <div className="topTable">
        <h3>مدیریت کالاها</h3>
        <button>افزودن کالا</button>
      </div>
      <div className="managePageTable">
        <table>
          <tr>
            <th>تصویر</th>
            <th>نام کالا</th>
            <th>دسته بندی</th>
            <th></th>
          </tr>
          
          {Object.values(data).map((row) => (
                <tr className="bodyTr" key={row.id}>
                  <td>
                    {<img src={row.thumbnail} />}
                  </td>
                  <td align="right">{row.name}</td>
                  <td align="right">{row.category}</td>
                  <td align="right" sx={{display:"inline"}}>
                    <Button sx={{margin:'10px'}}>ویرایش</Button>
                    <Button>حذف</Button>
                  </td>
                </tr>
              ))}
          
        </table>
      </div>
    </div>
  );
}
