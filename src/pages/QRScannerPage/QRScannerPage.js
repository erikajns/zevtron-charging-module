import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Scanner } from '@yudiel/react-qr-scanner';
import { Container, ScannerContainer, CameraIcon, BackButtonContainer } from './QRScannerPage.styles';

const QRScannerPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState('');

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleScan = (result) => {
    if (result) {
      setData(result);
      console.log(result);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <Container>
        <BackButtonContainer>
      <IconButton onClick={handleBackClick}>
        <ArrowBackIcon />
      </IconButton>
      </BackButtonContainer>
      <Typography variant="h6">Scan Station QR Code</Typography>
      <Typography variant="body2">Place QR code in view finder</Typography>

      <ScannerContainer>
        <Scanner
          onScan={handleScan}
          onError={handleError}
          constraints={{ facingMode: 'environment' }}
          style={{ width: '100%' }}
        />
      </ScannerContainer>
        <IconButton onClick={() => navigate('/charging')}>
        <CameraIcon />
        </IconButton>
    </Container>
  );
};

export default QRScannerPage;
