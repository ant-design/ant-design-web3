import React from 'react';
import { Image, ImageProps } from 'antd';
import { getWeb3AssetUrl } from '@ant-design/web3-common';
import useNFT from '../hooks/useNFT';

export interface NFTCardProps extends ImageProps {
  address: string;
  tokenId: number;
}

export const NFTImage: React.FC<NFTCardProps> = ({ address, tokenId, ...rest }) => {
  const { metadata } = useNFT(address, tokenId);

  return <Image src={getWeb3AssetUrl(metadata.image)} {...rest} />;
};
