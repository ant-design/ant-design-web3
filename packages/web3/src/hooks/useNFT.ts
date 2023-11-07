import { useEffect, useState } from 'react';
import { NFTMetadata } from '@ant-design/web3-common';
import useProvider from './useProvider';

export default function useNFT(address: string, tokenId: bigint) {
  const [metadata, setMetadata] = useState<NFTMetadata>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const { getNFTMetadata } = useProvider();

  useEffect(() => {
    if (getNFTMetadata) {
      setLoading(true);
      getNFTMetadata({
        address,
        tokenId,
      })
        .then((data) => {
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
  }, [address, tokenId, getNFTMetadata]);
  return {
    loading,
    metadata,
    error,
  };
}
