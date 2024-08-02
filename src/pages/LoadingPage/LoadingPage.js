import React, { useState, useEffect } from 'react';
import { Typography, Box, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Container, Logo, Address, AnimatedIcon, Phrase, AlertContainer, HeaderContainer, AnimationContainer } from './LoadingPage.styles';
import { ReactComponent as LightningIcon } from '../../assets/icons/bolt.svg';

const phrases = [
  "Get your plug in :)",
  "Sending status to the mother ship",
  "Everything is looking good",
  "Ready, set, charge!",
];

const LoadingPage = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true); // Initially true to show the alert

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    // Automatically hide the alert after 3 seconds
    const timeout = setTimeout(() => setShowAlert(false), 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <Container>
      {showAlert && (
        <AlertContainer>
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            onClose={handleClose}
          >
            Charging has started!
          </Alert>
        </AlertContainer>
      )}
      <HeaderContainer>
      <Logo src="https://zevtron.com/wp-content/uploads/2024/01/logo-1.jpg" alt="Zevtron Logo" />
      <Address variant="body2">1 Charger Drive, San Diego, CA, 91234</Address>
      </HeaderContainer>

      <AnimationContainer>
      <Box>
        <AnimatedIcon>
          <LightningIcon />
        </AnimatedIcon>
      </Box>
      <Phrase key={currentPhraseIndex}>
        <Typography variant="h6" align="center">
          {phrases[currentPhraseIndex]}
        </Typography>
      </Phrase>
      </AnimationContainer>
    </Container>
  );
};

export default LoadingPage;
