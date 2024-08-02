import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box, Card, CardContent, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BoltIcon from '@mui/icons-material/Bolt';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PaymentIcon from '@mui/icons-material/Payment';
import { Container, CustomButton, CardContainer, ConnectorButton, Logo, RatesLink, BackButtonContainer } from './ChargingStationPage.styles';

const ChargingStationPage = () => {
  const navigate = useNavigate();
  const [selectedConnector, setSelectedConnector] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  const handleConnectorSelect = (connector) => {
    setSelectedConnector(connector);
  };

  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleStartCharging = () => {
    navigate('/charge-loading');
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Container>
      <BackButtonContainer>
        <IconButton onClick={handleBackClick}>
          <ArrowBackIcon />
        </IconButton>
      </BackButtonContainer>
      <Logo src="https://zevtron.com/wp-content/uploads/2024/01/logo-1.jpg" alt="Zevtron Logo" />
      <Typography variant="body2">1 Charger Drive, San Diego, CA, 91234</Typography>

      <CardContainer>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center">
              <Typography variant="h6">Erika, you’re at:</Typography>
              {/* <BoltIcon style={{ marginLeft: 'auto', color: '#FFEB3B' }} /> */}
            </Box>
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
            <Box display="flex" alignItems="center">
              <Typography variant="h6">$0.42 kWh</Typography>
              {/* <LocalGasStationIcon style={{ marginLeft: 'auto', color: '#00c9bf' }} /> */}
            </Box>
            <Typography variant="body2">Rate changes at 3pm, <RatesLink href="#" onClick={toggleDrawer(true)}>View Pricing & Dates</RatesLink></Typography>
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
            <Box display="flex" alignItems="center">
              {/* <PaymentIcon style={{ color: '#9E9E9E' }} /> */}
              <Typography variant="h6">Payment Options</Typography>
            </Box>
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

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ margin: 2 }}>
            Pricing & Dates
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Rate: $0.42/kWh" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Peak Hours: 3pm - 9pm" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Offline: 1am - 4am" />
            </ListItem>
            {/* Add more ListItems as needed */}
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};

export default ChargingStationPage;
