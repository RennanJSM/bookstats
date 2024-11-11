import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#01c3c2',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#01c3c2',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
  },
});
