import React from 'react';

export interface AddressProps {
  ellipsis?: boolean;
  address?: string;
}

export const Address: React.FC<AddressProps> = (props) => {
  const { ellipsis, address } = props;

  if (!address) {
    return null;
  }

  const filledAddress = address.startsWith('0x') ? address : `0x${address}`;

  return (
    <>{ellipsis ? filledAddress?.slice(0, 6) + '...' + filledAddress?.slice(-4) : filledAddress}</>
  );
};
