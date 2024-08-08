import { createTheme } from '@mui/material/styles';

const primaryColor = '#49454f';
const secondaryColor = '#00c9bf';

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
          textTransform: 'none',
          '&.selected': {
            backgroundColor: '#49454f', // Primary color for selected state
            color: '#FFFFFF',
          },
          '&.MuiButton-outlined.selected': {
            backgroundColor: '#49454f',
            color: '#FFFFFF',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15, 
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 40,
        },
      },
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
