import { ConnectButton, Connector } from '@ant-design/web3';
import { okxTronWallet, tronWallets, TronWeb3ConfigProvider } from '@ant-design/web3-tron';

const Basic = () => {
  return (
    <TronWeb3ConfigProvider wallets={[tronWallets, okxTronWallet]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </TronWeb3ConfigProvider>
  );
};

export default Basic;
