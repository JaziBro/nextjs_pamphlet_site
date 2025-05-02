import { createTransak } from './transak';
import { createStripe } from './stripe';
import { createPaddle } from './paddle';

export function createPaymentGateway(name: string, walletAddress?: string, priceId?: string) {
  switch (name) {
    case 'transak':
      return createTransak(walletAddress!);
    case 'stripe':
      return createStripe();
    case 'paddle':
      if (!priceId) throw new Error('Paddle requires a priceId');
        return createPaddle(priceId);
    case 'nowpayments':
      if (!walletAddress) throw new Error('NOWPayments requires a wallet address');
    default:
      throw new Error('Unsupported payment gateway');
  }
}


