import React from 'react';
import { Card, CardContent, Box, Typography, Button } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CardHeader from '../CardHeader/CardHeader';
import { PaymentInfoContainer, PaymentInfoImage, EditIconButton } from './PaymentOptionsCard.styles';

const PaymentOptionsCard = ({ paymentInfo, selectedPayment, handlePaymentSelect, handleEditPayment }) => (
  <Card>
    <CardContent>
      <CardHeader
        icon={<PaymentIcon />}
        title="Payment Options"
        subtitle="Choose payment method"
      />
      {paymentInfo ? (
        <PaymentInfoContainer>
          <PaymentInfoImage src="https://www.netcloud.co.il/wp-content/uploads/2019/11/TIBA-Logo.png" alt="TIBA Logo" />
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
);

export default PaymentOptionsCard;
