import { createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { Connector, ConnectButton } from '@ant-design/web3';

const { publicClient, chains } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  publicClient,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
  ],
});

export default () => {
  return (
    <WagmiWeb3ConfigProvider config={config}>
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};
