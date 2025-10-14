/**
 * title: Basic Usage
 * description: Connect to Ledger hardware wallet
 */

import { ConnectButton, Connector } from '@ant-design/web3';
import { Ledger, LedgerWeb3ConfigProvider } from '@ant-design/web3-ledger';

const App: React.FC = () => {
  return (
    <LedgerWeb3ConfigProvider wallets={[Ledger()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </LedgerWeb3ConfigProvider>
  );
};

export default App;
