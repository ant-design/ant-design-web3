import copy from 'copy-to-clipboard';

export const getPlatform = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes('chrome')) {
    return 'Chrome';
  }
  if (userAgent.includes('firefox')) {
    return 'Firefox';
  }
  if (userAgent.includes('edge')) {
    return 'Edge';
  }
  if (userAgent.includes('safari')) {
    return 'Safari';
  }
  return 'Other';
};

export const writeCopyText = async (text: string): Promise<boolean> => {
  return copy(text);
};
