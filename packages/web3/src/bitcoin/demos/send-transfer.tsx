import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitcoinWeb3ConfigProvider,
  OkxWallet,
  UnisatWallet,
  useBitcoinWallet,
  XverseWallet,
} from '@ant-design/web3-bitcoin';
import { Button, Space } from 'antd';

const SendBitcoin: React.FC = () => {
  const { sendTransfer, account } = useBitcoinWallet();

  return account ? (
    <Button
      onClick={async () => {
        try {
          // Don't send in main network!!
          await sendTransfer({
            to: 'bc1pcdv3h6nuq705e3yk4pvdlqrcfchzvd9se9zwlhke3menvxlc58zshl0ryv',
            sats: 10000,
          });
        } catch (error) {
          console.log('sign message error:', error);
        }
      }}
    >
      Send Bitcoin
    </Button>
  ) : null;
};

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet(), OkxWallet()]} balance>
      <Space>
        <Connector>
          <ConnectButton />
        </Connector>
        <SendBitcoin />
      </Space>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
