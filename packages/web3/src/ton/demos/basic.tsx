import { ConnectButton, Connector } from '@ant-design/web3';
import { tonkeeper, TonWeb3ConfigProvider } from '@ant-design/web3-ton';

const Basic = () => {
  return (
    <TonWeb3ConfigProvider
      wallets={[tonkeeper]}
      balance={false}
      connectProps={{
        manifestUrl:
          'https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json',
        reconnect: true,
      }}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </TonWeb3ConfigProvider>
  );
};

export default Basic;
