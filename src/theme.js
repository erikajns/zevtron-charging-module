import { createTheme } from '@mui/material/styles';

// Define the primary and secondary colors
const primaryColor = '#49454f'; 
const secondaryColor = '#00c9bf'; 

// Create the theme
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none'
        },
      },
    },
    MuiInputBase:{
        styleOverrides:{
            root:{
                height: 40,
            }
        }
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
