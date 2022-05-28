import { categorySelector } from "../redux/categorySlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { itemsSelector } from "../redux/productSlice";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import ItemModal from "../components/ItemModal";
import service from "../redux/http";

export default function CustomizedTables() {
  const { items } = useSelector(itemsSelector);
  const { category } = useSelector(categorySelector);
  console.log(category);

  const handleDelete = (e) => {
    service.removeProduct(e);
    // window.location.reload()
  };
  const handleEdit = (e) => {
    items?.find((item) => item.id == e.id);
  };
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
      width: 100,
    },
    {
      field: "action",
      headerName: "",
      width: 170,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <div
              style={{ paddingInline: "10px" }}
              onClick={() => handleEdit(params.row.id)}
            >
              <ItemModal name={"ویرایش"} />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDelete(params.row.id)}
            >
              حذف
            </Button>
          </>
        );
      },
    },
  ];
  const rows = items?.map((item) => {
    return {
      id: item.id,
      thumbnail: `http://localhost:3002/files/${item.thumbnail}`,
      name: item.name,
      category: category?.find((el) => {
        return el.id == item.category;
      }),
    };
  });
  return (
    <div className="managePage">
      <div className="topTable">
        <h3>مدیریت موجودی و قیمت‌ها</h3>
        <ItemModal name="افزودن" category={category} item={items} />
      </div>
      <DataGrid
        className="dataGrid"
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
