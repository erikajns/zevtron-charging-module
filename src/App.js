import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StationProvider } from './contexts/StationContext';
import theme from './theme';
import ChargingStationPage from './pages/ChargingStationPage/ChargingStationPage';
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

const timestamp2 = new Date().toLocaleString('en-US', {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
});

const sampleChargingData = {
  date: timestamp,
  dateSimple: timestamp2,
  duration: '30min',
  cost: '$5.26',
  kWh: '10.01',
  tax: '$0.25',
  groupName: 'Central Parking',
  address: '325 Convention Center Dr, Las Vegas, NV 89109'
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StationProvider>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<ChargingStationPage />} />
            <Route path="/charge-loading" element={<LoadingPage />} />
            <Route path="/qr2" element={<QRScanner2Page />} />
            <Route path="/charging-details" element={<ChargingDetailsPage isChargingComplete={false} chargingData={sampleChargingData} />} />
            <Route path="/checkout" element={<PaymentPage />} />
          </Routes>
        </Router>
      </StationProvider>
    </ThemeProvider>
  );
};

export default App;
