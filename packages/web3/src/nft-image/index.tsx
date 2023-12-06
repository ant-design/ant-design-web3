import React from 'react';
import { Image, type ImageProps } from 'antd';
import type { UniversalWeb3ProviderInterface } from '@ant-design/web3-common';
import { getWeb3AssetUrl, parseNumberToBigint } from '@ant-design/web3-common';
import useNFT from '../hooks/useNFT';

export interface NFTCardProps extends ImageProps {
  address: string;
  tokenId: bigint | number;
  getNFTMetadata?: UniversalWeb3ProviderInterface['getNFTMetadata'];
}

export const NFTImage: React.FC<NFTCardProps> = ({
  address,
  tokenId,
  getNFTMetadata,
  alt,
  ...rest
}) => {
  const { metadata } = useNFT(address, parseNumberToBigint(tokenId), getNFTMetadata);
  return <Image src={getWeb3AssetUrl(metadata.image)} alt={alt ?? metadata.name} {...rest} />;
};
