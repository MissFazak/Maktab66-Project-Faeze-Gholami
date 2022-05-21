import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, Select, TextField } from '@mui/material';
import SelectInput from '@mui/material/Select/SelectInput';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">افزودن</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography>تصویر کالا</Typography>
            <input type='file'/>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            نام کالا:
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <FormControl>
                <Typography>دسته بندی</Typography>
                <InputLabel>انتخاب کنید</InputLabel>
                <Select>
                    
                </Select>
            </FormControl>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            توضیحات: 
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}
