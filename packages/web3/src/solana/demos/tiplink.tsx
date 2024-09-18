import React, { useMemo } from 'react';
import type { WalletMetadata } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import { PhantomWallet, SolanaWeb3ConfigProvider, WalletFactory } from '@ant-design/web3-solana';
import { GoogleViaTipLinkWalletName, TipLinkWalletAdapter } from '@tiplink/wallet-adapter';

const metadata_TipLink: WalletMetadata = {
  name: GoogleViaTipLinkWalletName,
  remark: 'TipLink Wallet',
  app: {
    link: 'https://tiplink.io/',
  },
};

export const TiplinkWallet = () =>
  WalletFactory(
    new TipLinkWalletAdapter({
      clientId: YOUR_TIPLINK_CLIENT_ID,
      theme: 'system',
      title: 'Ant Design Web3',
    }),
    metadata_TipLink,
  );

const App: React.FC = () => {
  const wallets = useMemo(() => [PhantomWallet(), TiplinkWallet()], []);

  return (
    <SolanaWeb3ConfigProvider wallets={wallets}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
