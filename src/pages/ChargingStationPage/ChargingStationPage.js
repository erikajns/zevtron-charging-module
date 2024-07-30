import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box, Card, CardContent, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container, CustomButton, CardContainer, ConnectorButton, Logo, RatesLink } from './ChargingStationPage.styles';

const ChargingStationPage = () => {
  const navigate = useNavigate();
  const [selectedConnector, setSelectedConnector] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleBackClick = () => {
    navigate('/dashboard'); // Navigate back to the Dashboard page
  };

  const handleConnectorSelect = (connector) => {
    setSelectedConnector(connector);
  };

  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleStartCharging = () => {
    // Implement start charging logic here
  };

  return (
    <Container>
      <IconButton onClick={handleBackClick}>
        <ArrowBackIcon />
      </IconButton>
      <Logo src="https://zevtron.com/wp-content/uploads/2024/01/logo-1.jpg" alt="Zevtron Logo" />
      <Typography variant="body2">1 Charger Drive, San Diego, CA, 91234</Typography>

      <CardContainer>
        <Card>
          <CardContent>
            <Typography variant="h6">Erika, you’re at:</Typography>
            <Typography variant="h4">Station 30111</Typography>
            <Typography variant="body2">
              DC Fast Charging<br />
              CCS Connector<br />
              400V - 1000V DC<br />
              50-350 kW<br />
              2 Connectors (Left & Right)
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">$0.42 kWh</Typography>
            <Typography variant="body2">Rate changes at 3pm, <RatesLink href="#">View Pricing & dates</RatesLink></Typography>
            <Typography variant="body2">Offline at 1am - 4am</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Choose Connector</Typography>
            <Box display="flex" justifyContent="space-around">
              <ConnectorButton
                selected={selectedConnector === 'left'}
                onClick={() => handleConnectorSelect('left')}
              >
                1 (Left)
              </ConnectorButton>
              <ConnectorButton
                selected={selectedConnector === 'right'}
                onClick={() => handleConnectorSelect('right')}
              >
                (Right) 2
              </ConnectorButton>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Payment Options</Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Button variant="outlined" onClick={() => handlePaymentSelect('addToParking')}>Add to Parking</Button>
              <Button variant="outlined" onClick={() => handlePaymentSelect('payDirect')}>Pay Direct</Button>
              <Button variant="outlined" onClick={() => handlePaymentSelect('applyFunds')}>Apply Funds ($74.21)</Button>
            </Box>
          </CardContent>
        </Card>
      </CardContainer>

      <CustomButton
        variant="contained"
        color='secondary'
        disabled={!selectedConnector || !selectedPayment}
        onClick={handleStartCharging}
      >
        Start Charging
      </CustomButton>
    </Container>
  );
};

export default ChargingStationPage;
