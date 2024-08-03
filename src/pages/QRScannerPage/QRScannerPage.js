import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { Container, Header, ScannerView, CameraButton, BackButtonContainer } from './QRScannerPage.styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useNavigate } from 'react-router-dom';

const QRScannerPage = () => {
  const [cameraId, setCameraId] = useState(null);
  const [scanner, setScanner] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch available cameras
    Html5Qrcode.getCameras()
      .then(cameras => {
        if (cameras && cameras.length) {
          setCameraId(cameras[cameras.length - 1].id); // Using the last camera
        }
      })
      .catch(err => console.error('Error fetching cameras', err));

    // Cleanup function
    return () => {
      if (scanner) {
        scanner.stop().then(() => scanner.clear());
      }
    };
  }, [scanner]);

  const startScanner = () => {
    if (cameraId) {
      const qrScanner = new Html5Qrcode('reader');
      qrScanner.start(
        cameraId,
        {
          fps: 10,
          qrbox: 250
        },
        onSuccess,
        onFailure
      );
      setScanner(qrScanner);
    }
  };

  const onSuccess = (decodedText, decodedResult) => {
    scanner.stop().then(() => scanner.clear());
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
      navigate('/charging');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an issue starting the session.');
    });
  };

  const onFailure = (error) => {
    console.warn(`QR Code scan failed: ${error}`);
  };

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <Container>
      <Header>
        <BackButtonContainer>
          <IconButton onClick={handleBackClick}>
            <ArrowBackIcon />
          </IconButton>
        </BackButtonContainer>
        <Typography variant="h6">Scan Station QR Code</Typography>
        <Typography variant="body2">Place QR code in view finder</Typography>
      </Header>
      <ScannerView id="reader"></ScannerView>
      <CameraButton onClick={startScanner}>
        <PhotoCameraIcon style={{ fontSize: 40 }} />
      </CameraButton>
    </Container>
  );
};

export default QRScannerPage;
