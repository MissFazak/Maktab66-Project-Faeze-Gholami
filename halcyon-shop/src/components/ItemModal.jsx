import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, Select, TextField } from "@mui/material";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
  height:'300px',
  overflow:'auto'
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography>تصویر کالا</Typography>
          <input type="file" style={{width:'100%'}}/>
          <Typography id="modal-modal-title">
            نام کالا:
          </Typography>
          <TextField id="outlined-basic" label="نام کالا" variant="outlined" sx={{width:'100%'}} />
          <FormControl sx={{width:'100%'}}>
            <Typography>دسته بندی</Typography>
            <Select></Select>
          </FormControl>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            توضیحات:
          </Typography>
          <Editor
            // editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            // onEditorStateChange={this.onEditorStateChange}
          />
        </Box>
      </Modal>
    </div>
  );
}
