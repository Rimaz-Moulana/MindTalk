import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Nrk0OSFDUE54MtAFhY0fKuF4xN7ecdMr9CIIp41qjbrKDGnYEvCc0TGgL0sgXDQ8CQ7Jg8wTRVal2GTo2OGRR1q00zw9XTipk');

const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
  hidePostalCode: false, // Show postal code field
};

const StripeButton = ({ price }) => {
  return (
    <div className="checkout">
      {/* Your content here */}
      <Elements stripe={stripePromise}>
        <CardElement options={cardElementOptions} /> {/* Include CardElement with custom options */}
        {/* You can use the 'price' prop in your Stripe component */}
      </Elements>
    </div>
  );
};

export default StripeButton;
