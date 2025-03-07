import { ConnectButton, Connector } from '@ant-design/web3';
import { BybitWallet, TronlinkWallet, TronWeb3ConfigProvider } from '@ant-design/web3-tron';

const Basic = () => {
  return (
    <TronWeb3ConfigProvider wallets={[TronlinkWallet, BybitWallet]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </TronWeb3ConfigProvider>
  );
};

export default Basic;
