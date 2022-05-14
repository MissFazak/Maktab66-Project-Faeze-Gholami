import { createTheme } from "@mui/material/styles";
import koodak from '../assets/font/KoodakBold.woff'

const Colors = {
  red: "#F10086",
};

const theme = createTheme({
  typography: {
    fontFamily: [
      "koodak",
    ].join(','),
  },
  palette: {
    primary: {
      main: Colors.red,
    },
  },
});

export default theme
