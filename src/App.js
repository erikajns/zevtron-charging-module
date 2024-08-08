import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChargingStationPage from './pages/ChargingStationPage/ChargingStationPage';
import QRScannerPage from './pages/QRScannerPage/QRScannerPage';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import QRScanner2Page from './pages/QRScanner2Page/QRScanner2Page';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<ChargingStationPage />} />
          <Route path="/qr" element={<QRScannerPage />} />
          <Route path="/charge-loading" element={<LoadingPage />} />
          <Route path="/qr2" element={<QRScanner2Page />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
