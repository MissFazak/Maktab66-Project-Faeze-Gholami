import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchItems,
  itemsSelector,
  updateItems,
  deleteItem,
} from "../redux/productSlice";
import { fetchCategory, categorySelector } from "../redux/categorySlice";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import ItemModal from "../components/ItemModal";
import service from "../redux/http";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function CustomizedTables() {
  const dispatch = useDispatch();
  const { items } = useSelector(itemsSelector);
  const { category } = useSelector(categorySelector);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    {
      field: "thumbnail",
      headerName: "تصویر",
      width: 50,
      renderCell: (params) => {
        return (
          <div>
            <img style={{ width: "30px" }} src={params.row.thumbnail} alt="" />
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "نام کالا",
      width: 150,
      editable: true,
    },
    {
      field: "category",
      headerName: "دسته‌بندی",
      width: 110,
    },
    {
      field: "action",
      headerName: "",
      width: 150,
      sortable: false,
      renderCell: (params) => {
        const handleEdit = (e) => {
          service.updateProduct(e,params.row)
          console.log(params.row);
        };
        const handleDelete = (e) => {
          service.removeProduct(e);
          console.log(e);
        };
        return (
          <>
            <Button onClick={() => handleEdit(params.row.id)}>
              <EditIcon /> ویرایش
            </Button>
            <Button onClick={() => handleDelete(params.row.id)}>
              <DeleteForeverIcon /> حذف
            </Button>
          </>
        );
      },
    },
  ];
  const rows = items.map((item) => {
    return {
      id: item.id,
      thumbnail: `http://localhost:3002/files/${item.thumbnail}`,
      name: item.name,
      category: category.map((el) => {
        if (el.id == item.category) {
          return el.name;
        }
      }),
    };
  });
  return (
    <div className="managePage">
      <div className="topTable">
        <h3>مدیریت موجودی و قیمت‌ها</h3>
        <ItemModal />
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        pageSize={5}
        rowHeight={70}
        disableSelectionOnClick
      />
    </div>
  );
}
