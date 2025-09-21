'use client';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);


export default  function CheckoutPage() {
    const searchParams = useSearchParams();
    const bookingId = searchParams.get('bookingId');

    

    const fetchClientSecret = useCallback(async () => {
        if (!bookingId) return null;
        try {
            const response = await axios.post('/api/payment', {
                bookingId,
            });
            return response.data.clientSecret;
        } catch (error) {
            console.error('Error creating payment intent:', error);
            return null;
        }
    }, [bookingId]);
    
    if (!bookingId) {
        return <div>Invalid booking ID</div>;
    }
    const options = {
        fetchClientSecret: fetchClientSecret,
        
      }
  return <div id='checkout'>
    <EmbeddedCheckoutProvider
      stripe={stripePromise}
      options={options}
    >
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  </div>
}