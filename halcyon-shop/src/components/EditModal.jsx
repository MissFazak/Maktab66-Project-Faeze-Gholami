import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { api } from "../redux/api";
import service from "../redux/http";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "300px",
  overflow: "auto",
};

export default function BasicModal({ category, item, setState, state }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [gallery, setGallery] = useState([]);
  const [name, setName] = useState(item?.name);
  console.log(name);

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      image: "",
      name: "",
      category: "",
      price: "",
      count: "",
      description: "",
    },
    onSubmit: () => {
      alert("اطلاعات شما با موفقیت ثبت گردید");
      service.creatProduct(data);
      handleClose();
      setState(!state);
    },
  });

  const data = {
    id: item?.id,
    name: item?.name,
    category: category?.find(({ id }) => id == item?.category)?.name,
    price: item?.price,
    count: item?.count,
    description: item?.description,
    image: item?.images,
  };

  //get images as file
  const selectFileHandler = (e) => {
    formik.setFieldValue("image", e.currentTarget.files[0]);
  };
  //save photos in gallery
  const uploadHandler = () => {
    const formData = new FormData();
    Object.entries(formik.values).map((item) => {
      formData.append(item[0], item[1]);
    });
    api
      .post("/upload", formData, {})
      .then((res) => setGallery((gallery) => [...gallery, res.data.filename]));
  };
  //save description

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        ویرایش
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="formBody">
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="img">تصویر کالا</label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={selectFileHandler}
              onBlur={formik.handleBlur}
            />
            <button type="button" onClick={uploadHandler}>
              آپلود
            </button>
            <div className="thumbnail">
              {data?.image?.map((photo) => (
                <img
                  src={`http://localhost:3002/files/${photo}`}
                  key={uuidv4()}
                />
              ))}
            </div>

            <label htmlFor="name">نام کالا</label>
            <input
              id="name"
              name="name"
              type="text"
              // onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="category">دسته بندی</label>
            <select
              // value={data?.category}
              name="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option>{data?.category}</option>
            </select>
            <label htmlFor="price">قیمت</label>
            <input
              id="price"
              name="price"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={data?.price}
            />
            <label htmlFor="count">تعداد</label>
            <input
              id="count"
              name="count"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={data?.count}
            />
            {/* <Editor
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onContentStateChange={onContentStateChange}           
            /> */}
            <label htmlFor="description">توضیحات</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ marginBottom: "10px" }}
              value={data?.description}
            />

            <button type="submit">ذخیره</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
