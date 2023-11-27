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

export const writeCopyText = (text: string): Promise<void> => {
  return navigator.clipboard.writeText(text);
};

export const readCopyText = (): Promise<string> => {
  return navigator.clipboard.readText();
};
