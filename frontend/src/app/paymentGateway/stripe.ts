// paymentGateways/stripe.ts

import { loadStripe } from '@stripe/stripe-js';

export async function createStripe() {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
  
  if (!stripe) {
    throw new Error("Stripe failed to initialize.");
  }

  return stripe;
}
