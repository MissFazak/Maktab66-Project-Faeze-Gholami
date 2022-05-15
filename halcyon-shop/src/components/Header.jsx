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
              flexFlow: 1,
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
          <Box
            sx={{ flexGrow: 1, flexDirection: "row", display: "flex" }}
            color="primary"
          >
            <Typography variant="h5">
              <Link to={{}}>محصولات </Link>
            </Typography>
            <Typography variant="h5">
              <Link to={{}}>سوالات متداول </Link>
            </Typography>
            <Typography variant="h5">
              <Link to={{}}>ارتباط با ما </Link>
            </Typography>
            <Typography variant="h5">
              <Link to={{}}>درباره ما </Link>
            </Typography>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}
            color="primary"
          >
            <Typography variant="h5">
              <Link to={{ pathname: `login` }}>مدیریت </Link>
            </Typography>
            <Typography variant="h5">
              <Link to={{ pathname: `cart-page` }}>
                سبد خرید
                <ShoppingBasketIcon
                  fontSize="medium"
                  sx={{ marginBottom: "-6px", paddingX: "3px" }}
                />
              </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
