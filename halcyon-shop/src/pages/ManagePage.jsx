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
  },[dispatch])
  return (
    <div className="managePage">
      
      <div className="topTable">
        <h3>مدیریت کالاها</h3>
        <Button variant="contained" color="primary">افزودن کالا</Button>
      </div>
      <div className="managePageTable">
        <table>
          <tr>
            <th>تصویر</th>
            <th>نام کالا</th>
            <th>دسته بندی</th>
            <th></th>
          </tr>
          
          {Object.values(items).map((row) => (
                <tr className="bodyTr" key={row.id}>
                  <td>
                    <img src={`http://localhost:3002/files/${row.thumbnail}`} />
                  </td>
                  <td align="right">{row.name}</td>
                  <td align="right">{row.category}</td>
                  <td align="right" sx={{display:"inline"}}>
                    <Button variant="contained" color="primary" sx={{margin:'10px'}}>ویرایش</Button>
                    <Button variant="contained" color="primary">حذف</Button>
                  </td>
                </tr>
              ))}
          
        </table>
      </div>
    </div>
  );
}
