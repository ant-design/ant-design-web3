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

  return ellipsis ? address?.slice(0, 6) + '...' + address?.slice(-4) : address;
};
