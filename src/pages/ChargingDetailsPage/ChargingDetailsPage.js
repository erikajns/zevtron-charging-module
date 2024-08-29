import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { Container, CardContainer, MapImage, DetailsCard, InfoSection, IconSection, Logo, BackButtonContainer } from './ChargingDetailsPage.styles';
import mapImage from '../../assets/images/mapImage.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChargingDetailsPage = ({ isChargingComplete, chargingData }) => {
  const navigate = useNavigate();

  // const handleCancelClick = () => {
  //   navigate('/dashboard');
  // };

  const handleBackClick = () => {
    navigate('/dashboard'); // Update with the correct route to your landing page
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
          <Typography variant="h6">
            {isChargingComplete ? 'Complete' : 'Charging Cancelled'}
          </Typography>
          <InfoSection>
            <Typography variant="body2">
              {isChargingComplete ? (
                <>
                  {chargingData.date} | {chargingData.duration} <br />
                  Total {chargingData.cost} <br />
                  Total {chargingData.kWh} kWh <br />
                  {chargingData.station} <br />
                  {chargingData.groupName} <br />
                  {chargingData.groupAddress} <br />
                  {chargingData.paymentMethod}
                </>
              ) : (
                <>
                  {chargingData.date} | {chargingData.duration} <br />
                  @ {chargingData.cost} <br />
                  @ {chargingData.kWh} kWh <br />
                  {chargingData.station} <br />
                  {chargingData.groupName} <br />
                  {chargingData.groupAddress} <br />
                  {chargingData.paymentMethod}
                </>
              )}
            </Typography>
            <IconSection>
              {/* <IconButton onClick={handleCancelClick}> */}
              <IconButton>
                {isChargingComplete ? (
                  <BatteryChargingFullIcon style={{ fontSize: '2.5rem' }} />
                ) : (
                  <CancelOutlinedIcon style={{ fontSize: '2.5rem', color: 'red' }} />
                )}
              </IconButton>
            </IconSection>
          </InfoSection>
        </DetailsCard>
      </CardContainer>
    </Container>
  );
};

export default ChargingDetailsPage;
