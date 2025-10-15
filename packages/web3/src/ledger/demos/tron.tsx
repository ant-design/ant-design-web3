/**
 * title: Connect to TRON with Ledger
 * description: Use Ledger hardware wallet to connect to TRON network
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
