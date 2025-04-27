export function createMoonpay() {
    return {
      name: 'Moonpay',
      init: () => {
        console.log('Moonpay gateway initialized');
      },
      launchWidget: () => {
        console.log('Moonpay widget launched');
      },
    };
  }
  