import { useEffect, useState } from 'react';
import { NFTMetadata } from '@ant-design/web3-common';
import useProvider from './useProvider';

export default function useNFT(address: string, id: number) {
  const [metadata, setMetadata] = useState<NFTMetadata>({});
  const [error, setError] = useState<Error>();
  const { provider } = useProvider();

  useEffect(() => {
    if (provider) {
      console.log('reqeust nft data');
      provider
        .getNFTMetadata(address, id)
        .then((data) => {
          console.log('get data', data);
          setMetadata(data);
        })
        .catch((err) => {
          console.log('get err', err);
          setError(err);
        });
    }
  }, [address, id, provider]);
  return {
    metadata,
    error,
  };
}
