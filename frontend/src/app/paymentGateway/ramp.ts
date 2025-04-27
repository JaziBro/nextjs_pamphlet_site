export function createRamp() {
    return {
      name: 'Ramp',
      init: () => {
        console.log('Ramp gateway initialized');
      },
      launchWidget: () => {
        console.log('Ramp widget launched');
      },
    };
  }
  