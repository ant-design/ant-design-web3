import React, { useMemo } from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { PhantomWallet, SolanaWeb3ConfigProvider, TipLinkWallet } from '@ant-design/web3-solana';

const App: React.FC = () => {
  const wallets = useMemo(
    () => [
      PhantomWallet(),
      TipLinkWallet({
        clientId: YOUR_TIPLINK_CLIENT_ID,
        theme: 'system',
        title: 'Ant Design Web3',
        hideDraggableWidget: true,
      }),
    ],
    [],
  );

  return (
    <SolanaWeb3ConfigProvider wallets={wallets}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
