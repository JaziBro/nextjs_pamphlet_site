// paymentGateways/transak.ts

import { Transak, TransakConfig } from '@transak/transak-sdk';

export function createTransak(walletAddress: string) {
  const transakConfig: TransakConfig = {
    apiKey: 'a46b3e00-b887-426a-9599-7c541ee0e992' , // Ensure this is defined in your .env file
    environment: Transak.ENVIRONMENTS.STAGING, // Use 'STAGING' if your API key is for staging
    walletAddress: walletAddress,
    themeColor: '000000',
    widgetHeight: '700px',
    widgetWidth: '500px',
    // Add other configurations as needed
  };

  const transak = new Transak(transakConfig);

  return transak;
}
