/**
 * title: Using Ledger Hardware Wallet with TRON
 * description: Connect to TRON using Ledger hardware wallet for enhanced security
 */

import { ConnectButton, Connector } from '@ant-design/web3';
import { LedgerWallet, TronWeb3ConfigProvider } from '@ant-design/web3-tron';

const App: React.FC = () => {
  return (
    <TronWeb3ConfigProvider wallets={[LedgerWallet]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </TronWeb3ConfigProvider>
  );
};

export default App;
