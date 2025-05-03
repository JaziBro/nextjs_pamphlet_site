// googlepay.ts

// Extend the Window interface just in this file (no need for separate types)
declare global {
    interface Window {
      google: any;
    }
  }
  
  export const getGooglePayConfig = (totalPrice: string) => ({
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["VISA", "MASTERCARD"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "stripe",
            gatewayMerchantId: "BCR2DN7T5CZYDW3X",
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: "BCR2DN7T5CZYDW3X",
      merchantName: "The Gift Shop",
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPrice,
      currencyCode: "USD",
      countryCode: "US",
    },
  });
  
  export const loadGooglePay = () => {
    return new Promise<void>((resolve, reject) => {
      if (typeof window === "undefined") return reject("No window object");
  
      // If already loaded, resolve immediately
      if (window.google?.payments?.api?.PaymentsClient) {
        resolve();
        return;
      }
  
      const script = document.createElement("script");
      script.src = "https://pay.google.com/gp/p/js/pay.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject("Failed to load Google Pay script");
      document.head.appendChild(script);
    });
  };
  