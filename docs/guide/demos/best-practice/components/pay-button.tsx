// /components/pay-button.tsx
import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Button, Flex } from 'antd';
import { createConfig, http } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

import EvmSignTransaction from './send';

type PayButtonsProps = {
  setTokenEcosystem?: (token: string) => void;
  tokenEcosystem: string;
  signCallback: (signTransfer: (toAddress: string, amount: number) => void) => void;
  payCallback: (signTransfer: string, address: string) => void;
  onRejectSwitchChain?: (id: number) => void;
};

const config = createConfig({
  chains: [mainnet, polygon, arbitrum, optimism],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
  ],
});

export const EvmPayButtons: React.FC<PayButtonsProps> = ({
  setTokenEcosystem,
  tokenEcosystem,
  signCallback,
  payCallback,
  onRejectSwitchChain,
}) => {
  return (
    <div>
      <WagmiWeb3ConfigProvider
        config={config}
        eip6963={{
          autoAddInjectedWallets: true,
        }}
        wallets={[MetaMask()]}
        chains={[mainnet, polygon, arbitrum, optimism]}
      >
        <Flex justify="space-between" style={{ width: 400, marginTop: 20 }}>
          <Connector
            modalProps={{
              footer: (
                <>
                  Powered by{' '}
                  <a href="https://web3.ant.design/" target="_blank" rel="noreferrer">
                    Ant Design Web3
                  </a>
                </>
              ),
            }}
          >
            <ConnectButton showChainSelect={false} />
          </Connector>
          <EvmSignTransaction
            setTokenEcosystem={setTokenEcosystem}
            tokenEcosystem={tokenEcosystem}
            signTransactionCallback={(signTransfer, address) => {
              payCallback(signTransfer, address);
            }}
            onRejectSwitchChain={onRejectSwitchChain}
            renderSignButton={(signTransfer, disabled, signLoading) => (
              <Button
                type="primary"
                style={{ width: 200 }}
                loading={signLoading}
                disabled={disabled}
                onClick={() => {
                  signCallback(signTransfer);
                }}
              >
                Pay
              </Button>
            )}
          />
        </Flex>
      </WagmiWeb3ConfigProvider>
    </div>
  );
};
