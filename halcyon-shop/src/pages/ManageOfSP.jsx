import * as React from "react";
import {useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { fetchItems,itemsSelector } from "../redux/productSlice";
import { Button } from "@mui/material";

export default function CustomizedTables() {
  const dispatch = useDispatch()
  const {items} = useSelector(itemsSelector)
  useEffect(()=>{
    dispatch(fetchItems())
  },[])
  
  return (
    <div className="managePage">
      <div className="topTable">
        <h3>مدیریت موجودی و قیمت‌ها</h3>
        <Button variant="contained" color="primary">ذخیره</Button>
      </div>
      <div className="managePageTable">
        <table>
          <tr>
            <th>کالا</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
          
          {Object.values(items).map((row) => (
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
