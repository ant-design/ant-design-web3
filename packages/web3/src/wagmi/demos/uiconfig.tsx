import { createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { ConnectButton, Connector } from '@ant-design/web3';
import { QuestionCircleOutlined, WalletFilled } from '@ant-design/icons';

const { publicClient, chains } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
    new WalletConnectConnector({
      chains,
      options: {
        showQrModal: false,
        projectId: YOUR_WALLET_CONNET_PROJECT_ID,
      },
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider assets={[WalletConnect]} config={config}>
      <Connector
        modalProps={{
          title: 'ZAN.top',
        }}
      >
        <ConnectButton
          type="primary"
          icon={<WalletFilled />}
          avatar={{
            src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
          }}
          actionsMenu={{
            extraItems: [
              {
                key: 'zan',
                icon: <QuestionCircleOutlined />,
                label: 'About us',
                onClick: () => {
                  window.open('https://zan.top/');
                },
              },
            ],
          }}
        />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
