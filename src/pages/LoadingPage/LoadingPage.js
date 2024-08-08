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
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

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
      <Logo src="https://www.netcloud.co.il/wp-content/uploads/2019/11/TIBA-Logo.png" alt="Company Logo" />
      </HeaderContainer>

      <AnimationContainer>
      <Box>
        <AnimatedIcon>
          <LightningIcon />
        </AnimatedIcon>
      </Box>
      <Phrase key={currentPhraseIndex}>
        <Typography variant="body1" align="center">
          {phrases[currentPhraseIndex]}
        </Typography>
      </Phrase>
      </AnimationContainer>
    </Container>
  );
};

export default LoadingPage;
