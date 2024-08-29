import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChargingStationPage from './pages/ChargingStationPage/ChargingStationPage';
import QRScannerPage from './pages/QRScannerPage/QRScannerPage';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import QRScanner2Page from './pages/QRScanner2Page/QRScanner2Page';
import ChargingDetailsPage from './pages/ChargingDetailsPage/ChargingDetailsPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

const timestamp = new Date().toLocaleString('en-US', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
});

const sampleChargingData = {
  date: timestamp,
  duration: '20min',
  cost: '$12.45',
  kWh: '8.72',
  station: 'Station 30111, Connector 2',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<ChargingStationPage />} />
          <Route path="/qr" element={<QRScannerPage />} />
          <Route path="/charge-loading" element={<LoadingPage />} />
          <Route path="/qr2" element={<QRScanner2Page />} />
          <Route path="/charging-details" element={<ChargingDetailsPage isChargingComplete={false} chargingData={sampleChargingData} />} />
          <Route path="/checkout" element={<PaymentPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
