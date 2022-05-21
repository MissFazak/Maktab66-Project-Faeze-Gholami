import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "../redux/productSlice";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomizedTables() {
  const dispatch = useDispatch();
  const { items } = useSelector(itemsSelector);
  
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "thumbnail",
      headerName: "تصویر",
      width: 150,
    },
    {
      field: "name",
      headerName: "نام کالا",
      width: 150,
    },
    {
      field: "category",
      headerName: "دسته‌بندی",
      width: 110,
    },
    {
      field: "but",
      headerName: "",
      width: 160,
    },
  ];
  const rows = items.map((item) => {
    return { id: item.id,thumbnail:item.thumbnail ,name: item.name, category: item.category ,but:<h1>hi</h1>};
  });
  
  console.log(rows);

  return (
    <div style={{ width: "100%" }}>
      <DataGrid rows={rows} columns={columns} autoHeight pageSize={5}/>
    </div>
  );
}
