import { ConnectButton, Connector } from '@ant-design/web3';
import {
  BitgetWallet,
  BybitWallet,
  OkxTronWallet,
  TronlinkWallet,
  TronWeb3ConfigProvider,
} from '@ant-design/web3-tron';

const Basic = () => {
  return (
    <TronWeb3ConfigProvider wallets={[TronlinkWallet, OkxTronWallet, BitgetWallet, BybitWallet]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </TronWeb3ConfigProvider>
  );
};

export default Basic;
