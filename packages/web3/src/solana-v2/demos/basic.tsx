import { ConnectButton, Connector } from '@ant-design/web3';
import { solana, solanaDevnet } from '@ant-design/web3-solana';
import { SolanaWeb3ConfigProvider } from '@ant-design/web3-solana-v2';
import { createSolanaRpc, createSolanaRpcSubscriptions, devnet, mainnet } from '@solana/kit';

const RPC = `https://api.zan.top/node/v1/solana/devnet/${YOUR_ZAN_API_KEY}`;
const WS_RPC = `wss://api.zan.top/node/v1/solana/devnet/${YOUR_ZAN_API_KEY}`;

const RPC_MAINNET = `https://api.zan.top/node/v1/solana/mainnet/${YOUR_ZAN_API_KEY}`;
const WS_RPC_MAINNET = `wss://api.zan.top/node/v1/solana/mainnet/${YOUR_ZAN_API_KEY}`;

export default function App() {
  return (
    <SolanaWeb3ConfigProvider
      rpcProvider={(chain) => {
        console.log('chain', chain, chain?.network === solana.network);

        if (chain?.network === solana.network) {
          return {
            rpc: createSolanaRpc(mainnet(RPC_MAINNET)),
            rpcSubscriptions: createSolanaRpcSubscriptions(mainnet(WS_RPC_MAINNET)),
          };
        }

        if (chain?.network === solanaDevnet.network) {
          return {
            rpc: createSolanaRpc(devnet(RPC)),
            rpcSubscriptions: createSolanaRpcSubscriptions(devnet(WS_RPC)),
          };
        }

        throw new Error(`Unsupported chain: ${chain?.network}`);
      }}
      balance
      chains={[solanaDevnet, solana]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
}
