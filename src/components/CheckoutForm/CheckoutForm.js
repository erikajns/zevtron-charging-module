import React, { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { CustomButton } from "./CheckoutForm.styles";
const stripePromise = loadStripe('pk_test_51PoVY600SgCnULKnKqv1Yaa4XB2UKC3w6MUL6J5H7oIbrWsBzWpDSdNWfpsfdiLJwSttUJrqG6cZDH4cqoxHFjAm00S5XNSxwu');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch the client secret from Stripe API
    axios.post('https://api.stripe.com/v1/payment_intents', {
      amount: 1099, // Example amount in cents (e.g., $10.99)
      currency: 'usd',
    }, {
      headers: {
        'Authorization': `Bearer sk_test_51PoVY600SgCnULKnVssFIqzkphG4XaLUEIkywRUefIieyQf7AE0dQpUaQirN0esLWuEAttgaR7vRkztDO2XlmGGy00mNdVrRut`, // Replace with your actual secret key
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      setClientSecret(response.data.client_secret);
    })
    .catch(error => {
      console.error('Error creating payment intent:', error);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  };

  return (
    <>
        <form id="payment-form" onSubmit={handleSubmit}>
        {clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            </Elements>
        )}
        </form>
        
        <CustomButton variant="filled" disabled={isLoading || !stripe || !elements} fullWidth id="submit">
        <span id="button-text">
        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
        </CustomButton>
        {message && <div id="payment-message">{message}</div>}
    </>
  );
};

export default CheckoutForm;
