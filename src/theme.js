import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#020202",
    },
    secondary: {
      main: "#FFFFFF",
    },
    s_black: {
      main: "#161616",
    },
    s_white: {
      main: "#F2F1EE",
    },
  },
  typography: {
    fontFamily: '"Raleway", sans-serif',
    allVariants: {
      color: "#161616",
    },
    raleway: {
      fontFamily: '"Raleway", sans-serif',
    },
    inter: {
      fontFamily: '"Inter", sans-serif',
    },
  },
});

export default theme;
