import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  LeatherWallet,
  UnisatWallet,
  useAdapter,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import { Button } from 'antd';

const SendBitcoin: React.FC = () => {
  const { sendBitcoin } = useAdapter();

  return (
    <Button
      onClick={async () => {
        try {
          const result = await sendBitcoin(
            'bc1plht8mve2fxz3qgwdlcsn6u67u629dnh35j6ydx0yqu5drj9mu0zs9tz2ud',
            10000,
          );
        } catch (error) {
          console.log('sign message error:', error);
        }
      }}
    >
      Send Bitcoin
    </Button>
  );
};

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet(), LeatherWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
      <SendBitcoin />
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
