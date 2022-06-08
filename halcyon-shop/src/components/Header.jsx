import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../assets/img/logoLight.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link, useNavigate } from "react-router-dom";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../redux/cartSlice";
import { fontSize } from "@mui/system";

export default function Header({cartItmes}) {
  
  const cart = useSelector(cartSelector)
  const navigateToHome = useNavigate();
  const homePageNav = () => {
    navigateToHome("/");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{boxShadow:'none'}}>
        <Toolbar className="toolbar">
          <Box
            component="img"
            sx={{
              width: "6%",
              maxHeight: { xs: 350, md: 250 },
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
            noWrap
            component="div"
            sx={{ flexGrow: 1,fontSize:{md:'40px',sm:'30px',xs:'10px'} }}
          >
            فروشگاه موبایل هالسیون
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h6">
              <Link to={{ pathname: `login` }}>مدیریت </Link>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
              <Link to={{ pathname: `cart-page` }}>
        
                <Badge color="error" badgeContent={cart.cartTotalQuantity}>
                  <LocalMallIcon
                    fontSize="large"
                    color="primary"
                  />
                </Badge>
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
              <MenuIcon
                fontSize="medium"
                color="primary"
                sx={{ marginBottom: "-6px" }}
              />
              <Link
              to={{}}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                محصولات |{" "}
              </Link>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem><Link to={{}}>سامسونگ</Link></MenuItem>
                <MenuItem><Link to={{}}>اپل</Link></MenuItem>
                <MenuItem><Link to={{}}>شیائومی</Link></MenuItem>
                <MenuItem><Link to={{}}>هوآوی</Link></MenuItem>
                <MenuItem><Link to={{}}>جی پلاس</Link></MenuItem>
                <MenuItem><Link to={{}}>وان پلاس</Link></MenuItem>
                <MenuItem><Link to={{}}>دو جی</Link></MenuItem>
                <MenuItem><Link to={{}}>نوکیا</Link></MenuItem>
                <MenuItem><Link to={{}}>ال جی</Link></MenuItem>
                <MenuItem><Link to={{}}>موتورولا</Link></MenuItem>


                
              </Menu>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
              <WhatshotIcon
                fontSize="small"
                color="primary"
                sx={{ marginBottom: "-6px" }}
              />
              <Link to={{}}>پرفروشترین‌ها </Link>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
              <LoyaltyIcon
                fontSize="small"
                color="primary"
                sx={{ marginBottom: "-6px" }}
              />
              <Link to={{}}>حراجستان </Link>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
              <HelpCenterIcon
                fontSize="small"
                color="primary"
                sx={{ marginBottom: "-6px" }}
              />
              <Link to={{}}>سوالات متداول </Link>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
              <InfoIcon
                fontSize="small"
                color="primary"
                sx={{ marginBottom: "-6px" }}
              />
              <Link to={{}}>درباره ما </Link>
            </Typography>
            <Typography variant="h6" sx={{ paddingX: "10px" }}>
              <ContactPhoneIcon
                fontSize="small"
                color="primary"
                sx={{ marginBottom: "-6px" }}
              />
              <Link to={{}}>ارتباط با ما </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
