import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Marmelad', 'serif'].join(','),
  },
});

theme.typography.h1 = {
  fontSize: '3rem',
  '@media (min-width:600px)': {
    fontSize: '6rem',
  },
};

theme.typography.h2 = {
  fontSize: '2.5rem',
  '@media (min-width:600px)': {
    fontSize: '3.75rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.8rem',
  '@media (min-width:600px)': {
    fontSize: '2.125rem',
  },
};

export default theme;
