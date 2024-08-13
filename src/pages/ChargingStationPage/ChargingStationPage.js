import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [selectedConnector, setSelectedConnector] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [notify, setNotify] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [notificationInfo, setNotificationInfo] = useState({ name: '', email: '', phone: '' });
  const [paymentInfo, setPaymentInfo] = useState(null);

  const handleConnectorSelect = (connector) => {
    setSelectedConnector(connector);
  };

  const handlePaymentSelect = (paymentMethod, id) => {
    if (paymentMethod === 'Add to Parking') {
      navigate('/qr2');
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

  const handleStartCharging = () => {
    navigate('/charge-loading');
  };

  const handleEditPayment = () => {
    setPaymentInfo(null);
  };

  const handleEditNotifications = () => {
    setModalOpen(true);
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
        <Logo src="https://www.netcloud.co.il/wp-content/uploads/2019/11/TIBA-Logo.png" alt="Zevtron Logo" />

        <CardContainer>
          <StationCard />
          <ConnectorSelectionCard 
            selectedConnector={selectedConnector} 
            onConnectorSelect={handleConnectorSelect} 
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
            onEditNotifications={handleEditNotifications} 
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
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={notificationInfo.name}
              onChange={handleInputChange}
              required
            />
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
