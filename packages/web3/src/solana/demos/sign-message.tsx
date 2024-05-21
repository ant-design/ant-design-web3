import { ConnectButton, Connector } from '@ant-design/web3';
import {
  PhantomWallet,
  solana,
  solanaDevnet,
  SolanaWeb3ConfigProvider,
  useWallet,
} from '@ant-design/web3-solana';
import { Button, Space } from 'antd';
import base58 from 'bs58';

const SignMessage: React.FC = () => {
  const { connected, signMessage } = useWallet();

  if (!connected) {
    return;
  }

  return (
    <Button
      onClick={async () => {
        const message = new TextEncoder().encode('Hello World!');

        try {
          const result = await signMessage?.(message);
          console.log('sign message success!', result ? base58.encode(result) : 'unknown');
        } catch (error) {
          console.log('sign message error:', error);
        }
      }}
    >
      Sign Message
    </Button>
  );
};

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      balance={false}
      chains={[solana, solanaDevnet]}
      rpcProvider={() => `https://mainnet.helius-rpc.com/?api-key=${YOUR_HELIUS_API_KEY}`}
      wallets={[PhantomWallet()]}
    >
      <Space direction="vertical">
        <Connector>
          <ConnectButton />
        </Connector>

        <SignMessage />
      </Space>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
