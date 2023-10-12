import { useEffect, useState } from 'react';
import { NFTMetadata } from '@ant-design/web3-common';
import useProvider from './useProvider';

export default function useNFT(address: string, id: number) {
  const [metadata, setMetadata] = useState<NFTMetadata>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const { provider } = useProvider();

  useEffect(() => {
    if (provider) {
      setLoading(true);
      provider
        .getNFTMetadata(address, id)
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
  }, [address, id, provider]);
  return {
    loading,
    metadata,
    error,
  };
}
