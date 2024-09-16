import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton, Button } from '@mui/material';
import { Container, CardContainer, MapImage, DetailsCard, InfoSection, Logo, BackButtonContainer } from './ChargingDetailsPage.styles';
import mapImage from '../../assets/images/mapImage.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import faacLogo from '../../assets/images/FAACLogo.png';
import { StationContext } from '../../contexts/StationContext';

const ChargingDetailsPage = ({ isChargingComplete, chargingData }) => {
  const navigate = useNavigate();
  const [chargingState, setChargingState] = useState('inProgress'); // 'inProgress', 'cancelled', 'completed'
  const {stationId} = useContext(StationContext);

  useEffect(() => {
    // Change state to Completed after 10 seconds
    const timeout = setTimeout(() => {
      setChargingState('completed');
    }, 5000);
  }, []);


  const handleBackClick = () => {
    navigate('/dashboard'); // Update with the correct route to your landing page, right now is /dashboard.
  };

  /**
   * CONNECTION WITH THE STOP API
   */
  const handleStopCharging = async () => {

    try {
      const response = await fetch('https://faacapi.azurewebsites.net/api/charger/stop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "evseId": "{stationid}",
          "transactionTimestamp": "2024-09-13T10:10:00.0000000K",
          "sessionId": "223454-332123-123-11",
          "isXMSCharge": true,
          "isXMSCalculation": false,
          "mediaType": "BarCode",
          "mediaIdentifier": "Test",
          "chargingFee": 5.01,
          "taxAmount": 0.25,
          "uniqueVehicleId": "",
          "gridCostPerKWh": 90.12,
          "sessionDetails": {
              "startPluggedInTime": "2024-09-13T10:10:01.0000000K",
              "endPluggedInTime": "2024-09-13T10:10:01.0000000K",
              "startTimestamp": "2024-09-13T10:10:31.0000000K",
              "endTimestamp": "2024-09-13T10:10:31.0000000K",
              "kWh": "10.01"
          }
        }),
      });

      // if (!response.ok) {
      //   throw new Error('Failed to start charging');
      // }

      setChargingState('cancelled');
    } catch (error) {
      setChargingState('cancelled');
    }
  };

  const getCardTitle = () => {
    if (chargingState === 'inProgress') return 'In Progress';
    if (chargingState === 'cancelled') return 'Completed';
    if (isChargingComplete) return 'Completed';
    return 'Completed';
  };

  const getCardDetails = () => {
    if (chargingState === 'inProgress') {
      return (
        <>
          {chargingData.date} <br />
          {stationId ? `Station ${stationId}`: `Station Unknown`} <br />
          {chargingData.groupName} <br />
          {chargingData.address} <br />
        </>
      );
    } else {
      return (
        <>
          {chargingData.dateSimple} | Duration: {chargingData.duration} <br />
          {stationId ? `Station ${stationId}`: `Station Unknown`} <br />
          Total {chargingData.cost} <br />
          Total {chargingData.kWh} kWh <br />
          {chargingData.station} <br />
          {chargingData.groupName} <br />
          {chargingData.address} <br />
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

      <Logo src={faacLogo} alt="FAAC Parking Solutions Logo" />
      <Typography variant="h6" align="center" gutterBottom>
        Charge Details
      </Typography>
      <CardContainer>
        <MapImage src={mapImage} alt="Map with location" />
        <DetailsCard>
          <Typography variant="h6">{getCardTitle()}</Typography>
          <InfoSection>
            <Typography variant="body2">{getCardDetails()}</Typography>
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
