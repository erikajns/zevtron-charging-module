import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, Button, Box, Card, CardContent, Modal, TextField, IconButton } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { Container, CustomButton, CardContainer, ConnectorButton, Logo, NotificationBar, PaymentInfoImage, EditIconButton } from './ChargingStationPage.styles';
import CardHeader from '../../components/CardHeader/CardHeader';

const ChargingStationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedConnector, setSelectedConnector] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [notify, setNotify] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [notificationInfo, setNotificationInfo] = useState({ name: '', email: '', phone: '' });
  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    if (location.state && location.state.scannedId) {
      const timestamp = new Date().toLocaleTimeString();
      setSelectedPayment('Add to Parking');
      setPaymentInfo({ method: 'Add to Parking', id: location.state.scannedId, verifiedAt: timestamp });
    }
  }, [location.state]);

  const handleConnectorSelect = (connector) => {
    setSelectedConnector(connector);
  };

  const handlePaymentSelect = (paymentMethod, id) => {
    if (paymentMethod === 'Add to Parking') {
      navigate('/qr');
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
  };

  const handleStartCharging = () => {
    navigate('/charge-loading');
  };

  const handleEditNotifications = () => {
    setModalOpen(true);
  }

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
          <Card>
            <CardContent>
              <CardHeader
                icon={<img src="https://www.netcloud.co.il/wp-content/uploads/2019/11/TIBA-Logo.png" alt="TIBA Logo" />}
                title="Tiba Lot A"
                subtitle="Charging Station 30111"
                price="$0.42"
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardHeader
                icon={<PaymentIcon />}
                title="Payment Options"
                subtitle="Choose payment method"
              />
              {paymentInfo ? (
                <Box display="flex" justifyContent="space-between" alignItems="center" border="0.5px solid grey" borderRadius={1} p={2}>
                  <PaymentInfoImage src="https://www.netcloud.co.il/wp-content/uploads/2019/11/TIBA-Logo.png" alt="TIBA Logo" />
                  <Box textAlign="left" flex={1} ml={2}>
                    <Typography variant="body1"><strong>{paymentInfo.method}</strong></Typography>
                    <Typography variant="body1">ID: {paymentInfo.id}</Typography>
                    <Typography variant="body1">Verified {paymentInfo.verifiedAt}</Typography>
                  </Box>
                  <EditIconButton onClick={handleEditPayment}>
                    <EditNoteOutlinedIcon />
                  </EditIconButton>
                </Box>
              ) : (
                <Box display="flex" flexDirection="column" gap={2}>
                  <Button
                    variant="outlined"
                    className={selectedPayment === 'addToParking' ? 'selected' : ''}
                    onClick={() => handlePaymentSelect('Add to Parking', '1234')}
                  >
                    Add to Parking
                  </Button>
                  <Button
                    variant="outlined"
                    className={selectedPayment === 'payDirect' ? 'selected' : ''}
                    onClick={() => handlePaymentSelect('Pay Direct', '5678')}
                  >
                    Pay Direct
                  </Button>
                  <Button
                    variant="outlined"
                    className={selectedPayment === 'applyFunds' ? 'selected' : ''}
                    onClick={() => handlePaymentSelect('Apply Funds', '9012')}
                  >
                    Apply Funds ($74.21)
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardHeader
                icon={<PowerOutlinedIcon />}
                title="Choose Connector"
                subtitle="Select one connector"
              />
              <Box display="flex" justifyContent="space-around">
                <ConnectorButton
                  selected={selectedConnector === 'left'}
                  onClick={() => handleConnectorSelect('left')}
                  borderRadius="15px 0 0 15px"
                >
                  1 (Left)
                </ConnectorButton>
                <ConnectorButton
                  selected={selectedConnector === 'right'}
                  onClick={() => handleConnectorSelect('right')}
                  borderRadius="0 15px 15px 0"
                >
                  (Right) 2
                </ConnectorButton>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardHeader
                icon={<NotificationsNoneIcon />}
                title="Get Notified"
                subtitle="Set up your notification channels"
              />
              {notify ? (
                <>
                <Typography variant="body2"> Hey <strong>{notificationInfo.name}</strong> here is how you'll get notified:</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" border="0.5px solid grey" borderRadius={1} p={2} marginBottom={1} marginTop={1}>
                <Box textAlign="left" flex={1} ml={2}>
                  <Typography variant="body2"><strong>SMS/Text</strong></Typography>
                  <Typography variant="body2">{notificationInfo.phone}</Typography>
                </Box>
                <EditIconButton onClick={handleEditNotifications}>
                  <EditNoteOutlinedIcon />
                </EditIconButton>
                </Box>

                <Box display="flex" justifyContent="space-between" alignItems="center" border="0.5px solid grey" borderRadius={1} p={2}>
                <Box textAlign="left" flex={1} ml={2}>
                  <Typography variant="body2"><strong>Emailt</strong></Typography>
                  <Typography variant="body2">{notificationInfo.email}</Typography>
                </Box>
                <EditIconButton onClick={handleEditNotifications}>
                  <EditNoteOutlinedIcon />
                </EditIconButton>
                </Box>
                </>
              ) : (
                <Box display="flex" flexDirection="column" gap={2}>
                  <Button
                    variant="outlined"
                    className={notify ? 'selected' : ''}
                    onClick={handleNotifySelect}
                  >
                    Set up Notifications
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </CardContainer>

        <CustomButton
          variant="outlined"
          color="primary"
          disabled={!selectedConnector || !selectedPayment || !notify}
          onClick={handleStartCharging}
        >
          Start Charging
        </CustomButton>

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
              onChange={handleInputChange}
              required
            />
            <TextField
              name="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={notificationInfo.phone}
              onChange={handleInputChange}
              required
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
