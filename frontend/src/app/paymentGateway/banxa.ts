
export function createBanxa() {
    return {
      name: 'Banxa',
      init: () => {
        console.log('Banxa gateway initialized');
      },
      launchWidget: () => {
        // This is where you'll hook in Banxa’s embed/widget
        console.log('Banxa widget launched');
      },
    };
  }
  