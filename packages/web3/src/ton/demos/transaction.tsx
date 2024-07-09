import { ConnectButton, Connector } from '@ant-design/web3';
import { CHAIN, tonkeeper, TonWeb3ConfigProvider, useTonConnector } from '@ant-design/web3-ton';
import { Button, Space } from 'antd';

const SendTransfer: React.FC = () => {
  const { connector, account } = useTonConnector();
  if (account?.address && connector) {
    return (
      <Button
        onClick={() => {
          connector?.sendTransaction({
            validUntil: Math.floor(Date.now() / 1000) + 360,
            network: CHAIN.TESTNET,
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
      wallets={[tonkeeper]}
      balance={true}
      connectProps={{
        manifestUrl:
          'https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json',
        reconnect: false,
        chain: CHAIN.TESTNET,
      }}
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
