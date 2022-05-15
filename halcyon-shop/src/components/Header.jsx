import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../assets/img/logoLight.png";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useNavigate } from "react-router-dom";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';

export default function Header() {
  const navigateToHome = useNavigate();
  const homePageNav = () => {
    navigateToHome("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar className="toolbar">
          <Box
            component="img"
            sx={{
              width: "6%",
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
          >
            فروشگاه موبایل هالسیون
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h6">
              <Link to={{ pathname: `login` }}>مدیریت </Link>
            </Typography>
            <Typography variant="h6" sx={{paddingX:'10px'}}>
              <Link to={{ pathname: `cart-page` }}>
                سبد خرید
                <LocalMallIcon
                  fontSize="medium"
                  color="primary"
                  sx={{ marginBottom: "-6px", paddingX: "3px" }}
                />
              </Link>
            </Typography>
          </Box>
        </Toolbar>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "row",
              display: { lg: "flex", sm: "none", xs: "none" },
            }}
          >
            <Typography variant="h5" sx={{ paddingX: "10px" }}>
              <Link to={{}}>محصولات | </Link>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
            <WhatshotIcon
                fontSize="small"
                color="primary"
                sx={{ marginBottom: "-6px"}}
              />
              <Link to={{}}>پرفروشترین‌ها </Link>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
              <LoyaltyIcon
                fontSize="small"
                color="primary"
                sx={{ marginBottom: "-6px"}}
              />
              <Link to={{}}>حراجستان </Link>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
            <HelpCenterIcon
                fontSize="small"
                color="primary"
                sx={{ marginBottom: "-6px"}}
              />
              <Link to={{}}>سوالات متداول </Link>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
            <InfoIcon
                fontSize="small"
                color="primary"
                sx={{ marginBottom: "-6px"}}
              />
              <Link to={{}}>درباره ما </Link>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
            <ContactPhoneIcon
                fontSize="small"
                color="primary"
                sx={{ marginBottom: "-6px"}}
              />
              <Link to={{}}>ارتباط با ما </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
