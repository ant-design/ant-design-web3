import { useEffect, useState } from 'react';
import { NFTMetadata } from '@ant-design/web3';
import useProvider from './useProvider';

export default function useNFT(address: string, id: number) {
  const [metadata, setMetadata] = useState<NFTMetadata>({});
  const [error, setError] = useState<Error>();
  const { provider } = useProvider();

  useEffect(() => {
    if (provider) {
      provider
        .getNFTMetadata(address, id)
        .then((data) => {
          setMetadata(data);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, [address, id, provider]);
  return {
    metadata,
    error,
  };
}
