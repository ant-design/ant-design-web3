import type { PropsWithChildren } from 'react';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import { getMetadataAccountDataSerializer } from '@metaplex-foundation/mpl-token-metadata';
import {
  address,
  assertAccountExists,
  fetchEncodedAccount,
  getAddressCodec,
  getProgramDerivedAddress,
} from '@solana/kit';

import { useRpc } from './rpc-provider';

const METADATA_PROGRAM_ADDRESS = address('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');

export function SolanaNftMetadataProvider(props: PropsWithChildren) {
  const { rpc } = useRpc();

  return (
    <Web3ConfigProvider
      getNFTMetadata={async ({ address: tokenAddress }) => {
        const addressCodec = getAddressCodec();

        const [metadataPda] = await getProgramDerivedAddress({
          programAddress: METADATA_PROGRAM_ADDRESS,
          seeds: [
            Buffer.from('metadata', 'utf8'),
            addressCodec.encode(METADATA_PROGRAM_ADDRESS),
            addressCodec.encode(address(tokenAddress)),
          ],
        });

        const metadataInfo = await fetchEncodedAccount(rpc, metadataPda);

        assertAccountExists(metadataInfo);

        const dataSerializer = getMetadataAccountDataSerializer();
        const [metadataInfoData] = dataSerializer.deserialize(metadataInfo.data);

        const response = await fetch(metadataInfoData.uri);
        const result = await response.json();

        return {
          name: result.name,
          image: result.image,
          description: result.description,
          attributes: result.attributes,
        };
      }}
    >
      {props.children}
    </Web3ConfigProvider>
  );
}
