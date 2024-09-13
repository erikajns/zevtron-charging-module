import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container, Logo, AnimatedIcon, Phrase, HeaderContainer, AnimationContainer, LightningIcon } from './LoadingPage.styles';
import lightningIcon from '../../assets/images/bolt.png';
import faacLogo from '../../assets/images/FAACLogo.png'

const normalPhrases = [
  "Your charging has started",
  "Get your plug in :)",
  "Sending status to the mother ship",
  "Everything is looking good",
  "Ready, set, charge!",
];

const LoadingPage = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [phrases] = useState(normalPhrases);
  const navigate = useNavigate();

  useEffect(() => {
    // Change phrases every 3 seconds
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    // Navigate to charging-details after 5 seconds
    const timeout = setTimeout(() => {
      navigate('/charging-details', { state: { status: 'inProgress' } });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate, phrases]);

  return (
    <Container>
      <HeaderContainer>
       <Logo src={faacLogo} alt="FAAC Parking Solutions Logo" />
      </HeaderContainer>

      <AnimationContainer>
        <Box>
          <AnimatedIcon>
            <LightningIcon src={lightningIcon} />
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
