import React from 'react';
import { Card, CardContent, Box, Typography, Button, Skeleton } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CardHeader from '../CardHeader/CardHeader';
import { PaymentInfoContainer, PaymentInfoImage, EditIconButton } from './PaymentOptionsCard.styles';
import faacLogo from '../../assets/images/FAACLogo.svg'

const PaymentOptionsCard = ({ paymentInfo, selectedPayment, handlePaymentSelect, handleEditPayment, loading }) => (
  <Card>
    <CardContent>
      <CardHeader
        icon={<PaymentIcon />}
        title={paymentInfo ? 'Selected Payment Option' : 'Select Payment Option'}
        subtitle={paymentInfo ? '' : 'Choose payment method'}
      />

      {loading ? (
        <PaymentInfoContainer>
        <PaymentInfoImage src={faacLogo} alt="FAAC Parking Solutions Logo" />
        <Box textAlign="left" flex={1} ml={2}>
          <Skeleton variant="text" height={40} width="80%" />
          <Skeleton variant="text" height={30} width="70%" />
          <Skeleton variant="text" height={30} width="70%" />
        </Box>
        <EditIconButton onClick={handleEditPayment}>
          <EditNoteOutlinedIcon />
        </EditIconButton>
        </PaymentInfoContainer>
      ) : paymentInfo ? (
        <PaymentInfoContainer>
        <PaymentInfoImage src={faacLogo} alt="FAAC Parking Solutions Logo" />
        <Box textAlign="left" flex={1} ml={2}>
            <Typography variant="body1"><strong>{paymentInfo.method}</strong></Typography>
            <Typography variant="body1">ID: {paymentInfo.id}</Typography>
            <Typography variant="body1">Verified {paymentInfo.verifiedAt}</Typography>
          </Box>
          <EditIconButton onClick={handleEditPayment}>
            <EditNoteOutlinedIcon />
          </EditIconButton>
        </PaymentInfoContainer>
      ) : (
        <Box display="flex" flexDirection="column" gap={2}>
          <Button
            variant="outlined"
            className={selectedPayment === 'addToParking' ? 'selected' : ''}
            onClick={() => handlePaymentSelect('Add to Parking', '1234')}
          >
            Scan Parking ticket
          </Button>
          <Button
            variant="outlined"
          >
            Pay Using License Plate
          </Button>
        </Box>
      )}
    </CardContent>
  </Card>
);

export default PaymentOptionsCard;
