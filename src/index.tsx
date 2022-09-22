import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppLayout from './components/Layout';
import { AuthContextProvider } from './context/auth-context';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <React.StrictMode>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </React.StrictMode>
      </ThemeProvider>
    </BrowserRouter>
  </AuthContextProvider>
);
