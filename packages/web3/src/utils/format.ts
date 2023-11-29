export const fillWith0x = (address: string = ''): string => {
  const filledAddress = address.startsWith('0x') ? address : `0x${address}`;
  return filledAddress;
};

export const formatAddress = (address: string = '', groupSize = 4): string => {
  const formattedGroups = [];

  for (let i = 0; i < address.length; i += groupSize) {
    const group = address.slice(i, i + groupSize);
    formattedGroups.push(group);
  }

  return formattedGroups.join(' ');
};
