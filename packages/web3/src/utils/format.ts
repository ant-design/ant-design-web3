export const fillWith0x = (address: string = ''): string => {
  const filledAddress = address.startsWith('0x') ? address : `0x${address}`;
  return filledAddress;
};
