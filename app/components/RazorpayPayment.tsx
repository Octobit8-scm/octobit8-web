'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface RazorpayPaymentProps {
  amount: number;
  courseName: string;
  onSuccess: (response: any) => void;
  onError: (error: any) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayPayment({ amount, courseName, onSuccess, onError }: RazorpayPaymentProps) {
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    try {
      const res = await initializeRazorpay();
      if (!res) {
        onError('Razorpay SDK failed to load');
        return;
      }

      // Make API call to the serverless API
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to paise
          courseName,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: 'INR',
        name: 'Octobit8',
        description: `Payment for ${courseName}`,
        order_id: data.id,
        handler: function (response: any) {
          onSuccess(response);
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#6366f1',
        },
        modal: {
          ondismiss: function() {
            onError('Payment cancelled');
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment error:', error);
      onError(error);
    }
  };

  return (
    <button
      onClick={makePayment}
      className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
    >
      Pay Now
    </button>
  );
} 