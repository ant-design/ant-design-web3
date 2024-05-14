import copy from 'copy-to-clipboard';

export const getPlatform = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes('chrome')) {
    return 'Chrome';
  } else if (userAgent.includes('firefox')) {
    return 'Firefox';
  } else if (userAgent.includes('edge')) {
    return 'Edge';
  } else if (userAgent.includes('safari')) {
    return 'Safari';
  } else {
    return 'Other';
  }
};

export const writeCopyText = async (text: string): Promise<boolean> => {
  return copy(text);
};
