import { createTheme } from "@mui/material/styles";
import koodak from '../assets/font/KoodakBold.woff'

const Colors = {
  green: "#415fe7",
};

const theme = createTheme({
  typography: {
    fontFamily: [
      '"koodak"',
    ].join(','),
  },
  palette: {
    primary: {
      main: Colors.green,
    },
  },
});

export default theme
