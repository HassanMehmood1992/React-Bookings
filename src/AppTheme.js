import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    typography: {
      useNextVariants: true
    },
    status: {
      danger: 'red',
    },
    palette: {
      primary: {
        light: "#A6C539",
        main: "#05325b",
        dark: "#A6C539",
        contrastText: "#A6C539"
      },
      secondary: {
        light: "#A6C539",
        main: "#107dac",
        dark: "#A6C539",
        contrastText: "#A6C539"
      },
      white: {
        main: "#ffff"
      }
    }
  });