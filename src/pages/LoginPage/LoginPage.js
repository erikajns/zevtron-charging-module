import React from 'react';
import { Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container, CustomButton, SocialButton, GuestText, InputContainer, SocialContainer } from './LoginPage.styles';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your authentication logic here
    navigate('/dashboard'); // Navigate to the Dashboard page
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Welcome.</Typography>
      <Typography variant="subtitle1" gutterBottom>Glad to See You</Typography>

      <InputContainer>
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
      </InputContainer>

      <CustomButton variant="contained" onClick={handleLogin}>Login</CustomButton>

      <Link href="#" underline="hover" style={{ marginTop: '16px' }}>Forgot password?</Link>

      <Typography variant="subtitle2" style={{ marginTop: '24px', marginBottom: '16px' }}>Or login with</Typography>

      <SocialContainer>
        <SocialButton variant="outlined" startIcon={<GoogleIcon />} onClick={() => console.log('Login with Google')} />
        <SocialButton variant="outlined" startIcon={<FacebookIcon />} onClick={() => console.log('Login with Facebook')} />
      </SocialContainer>

      <GuestText>Continue as a guest</GuestText>
    </Container>
  );
};

export default LoginPage;