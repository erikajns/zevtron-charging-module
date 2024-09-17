import React, { useContext, useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { Alert, Box, IconButton, Typography } from '@mui/material';
import { Container, Header, ScannerView, BackButtonContainer, AlertContainer } from './QRScanner2Page.styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { StationContext } from '../../contexts/StationContext';


const QRScanner2Page = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();
  const {stationId} = useContext(StationContext);


  const handleScan = (result) => {
    const decodedText = result?.[0]?.rawValue;
    if (decodedText) {
      if (decodedText === "TestQRCode") {
        navigate(`/dashboard?stationid=${stationId}&scannedId=${stationId}`);
      } else {
        alert('Your ticket has been validated and the charger is activated. Charging fee will be added to your parking transaction.');
        navigate(`/dashboard?stationid=${stationId}&scannedId=${stationId}&ticketUrl=${encodeURIComponent(decodedText)}`);
      }
    }
  };

  const handleError = (error) => {
    console.warn(`QR Code scan failed: ${error}`);
    setAlertMessage('QR Code scan failed. Please try again.');
  };

  const handleClose = () => {
    setAlertMessage('');
  };

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <Container>
      {alertMessage && (
        <AlertContainer>
          <Alert
            icon={<ErrorOutlineOutlinedIcon fontSize="inherit" />}
            severity="error"
            onClose={handleClose}
          >
            {alertMessage}
          </Alert>
        </AlertContainer>
      )}
      <Header>
        <BackButtonContainer>
          <IconButton onClick={handleBackClick}>
            <ArrowBackIcon />
          </IconButton>
        </BackButtonContainer>
        <Typography variant="h6">Scan Parking QR Code</Typography>
        <Typography variant="body2">Place QR code in view finder</Typography>
      </Header>
      <ScannerView>
        <Scanner
          onScan={handleScan}
          onError={handleError}
          constraints={{ facingMode: 'environment' }}
          style={{ width: '100%' }}
        />
      </ScannerView>
    </Container>
  );
};

export default QRScanner2Page;
