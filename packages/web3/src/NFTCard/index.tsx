import React from 'react';
import { Image } from 'antd';
import useNFT from '../hooks/useNFT';

export interface NFTCardProps {
  address: string;
  id: number;
}

export const NFTCard: React.FC<NFTCardProps> = ({ address, id }) => {
  const { metadata } = useNFT(address, id);

  return <Image src={metadata.image} />;
};
