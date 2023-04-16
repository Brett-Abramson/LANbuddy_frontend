// https://stackoverflow.com/questions/70301324/cant-change-background-color-in-theme-material-ui

import { createTheme } from '@mui/material';
const lbpalette = createTheme({
  palette: {
    primary: {
      main: '#413d3d',
    },
    secondary: {
      main: '#f52000',
    },
    background: {
      default: '#352f2f',
      paper: '#bd6767',
    },
    text: {
      hint: '#ae99ec',
      disabled: 'rgba(177,150,150,0.85)',
      primary: 'rgba(234,223,223,0.87)',
      secondary: 'rgba(65,53,53,0.6)',
    },
  },
});

export default lbpalette;