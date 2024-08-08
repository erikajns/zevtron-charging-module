import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { Alert, Box, IconButton, Typography } from '@mui/material';
import { Container, Header, ScannerView, BackButtonContainer, AlertContainer } from './QRScanner2Page.styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useNavigate } from 'react-router-dom';

const QRScanner2Page = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleScan = (result) => {
    const decodedText = result?.[0]?.rawValue; // Adjusting to match the expected array format from the library
    if (decodedText) {
      if (decodedText === "TestQRCode") {
        const testScannedId = Math.floor(Math.random() * 10000).toString(); // Generate a random test ID
        navigate(`/dashboard?scannedId=${testScannedId}`);
      } else {
        fetch('api/guest/HubTibaStartCharge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ evseId: 'ChargeBoxId', mediaIdentifier: decodedText })
        })
        .then(response => response.json())
        .then(data => {
          alert('Your ticket has been validated and the charger is activated. Charging fee will be added to your parking transaction.');
          const scannedId = Math.floor(Math.random() * 10000).toString(); // Generate a random ID for real case
          navigate('/dashboard', { state: { scannedId } });
        })
        .catch(error => {
          console.error('Error:', error);
          setAlertMessage('There was an issue starting the session.');
        });
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
        <Typography variant="h6">Scan Station QR Code</Typography>
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
