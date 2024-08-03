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

const transactions = [
  { date: '2024-07-15', amount: 12.63, description: 'EV Charge', location: '1 Charger Dr.', method: 'Card (0123)' },
  { date: '2024-07-10', amount: 25.00, description: 'Funds added', location: '1 Charger Dr.', method: 'Card (0123)' },
  { date: '2024-06-18', amount: 15.00, description: 'EV Charge', location: '1 Charger Dr.', method: 'Card (0456)' },
];

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
          <Route path='/transactions' element={<TransactionsPage transactions={transactions} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
