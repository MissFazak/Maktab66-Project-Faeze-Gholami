import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../assets/img/logoLight.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function Header() {
  const navigateToHome = useNavigate();
  const homePageNav = () => {
    navigateToHome("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Box
            component="img"
            sx={{
              width: "10%",
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              cursor: "pointer",
              flexFlow:1
            }}
            alt="The house from the offer."
            src={Logo}
            onClick={homePageNav}
          />
          <Typography
            align="right"
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            color="primary"
          >
            فروشگاه موبایل هالسیون
          </Typography>
          <Box sx={{flexGrow:1}} color="primary" >
            <Tooltip title="محصولات">
              <Link to={{}}>محصولات </Link>
            </Tooltip>
            <Tooltip title="سوالات متداول">
              <Link to={{}}>سوالات متداول </Link>
            </Tooltip>
            <Tooltip title="ارتباط با ما">
                <Link to={{}}>ارتباط با ما </Link>      
            </Tooltip>
            <Tooltip title="درباره ما">
              <Link to={{}}>درباره ما </Link>
            </Tooltip>
          </Box>
          <Box sx={{flexGrow:1}} color="primary">
            <Link to={{ pathname: `login` }}>مدیریت </Link>
            <Link to={{ pathname: `cart-page` }}>
              سبد خرید 
              <ShoppingBasketIcon
                fontSize="medium"
                sx={{ marginBottom: "-6px", paddingX: "3px" }}
              />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
