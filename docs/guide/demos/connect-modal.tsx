import React from 'react';
import { ConnectModal, Connector } from '@ant-design/web3';
import {
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { Button } from 'antd';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
    }),
  ],
});

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Modal Connect</Button>
      <WagmiWeb3ConfigProvider
        eip6963={{
          autoAddInjectedWallets: true,
        }}
        ens
        wallets={[
          MetaMask(),
          WalletConnect(),
          TokenPocket({
            group: 'Popular',
          }),
          OkxWallet(),
        ]}
        config={config}
      >
        <Connector>
          <ConnectModal open={open} onCancel={() => setOpen(false)} />
        </Connector>
      </WagmiWeb3ConfigProvider>
    </>
  );
};

export default App;
