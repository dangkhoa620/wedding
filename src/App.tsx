import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import AppRoute from './routes/AppRoute';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
