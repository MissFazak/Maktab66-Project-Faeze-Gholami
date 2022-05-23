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
import { useEffect, useState } from "react";
import { api } from "../redux/api";
import { RMIUploader } from "react-multiple-image-uploader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "300px",
  overflow: "auto",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [gallery, setGallery] = useState([]);
  const dispatch = useDispatch();
  const { category } = useSelector(categorySelector);
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  console.log(gallery);

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      name: "",
      category: "",
      price: "",
      count: "",
      description: "",
      image: gallery,
      thumbnail: gallery[0],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
 
  const selectFileHandler = (e) =>{
      formik.setFieldValue("image", e.currentTarget.files[0]);
      
    
  }

  const uploadHandler = () =>{
    const formData = new FormData();
    Object.entries(formik.values).map((item) => {
      formData.append(item[0], item[1]);
    });
    api
      .post("/upload", formData, {})
      .then((res) =>
        setGallery((gallery) => [...gallery, res.data.filename])
      );
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        افزودن
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            <button type="button" onClick={uploadHandler}>آپلود</button>
              <div className="thumbnail">
                {gallery.map((photo) =>
                    <img src={`http://localhost:3002/files/${photo}`} />
                )}
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
              onEditorStateChange={formik.values.description}
            />
            <button type="submit">ثبت کالا</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
