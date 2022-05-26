import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "../redux/productSlice";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import service from "../redux/http";
export default function CustomizedTables() {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const { items } = useSelector(itemsSelector);
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  // const handleEdit = async (params) => {
  //   const {id, field, value} = params;
  //   console.log(params);
  //   const array = items.map((r) => {
  //     if (r.id === id) {
  //       return { ...r, [field]: value };
  //     } else {
  //       return { ...r };
  //     }
  //   });
  //   setState(array);
  //   console.log(state);
  //   service.updateProduct(id,array)
  // };

  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    {
      field: "name",
      headerName: "نام کالا",
      width: 150,
    },
    {
      field: "price",
      headerName: "دسته‌بندی",
      width: 110,
      editable: true,
    },
    {
      field: "count",
      headerName: "تعداد",
      width: 200,
      sortable: false,
      editable: true,
    },
  ];
  const rows = items.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: Number(item.price).toLocaleString(),
      count: item.count,
    };
  });

  return (
    <div className="managePage">
      <div className="topTable">
        <h3>مدیریت موجودی و قیمت‌ها</h3>
        <Button variant="contained" color="primary" >
          ذخیره
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        pageSize={5}
        
      />
    </div>
  );
}
