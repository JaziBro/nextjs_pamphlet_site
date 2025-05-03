import { createTransak } from './transak';
import { createStripe } from './stripe';

export function createPaymentGateway(name: string, walletAddress?: string, priceId?: string) {
  switch (name) {
    case 'transak':
      return createTransak(walletAddress!);
    case 'stripe':
      return createStripe();
    case 'nowpayments':
      if (!walletAddress) throw new Error('NOWPayments requires a wallet address');
    default:
      throw new Error('Unsupported payment gateway');
  }
}


