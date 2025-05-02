// lib/nowpayments.ts

import axios from 'axios';

const NOWPAYMENTS_API_KEY = process.env.NEXT_PUBLIC_NOWPAYMENTS_API_KEY;

export const createCryptoInvoice = async (amount: number, currency = 'usd') => {
  const response = await axios.post(
    'https://api.nowpayments.io/v1/invoice',
    {
      price_amount: amount,
      price_currency: currency,
      order_id: `order_${Date.now()}`,
      order_description: 'Gist Voucher',
    },
    {
      headers: {
        'x-api-key': NOWPAYMENTS_API_KEY!,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.invoice_url; // You redirect the user to this
};
