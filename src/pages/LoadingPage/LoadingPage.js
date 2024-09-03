import React, { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Container, Logo, AnimatedIcon, Phrase, HeaderContainer, AnimationContainer } from './LoadingPage.styles';
import { ReactComponent as LightningIcon } from '../../assets/icons/bolt.svg';
import { useNavigate } from 'react-router-dom';

const normalPhrases = [
  "Your charging has started",
  "Get your plug in :)",
  "Sending status to the mother ship",
  "Everything is looking good",
  "Ready, set, charge!",
];

const stoppingPhrases = [
  "Stopping your charging",
  "Loading your request",
  "Unplugging the electrons",
  "Taking a break from the juice",
  "Powering down safely",
];

const LoadingPage = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isStopping, setIsStopping] = useState(false);
  const [phrases, setPhrases] = useState(normalPhrases);
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases]);

  const handleStopCharging = async () => {
    setIsStopping(true);
    setPhrases(stoppingPhrases);

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
    } finally {
      setIsStopping(false);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Logo src="https://www.netcloud.co.il/wp-content/uploads/2019/11/TIBA-Logo.png" alt="Company Logo" />
      </HeaderContainer>

      <AnimationContainer>
        <Box>
          <AnimatedIcon className={isStopping ? 'slow-rotate' : ''}>
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
        disabled={isStopping}
      >
        Stop Charging
      </Button>
    </Container>
  );
};

export default LoadingPage;
