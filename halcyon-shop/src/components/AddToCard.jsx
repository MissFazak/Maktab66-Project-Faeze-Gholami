import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function AddToCard() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      {counter > 0 ? (
        <Box sx={{ display: "flex" }}>
          <Button onClick={increase}>+</Button>
          <Typography>{counter}</Typography>
          <Button onClick={decrease}>{counter==1?<DeleteIcon/>:'-'}</Button>
        </Box>
      ) : (
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "5px", margin: "10px" }}
          onClick={increase}
        >
          افزودن به سبد خرید
        </Button>
      )}
    </>
  );
}
