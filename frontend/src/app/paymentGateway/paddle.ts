// src/paymentGateway/paddle.ts

import { initializePaddle, Paddle } from '@paddle/paddle-js';

export const createPaddle = async (priceId: string) => {
  const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

  if (!clientToken) {
    throw new Error('Paddle client token is missing. Please set NEXT_PUBLIC_PADDLE_CLIENT_TOKEN in your environment variables.');
  }

  const paddle = await initializePaddle({
    token: clientToken,
    environment: 'sandbox', // Change to 'production' in a live environment
  });

  if (!paddle) {
    throw new Error('Failed to initialize Paddle.');
  }

  return paddle;
};
