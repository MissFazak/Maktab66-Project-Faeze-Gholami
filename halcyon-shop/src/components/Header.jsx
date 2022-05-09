import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/img/logo.png";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Link } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function SearchAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Box
              component="img"
              sx={{
                width: "10%",
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={Logo}
            />
            <Typography
              align="right"
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              color="primary"
            >
              فروشگاه موبایل هالسیون
            </Typography>

            <Link
              underline="none"
              align="left"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" ,padding:'10px' } }}
              color="primary"
            >
              مدیریت
            </Link>
            <Link
              underline="none"
              align="left"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" ,padding:'10px'} }}
              color="primary"
            >
             سبد خرید
             <ShoppingBasketIcon fontSize="medium" sx={{marginBottom:'-6px', paddingX:'3px'}}/>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
