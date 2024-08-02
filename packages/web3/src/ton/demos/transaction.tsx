import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CHAIN,
  dewallet,
  myTonWallet,
  openmask,
  tonhub,
  tonkeeper,
  TonWeb3ConfigProvider,
  useTonConnector,
} from '@ant-design/web3-ton';
import { Button, Space } from 'antd';

const SendTransfer: React.FC = () => {
  const { connector, account, connectConfig } = useTonConnector();
  if (account?.address && connector) {
    return (
      <Button
        onClick={() => {
          connector.sendTransaction({
            validUntil: Math.floor(Date.now() / 1000) + 360,
            network: connectConfig?.chain,
            messages: [
              {
                address: '0QBLw4PC68wCqWRLq-DtRehPkKNs0Lf-XB097tPfO10bDUWi',
                amount: '500',
              },
            ],
          });
        }}
      >
        Send Transactions
      </Button>
    );
  }
  return null;
};

const Basic = () => {
  return (
    <TonWeb3ConfigProvider
      wallets={[tonkeeper, myTonWallet, tonhub, dewallet, openmask]}
      balance
      chain={CHAIN.TESTNET}
      reconnect={false}
    >
      <Space>
        <Connector>
          <ConnectButton />
        </Connector>
        <SendTransfer />
      </Space>
    </TonWeb3ConfigProvider>
  );
};

export default Basic;
