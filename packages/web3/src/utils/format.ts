export const fillWith0x = (address: string = ''): string => {
  const filledAddress = address.startsWith('0x') ? address : `0x${address}`;
  return filledAddress;
};

export const formatAddress = (address: string = '', groupSize = 4): string => {
  const formattedGroups = [];

  const has0x = address.startsWith('0x');
  const formatText = has0x ? address.slice(2) : address;

  for (let i = 0; i < formatText.length; i += groupSize) {
    const group = formatText.slice(i, i + groupSize);
    formattedGroups.push(group);
  }

  const formattedText = formattedGroups.join(' ');

  return has0x ? `0x ${formattedText}` : formattedText;
};

export const formatBalance = (value: bigint | number, decimals: number, fixed?: number): string => {
  const bigValue = typeof value === 'bigint' ? value : BigInt(value);
  const divisor = BigInt(10 ** decimals);
  const eth = bigValue / divisor;
  const ethFraction = bigValue % divisor;

  if (ethFraction === 0n && fixed === undefined) {
    return `${eth}`;
  }

  let fractionStr = ethFraction.toString().padStart(decimals, '0');
  if (fixed === undefined) {
    return `${eth}.${fractionStr.replace(/0+$/, '')}`;
  }
  fractionStr = fractionStr.substring(0, fixed).padEnd(fixed, '0');
  return `${eth}.${fractionStr}`;
};
