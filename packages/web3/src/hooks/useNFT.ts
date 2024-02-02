import { useEffect, useState } from 'react';
import type { Chain, NFTMetadata, Web3ConfigProviderProps } from '@ant-design/web3-common';

import useProvider from './useProvider';

export default function useNFT(
  address?: string,
  tokenId?: bigint | number,
  getNFTMetadata?: Web3ConfigProviderProps['getNFTMetadata'],
) {
  const [metadata, setMetadata] = useState<NFTMetadata>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const {
    getNFTMetadata: getNFTMetadataFunc,
    availableChains,
    chain,
  } = useProvider({
    getNFTMetadata,
  });

  const findChainIndex = (availableChains: Chain[], chain: Chain) => {
    const index = availableChains?.findIndex((chainItem) => {
      return chainItem?.id === chain?.id;
    });
    return index + 1;
  };

  useEffect(() => {
    if (!address || !tokenId) {
      return;
    }
    if (getNFTMetadataFunc) {
      setLoading(true);
      getNFTMetadataFunc({
        address,
        tokenId: BigInt(tokenId),
      })
        .then((data) => {
          if (findChainIndex(availableChains as Chain[], chain as Chain) > 1) {
            data.image = '';
          }
          setMetadata(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError(new Error('Provider is not ready'));
    }
  }, [address, tokenId, getNFTMetadataFunc]);
  return {
    loading,
    metadata,
    error,
  };
}
