/**
 * @param address address
 * @param prefixProp addressPrefix from props
 * @param prefixContext addressPrefix from context
 */
export const fillWithPrefix = (
  address = '',
  prefixProp?: string | false,
  prefixContext?: string | false,
): string => {
  let prefix = undefined;

  // `0x` is the default prefix
  if (prefixProp === undefined && prefixContext === undefined) {
    prefix = '0x';
  }

  // has prefix be set
  else {
    // use props first
    if (prefixProp !== undefined) {
      prefix = prefixProp === false ? '' : prefixProp;
    }

    // use context
    else if (prefixContext !== undefined) {
      prefix = prefixContext === false ? '' : prefixContext;
    }
  }

  if (!prefix) return address;

  return address.startsWith(prefix) ? address : `${prefix}${address}`;
};

export const formatAddress = (address = '', groupSize = 4): string => {
  const formattedGroups = [];

  const has0x = address.startsWith('0x');
  /* v8 ignore next */
  const formatText = has0x ? address.slice(2) : address;

  for (let i = 0; i < formatText.length; i += groupSize) {
    const group = formatText.slice(i, i + groupSize);
    formattedGroups.push(group);
  }

  const formattedText = formattedGroups.join(' ');

  /* v8 ignore next */
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
