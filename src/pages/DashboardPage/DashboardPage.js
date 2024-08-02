import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Container, CustomButton, Logo, ButtonContainer } from './DashboardPage.styles';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [navValue, setNavValue] = useState(0);

  const handleScanClick = () => {
    navigate('/qr');
  };

  return (
    <Container>
      <Logo src="https://zevtron.com/wp-content/uploads/2024/01/logo-1.jpg" alt="Zevtron Logo" />
      <Typography variant="h5" gutterBottom>
        Erika, welcome back.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Let’s get you charging!
      </Typography>

      <ButtonContainer>
        <CustomButton variant="contained" onClick={handleScanClick}>Scan Station QR Code</CustomButton>
        <CustomButton variant="outlined">Manually Enter Station ID</CustomButton>
      </ButtonContainer>

      <BottomNavigation value={navValue} />
    </Container>
  );
};

export default DashboardPage;
