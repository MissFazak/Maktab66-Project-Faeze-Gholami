import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, categorySelector } from "../redux/categorySlice";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useMemo } from "react";
import { api } from "../redux/api";
import service from "../redux/http";

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

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [gallery, setGallery] = useState([]);
  const [des, setDes] = useState();
  const dispatch = useDispatch();
  const { category } = useSelector(categorySelector);
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      name: "",
      category: "",
      price: "",
      count: "",
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      service.creatProduct(data);
      setGallery([]);
    },
  });
  console.log(formik.values.image);
  const data = {
    id: formik.values.id,
    name: formik.values.name,
    category: formik.values.category,
    price: formik.values.price,
    count: formik.values.count,
    description: des,
    image: gallery,
    thumbnail: gallery[0],
    createdAt: new Date().getTime(),
  };

  const selectFileHandler = (e) => {
    formik.setFieldValue("image", e.currentTarget.files[0]);
  };

  const uploadHandler = () => {
    const formData = new FormData();
    Object.entries(formik.values).map((item) => {
      formData.append(item[0], item[1]);
    });
    api
      .post("/upload", formData, {})
      .then((res) => setGallery((gallery) => [...gallery, res.data.filename]));
  };

  const onContentStateChange = (context) => {
    setDes(context.blocks[0].text);
  };
console.log(des);
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        {props.name}
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
            />
            <button type="button" onClick={uploadHandler}>
              آپلود
            </button>
            <div className="thumbnail">
              {gallery.map((photo) => (
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
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <label htmlFor="category">دسته بندی</label>
            <select
              value={formik.values.category}
              name="category"
              onChange={formik.handleChange}
            >
              {category.map((name) => (
                <option value={name.id} key={name.id}>
                  {name.name}
                </option>
              ))}
            </select>
            <label htmlFor="price">قیمت</label>
            <input
              id="price"
              name="price"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            <label htmlFor="count">تعداد</label>
            <input
              id="count"
              name="count"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.count}
            />
            <Editor
              // editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              // onEditorStateChange={onEditorStateChange}
              onContentStateChange={onContentStateChange}
            />
            <button type="submit">ذخیره</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
