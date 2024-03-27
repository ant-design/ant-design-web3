import { QuestionCircleOutlined, WalletFilled } from '@ant-design/icons';
import { ConnectButton, Connector } from '@ant-design/web3';
import { MetaMask, WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNET_PROJECT_ID,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider wallets={[MetaMask(), WalletConnect()]} config={config}>
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
                  window.open('https://zan.top/?chInfo=ch_antdweb3');
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
