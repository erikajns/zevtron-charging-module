import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Alert, Box, Button, IconButton, Typography } from '@mui/material';
import { Container, Header, ScannerView, CameraButton, BackButtonContainer, AlertContainer } from './QRScannerPage.styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const QRScannerPage = () => {
  const [cameraId, setCameraId] = useState(null);
  const [scanner, setScanner] = useState(null);
  const [showAlert, setShowAlert] = useState(true);
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
    // Check if the scanned QR code is the test QR code
    if (decodedText === "TestQRCode") {
      scanner.stop().then(() => scanner.clear());
      // Simulate the server response and navigate back to the charging page with the test ID
      const testScannedId = Math.floor(Math.random() * 10000).toString(); // Generate a random test ID
      alert('Test QR code scanned successfully.');
      navigate('/', { state: { scannedId: testScannedId } });
    } else {
      // Handle other QR codes or actual server interaction
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
        navigate('/', { state: { scannedId } });
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an issue starting the session.');
      });
    }
  };
  

  const onFailure = (error) => {
    console.warn(`QR Code scan failed: ${error}`);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Container>
      {showAlert && (
        <AlertContainer>
          <Alert
            icon={<ErrorOutlineOutlinedIcon fontSize="inherit" />}
            severity="error"
            onClose={handleClose}
          >
            Not a Valid Code. Try Again
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
      <ScannerView id="reader"></ScannerView>
      <CameraButton onClick={startScanner}>
        <PhotoCameraIcon style={{ fontSize: 40 }} />
      </CameraButton>
    </Container>
  );
};

export default QRScannerPage;
