import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "نام کالا", width: 130 },
  { field: "price", headerName: "قیمت", width: 130 },
  {
    field: "count",
    headerName: "تعداد",
    type: "number",
    width: 90,
  },
  {
    field: "action",
    headerName: "",
    renderCell: (params) => {
      const handleDelete = (e) => {
        // service.removeProduct(e);
        // setState(!state);
      };
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleDelete(params.row.id)}
        >
          حذف
        </Button>
      );
    },
  },
];

const rows = [{ id: 1, name: "Snow", price: "Jon", count: 35 }];

export default function DataTable() {
  return (
    <div className="managePage">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Link to={{pathname:'..//order'}}>
        <Button
          variant="contained"
          color="success"
          sx={{ float: "left", marginTop: "20px", color: "black" }}
        >
          نهایی کردن سبد خرید
        </Button>
      </Link>
    </div>
  );
}
