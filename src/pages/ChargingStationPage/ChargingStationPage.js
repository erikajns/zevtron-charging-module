import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, Box, Modal, TextField, Button } from '@mui/material';
import { Container, CustomButton, CardContainer, NotificationBar, Logo } from './ChargingStationPage.styles';
import StationCard from '../../components/StationCard/StationCard';
import PaymentOptionsCard from '../../components/PaymentOptionsCard/PaymentOptionsCard';
import ConnectorSelectionCard from '../../components/ConnectorSelectionCard/ConnectorSelectionCard';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PhoneInput from '../../components/utils/PhoneInput';

const ChargingStationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const scannedId = queryParams.get('scannedId');

  const [selectedConnector, setSelectedConnector] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [notify, setNotify] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [notificationInfo, setNotificationInfo] = useState({ name: '', email: '', phone: '' });
  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    if (scannedId) {
      const timestamp = new Date().toLocaleTimeString();
      setPaymentInfo({ method: 'Add to Parking', id: scannedId, verifiedAt: timestamp });
      setSelectedPayment('Add to Parking');
    }
  }, [scannedId]);

  const handleConnectorSelect = (connector) => {
    setSelectedConnector(connector);
  };

  const handlePaymentSelect = (paymentMethod, id) => {
    if (paymentMethod === 'Add to Parking') {
      navigate('/qr2');
    } else if (paymentMethod === 'Pay Direct') {
      navigate('/checkout');
    } else {
      const timestamp = new Date().toLocaleTimeString();
      setSelectedPayment(paymentMethod);
      setPaymentInfo({ method: paymentMethod, id: id, verifiedAt: timestamp });
    }
  };
  

  const handleNotifySelect = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setNotify(true);
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNotificationInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleEditPayment = () => {
    setPaymentInfo(null);
    setSelectedPayment(null);
  };

  const handleStartCharging = () => {
    navigate('/charge-loading');
  };

  return (
    <>
      <NotificationBar>
        <Typography variant="body1" component="span">
          EV charging. <br />
          Brought to you by:
        </Typography>
        <InfoOutlinedIcon />
      </NotificationBar>

      <Container>
        <Logo src="https://zevtron.com/wp-content/uploads/2024/01/logo-1.jpg" alt="Zevtron Logo" />

        <CardContainer>
          <StationCard />
          <ConnectorSelectionCard 
            selectedConnector={selectedConnector} 
            onConnectorSelect={handleConnectorSelect}
            hasTwoConnectors={true}
          />
          <PaymentOptionsCard 
            paymentInfo={paymentInfo}
            selectedPayment={selectedPayment}
            handlePaymentSelect={handlePaymentSelect}
            handleEditPayment={handleEditPayment}
          />
          <NotificationCard 
            notify={notify} 
            notificationInfo={notificationInfo} 
            onNotifySelect={handleNotifySelect} 
            onEditNotifications={() => setModalOpen(true)} 
          />
        </CardContainer>

        <CustomButton
          variant="contained"
          color="primary"
          disabled={!selectedConnector || !selectedPayment || !notify}
          onClick={handleStartCharging}
        >
          Start Charging
        </CustomButton>

        {/* Modal for Notifications */}
        <Modal open={modalOpen} onClose={handleModalClose}>
          <Box
            component="form"
            onSubmit={handleFormSubmit}
            p={3}
            bgcolor="background.paper"
            borderRadius={1}
            boxShadow={24}
            display="flex"
            flexDirection="column"
            gap={2}
            maxWidth={400}
            mx="auto"
            mt={5}
            margin={2}
          >
            <Typography variant="h6">Set up Notifications</Typography>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={notificationInfo.email}
              type="email"
              onChange={handleInputChange}
              required
            />
            <PhoneInput
              value={notificationInfo.phone}
              onChange={handleInputChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Modal>

      </Container>
    </>
  );
};

export default ChargingStationPage;
