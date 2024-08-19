import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { Container, BackButtonContainer } from './PaymentPage.styles';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51PoVY600SgCnULKnKqv1Yaa4XB2UKC3w6MUL6J5H7oIbrWsBzWpDSdNWfpsfdiLJwSttUJrqG6cZDH4cqoxHFjAm00S5XNSxwu');

const PaymentPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <Container>
      <BackButtonContainer>
        <IconButton onClick={handleBackClick}>
          <ArrowBackIcon />
        </IconButton>
      </BackButtonContainer>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </Container>
  );
};

export default PaymentPage;
