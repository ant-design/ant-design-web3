import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  UnisatWallet,
  useWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import { Button } from 'antd';

const SignMessage: React.FC = () => {
  const { signMessage } = useWallet();

  return (
    <Button
      onClick={async () => {
        try {
          const result = await signMessage?.('Hello World!');
          console.log('sign message success!', result);
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
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
      <SignMessage />
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
