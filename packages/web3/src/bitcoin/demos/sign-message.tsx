import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  LeatherWallet,
  UnisatWallet,
  useAdapter,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import { Button } from 'antd';

const SignMessage: React.FC = () => {
  const { signMessage } = useAdapter();

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
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet(), LeatherWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
      <SignMessage />
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
