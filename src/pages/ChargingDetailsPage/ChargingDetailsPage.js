import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton, Button } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Container, CardContainer, MapImage, DetailsCard, InfoSection, IconSection, Logo, BackButtonContainer } from './ChargingDetailsPage.styles';
import mapImage from '../../assets/images/mapImage.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChargingDetailsPage = ({ isChargingComplete, chargingData }) => {
  const navigate = useNavigate();
  const [chargingState, setChargingState] = useState('inProgress'); // 'inProgress', 'cancelled', 'completed'

  const handleBackClick = () => {
    navigate('/dashboard'); // Update with the correct route to your landing page, right now is /dashboard.
  };

  /**
   * TODO: CONNECT WITH THE STOP API
   * Remove the first line of the function
   * Uncomment the rest of the lines
   */
  const handleStopCharging = async () => {
    setChargingState('cancelled');

    // try {
    //   const response = await fetch('https://api-url.com/stop', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ /* Add necessary payload */ }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Failed to start charging');
    //   }

    //   setChargingState('cancelled');
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  const getCardTitle = () => {
    if (chargingState === 'inProgress') return 'In Progress';
    if (chargingState === 'cancelled') return 'Charging Cancelled';
    if (isChargingComplete) return 'Completed';
    return '';
  };

  const getIconButton = () => {
    if (chargingState === 'inProgress') {
      return <CancelOutlinedIcon style={{ fontSize: '2.5rem', color: 'red' }} />;
    } else if (chargingState === 'cancelled') {
      return <CheckCircleOutlinedIcon style={{ fontSize: '2.5rem', color: 'green' }} />;
    } else if (isChargingComplete) {
      return <BatteryChargingFullIcon style={{ fontSize: '2.5rem', color: 'green' }} />;
    }
    return null;
  };

  const getCardDetails = () => {
    if (chargingState === 'inProgress') {
      return (
        <>
          {chargingData.date} | {chargingData.duration} <br />
          @ {chargingData.cost} <br />
          @ {chargingData.kWh} kWh <br />
          {chargingData.station} <br />
          {chargingData.groupName} <br />
          {chargingData.groupAddress} <br />
          {chargingData.paymentMethod}
        </>
      );
    } else {
      return (
        <>
          {chargingData.date} | {chargingData.duration} <br />
          Total {chargingData.cost} <br />
          Total {chargingData.kWh} kWh <br />
          {chargingData.station} <br />
          {chargingData.groupName} <br />
          {chargingData.groupAddress} <br />
          {chargingData.paymentMethod}
        </>
      );
    }
  };

  return (
    <Container>
      <BackButtonContainer>
        <IconButton onClick={handleBackClick}>
          <ArrowBackIcon />
        </IconButton>
      </BackButtonContainer>

      <Logo src="https://www.netcloud.co.il/wp-content/uploads/2019/11/TIBA-Logo.png" alt="Tiba Logo" />
      <Typography variant="h6" align="center" gutterBottom>
        Charge Details
      </Typography>
      <CardContainer>
        <MapImage src={mapImage} alt="Map with location" />
        <DetailsCard>
          <Typography variant="h6">{getCardTitle()}</Typography>
          <InfoSection>
            <Typography variant="body2">{getCardDetails()}</Typography>
            <IconSection>
              <IconButton>
                {getIconButton()}
              </IconButton>
            </IconSection>
          </InfoSection>
        </DetailsCard>
      </CardContainer>
      {chargingState === 'inProgress' && (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleStopCharging}
          style={{ marginTop: '20px' }}
        >
          Stop Charging
        </Button>
      )}
    </Container>
  );
};

export default ChargingDetailsPage;
