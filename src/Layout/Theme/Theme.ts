import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#f5f5f5', 
    // },
    secondary: {
      main: '#151B23',
      light: '#212830'
    },
    error: {
      main: '#f44336', 
    },
    background: {
      default: '#000', 
    },
    common: {
      black: '#000000', 
      white: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none', 
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', 
        },
        contained: {
          background: '#176', 
          color: '#fff', 
          ":hover": {
            background: '#0d594d'
          }
        },
        outlined: {
          border: '1px solid #0d594d', 
          color: '#0d594d'
        }
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '7px', 
        },
      },
    },
  },
});

export default theme;
