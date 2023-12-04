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
