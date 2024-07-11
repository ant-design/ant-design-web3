import { ConnectButton, Connector } from '@ant-design/web3';
import { telegramWallet, tonkeeper, TonWeb3ConfigProvider } from '@ant-design/web3-ton';

const Basic = () => {
  return (
    <TonWeb3ConfigProvider wallets={[tonkeeper, telegramWallet]} balance>
      <Connector>
        <ConnectButton />
      </Connector>
    </TonWeb3ConfigProvider>
  );
};

export default Basic;
