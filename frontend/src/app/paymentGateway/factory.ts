import { createTransak } from './transak';
import { createStripe } from './stripe';

export function createPaymentGateway(name: string, walletAddress?: string) {
  switch (name) {
    case 'transak':
      return createTransak(walletAddress!);
    case 'stripe':
      return createStripe();
    default:
      throw new Error('Unsupported payment gateway');
  }
}
