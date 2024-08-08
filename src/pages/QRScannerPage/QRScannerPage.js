import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Alert, Box, IconButton, Typography } from '@mui/material';
import { Container, Header, ScannerView, CameraButton, BackButtonContainer, AlertContainer } from './QRScannerPage.styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useNavigate } from 'react-router-dom';

const QRScannerPage = () => {
  const [cameraId, setCameraId] = useState(null);
  const [scanner, setScanner] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    Html5Qrcode.getCameras()
      .then(cameras => {
        if (cameras && cameras.length) {
          setCameraId(cameras[cameras.length - 1].id);
          startScanner();
        }
      })
      .catch(err => {
        console.error('Error fetching cameras', err);
        setAlertMessage('Error accessing camera. Please check camera permissions and try again.');
      });

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
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: 250
        },
        onSuccess,
        onFailure
      );
      setScanner(qrScanner);
    } else {
      setAlertMessage('No camera found. Please check camera permissions and try again.');
    }
  };

  const onSuccess = (decodedText, decodedResult) => {
    if (decodedText === "TestQRCode") {
      scanner.stop().then(() => scanner.clear());
      const testScannedId = Math.floor(Math.random() * 10000).toString(); // Generate a random test ID
      alert('Test QR code scanned successfully.');
      navigate('/charging', { state: { scannedId: testScannedId } });
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
        navigate('/charging', { state: { scannedId } });
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an issue starting the session.');
      });
    }
  };

  const onFailure = (error) => {
    console.warn(`QR Code scan failed: ${error}`);
    setAlertMessage('QR Code scan failed. Please try again.');
  };

  const handleClose = () => {
    setAlertMessage('');
  };

  const handleBackClick = () => {
    navigate('/');
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
      <ScannerView id="reader"></ScannerView>
      <CameraButton onClick={startScanner}>
        <PhotoCameraIcon style={{ fontSize: 40 }} />
      </CameraButton>
    </Container>
  );
};

export default QRScannerPage;
