import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ChargingStationPage from './pages/ChargingStationPage/ChargingStationPage';
import QRScannerPage from './pages/QRScannerPage/QRScannerPage';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import TransactionsPage from './pages/TransactionsPage/TransactionsPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/charging" element={<ChargingStationPage />} />
          <Route path="/qr" element={<QRScannerPage />} />
          <Route path="/charge-loading" element={<LoadingPage />} />
          <Route path='/transactions' element={<TransactionsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
