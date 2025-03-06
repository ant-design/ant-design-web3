import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, SolflareColorful } from '@ant-design/web3-icons';
import {
  OKXWallet,
  PhantomWallet,
  SolanaWeb3ConfigProvider,
  StandardWalletFactory,
} from '@ant-design/web3-solana';

const metadata_Demo: WalletMetadata = {
  icon: <SolflareColorful />,
  name: 'Demo',
  remark: 'Demo Wallet',
  app: {
    link: 'https://solflare.com/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      wallets={[
        PhantomWallet(),
        OKXWallet({
          deeplink: {
            urlTemplate: 'https://www.okx.com/download?url=${url}&ref=${ref}',
          },
          app: {
            link: 'https://www.okx.com/',
          },
        }),
        StandardWalletFactory(metadata_Demo),
      ]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
