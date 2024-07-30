import React from 'react';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container, Logo, Title, Description, ButtonContainer, CustomButton, GuestText } from './WelcomePage.styles';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Container>
      <Logo src="https://zevtron.com/wp-content/uploads/2024/01/logo-1.jpg" alt="Zevtron Logo" />
      <Title>Lorem Ipsum Dolor Sit Amet</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Description>
      <ButtonContainer>
        <CustomButton variant="contained" onClick={handleLoginClick}>Login</CustomButton>
        <CustomButton variant="outlined">Sign Up</CustomButton>
      </ButtonContainer>
      <GuestText>Continue as a guest</GuestText>
    </Container>
  );
};

export default WelcomePage;
