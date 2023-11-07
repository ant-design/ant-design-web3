import React from 'react';
import { Image, type ImageProps } from 'antd';
import { getWeb3AssetUrl, parseNumberToBigint } from '@ant-design/web3-common';
import useNFT from '../hooks/useNFT';

export interface NFTCardProps extends ImageProps {
  address: string;
  tokenId: bigint | number;
}

export const NFTImage: React.FC<NFTCardProps> = ({ address, tokenId, ...rest }) => {
  const { metadata } = useNFT(address, parseNumberToBigint(tokenId));
  return <Image src={getWeb3AssetUrl(metadata.image)} {...rest} />;
};
