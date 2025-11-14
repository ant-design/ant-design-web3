import { NFTCard } from '@ant-design/web3';
import { solana } from '@ant-design/web3-solana';
import { SolanaNftMetadataProvider, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana-v2';
import { createSolanaRpc, createSolanaRpcSubscriptions, mainnet } from '@solana/kit';

const RPC_MAINNET = `https://api.zan.top/node/v1/solana/mainnet/${YOUR_ZAN_API_KEY}`;
const WS_RPC_MAINNET = `wss://api.zan.top/node/v1/solana/mainnet/${YOUR_ZAN_API_KEY}`;

export default function App() {
  return (
    <SolanaWeb3ConfigProvider
      chains={[solana]}
      rpcProvider={() => {
        return {
          rpc: createSolanaRpc(mainnet(RPC_MAINNET)),
          rpcSubscriptions: createSolanaRpcSubscriptions(mainnet(WS_RPC_MAINNET)),
        };
      }}
    >
      <SolanaNftMetadataProvider>
        <NFTCard address="3z6hsmW5D24worcsd1QuRSi4EAsMPP4419VEaqMrNJfH" />
      </SolanaNftMetadataProvider>
    </SolanaWeb3ConfigProvider>
  );
}
