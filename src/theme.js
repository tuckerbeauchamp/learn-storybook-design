import { createTheme } from '@mui/material';

export const essential = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1854A9',
      contrastText: '#fff',
    },
    accent: {
      main: '#FECC6B',
      contrastText: '#000',
    },
    action: {
      main: '#2AB864',
      contrastText: '#fff',
    },
  },
  shape: {
    square: '0px',
    rounded: '8px',
    pill: '50px',
  },
});

export const base = createTheme({});
