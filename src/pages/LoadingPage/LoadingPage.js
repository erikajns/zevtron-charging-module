import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Alert } from '@mui/material';
// import CheckIcon from '@mui/icons-material/Check';
import { Container, Logo, Address, AnimatedIcon, Phrase, AlertContainer, HeaderContainer, AnimationContainer } from './LoadingPage.styles';
import { ReactComponent as LightningIcon } from '../../assets/icons/bolt.svg';
import { useNavigate } from 'react-router-dom';

const phrases = [
  "Your charging has started",
  "Get your plug in :)",
  "Sending status to the mother ship",
  "Everything is looking good",
  "Ready, set, charge!",
];

const LoadingPage = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate(); 

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

  // const handleClose = () => {
  //   setShowAlert(false);
  // };

  const handleStopCharging = async () => {
    // Add your API call logic here
    try {
      const response = await fetch('https://api-url.com/stop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ /* Add necessary payload */ }),
      });

      if (response.ok) {
        navigate('/charging-details');
      } else {
        console.error('Failed to stop charging');
      }
    } catch (error) {
      console.error('Error stopping charging:', error);
    }
  };

  return (
    <Container>
      {/* {showAlert && (
        <AlertContainer>
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            onClose={handleClose}
          >
            Charging has started!
          </Alert>
        </AlertContainer>
      )} */}
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

      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleStopCharging}
        style={{ marginTop: '20px' }}
      >
        Stop Charging
      </Button>
    </Container>
  );
};

export default LoadingPage;
