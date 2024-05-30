import { useEffect, useState } from 'react';
import type { NFTMetadata, Web3ConfigProviderProps } from '@ant-design/web3-common';

import useProvider from './useProvider';

export default function useNFT(
  address?: string,
  tokenId?: bigint | number,
  getNFTMetadata?: Web3ConfigProviderProps['getNFTMetadata'],
) {
  const [metadata, setMetadata] = useState<NFTMetadata>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const { getNFTMetadata: getNFTMetadataFunc } = useProvider({
    getNFTMetadata,
  });

  useEffect(() => {
    if (!address) return;
    if (getNFTMetadataFunc) {
      setLoading(true);
      getNFTMetadataFunc({
        address,
        tokenId: tokenId ? BigInt(tokenId) : undefined,
      })
        .then((data) => {
          setMetadata(data);
        })
        .catch((err) => {
          setError(err);
          setMetadata({});
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
