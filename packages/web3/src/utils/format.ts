export const fillWithPrefix = (address: string = '', prefix?: string): string => {
  if (!prefix) return address;

  const filledAddress = address.startsWith(prefix) ? address : `${prefix}${address}`;
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
  const displayValue = bigValue / divisor;
  const fraction = bigValue % divisor;

  if (fraction === 0n && fixed === undefined) {
    return `${displayValue}`;
  }

  let fractionStr = fraction.toString().padStart(decimals, '0');
  if (fixed === undefined) {
    return `${displayValue}.${fractionStr.replace(/0+$/, '')}`;
  }
  fractionStr = fractionStr.substring(0, fixed).padEnd(fixed, '0');
  return `${displayValue}.${fractionStr}`;
};
