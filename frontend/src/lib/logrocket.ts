// lib/logrocket.ts
import LogRocket from 'logrocket';

export const initLogRocket = () => {
  if (typeof window !== 'undefined') {
    LogRocket.init('vatpfm/next-js-pamphlet');
  }
};
