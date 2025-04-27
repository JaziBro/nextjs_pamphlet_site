// paymentGateways/factory.ts

import { createBanxa } from './banxa';
import { createMoonpay } from './moonpay';
import { createTransak } from './transak';
import { createRamp } from './ramp';

export function createPaymentGateway(name: string, walletAddress: string) {
  switch (name) {
    // case 'banxa':
    //   return createBanxa(walletAddress);
    // case 'moonpay':
    //   return createMoonpay(walletAddress);
    case 'transak':
      return createTransak(walletAddress);
    // case 'ramp':
    //   return createRamp(walletAddress);
    default:
      throw new Error('Unsupported payment gateway');
  }
}
