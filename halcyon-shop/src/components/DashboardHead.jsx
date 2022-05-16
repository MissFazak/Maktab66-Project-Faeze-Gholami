import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


import { Link,NavLink } from "react-router-dom";

export default function DashboardHead() {


  return (
    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} xs={3}>
              <AssignmentIndIcon
              fontSize="large"
              color="primary"
              sx={{ marginBottom: "-12px", paddingX: "3px" }}
              />
              پنل مدیریت
            </Typography>
            <Grid item container className="boxing" sx={{ flexGrow: 1 }} xs={4}>
              <NavLink to={{pathname:'manage-page'}}>
              <QrCodeIcon
              fontSize="medium"
              color="primary"
              sx={{ marginBottom: "-8px", paddingX: "3px" }}
              />
                کالاها</NavLink>
              <Link to={{pathname:'manage-of-sp'}}>
              <PriceChangeIcon
              fontSize="medium"
              color="primary"
              sx={{ marginBottom: "-8px", paddingX: "3px" }}
              />
                موجودی‌ و قیمت‌ها</Link>
              <Link to={{pathname:'order-page'}}>
              <IntegrationInstructionsIcon
              fontSize="medium"
              color="primary"
              sx={{ marginBottom: "-8px", paddingX: "3px" }}
              />
                سفارش‌ها</Link>
            </Grid>
            <Link to={{pathname:'..//'}} xs={1}><Typography variant="h5">بازگشت به سایت
            <KeyboardReturnIcon
              fontSize="large"
              color="primary"
              sx={{ marginBottom: "-15px", paddingX: "3px" }}
              />
            </Typography></Link>
          </Toolbar>
        </AppBar>
      </Box>
  
  );
}
