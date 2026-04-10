import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import type { Chain } from '@ant-design/web3-common';
import { defaultLocale } from '@ant-design/web3-common';
import type { ChainAssetWithWagmiChain } from '@ant-design/web3-wagmi';
import {
  chainToAddNetworkParams,
  Mainnet,
  MetaMask,
  Polygon,
  Sepolia,
  useAddNetwork,
  useSwitchNetwork,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from '@ant-design/web3-wagmi';
import { Button, message, Space } from 'antd';
import { http } from 'wagmi';

/** MetaMask 的 EIP-6963 rdns，用于未连接时指定「添加到 MetaMask」 */
const METAMASK_RDNS = 'io.metamask';

// Jovay-testnet 配置：用作添加网络示例
const JovayTestnetChainId = 2019775;
const JovayTestnet: ChainAssetWithWagmiChain = {
  id: JovayTestnetChainId,
  name: 'jovay-testnet',
  wagmiChain: {
    id: JovayTestnetChainId,
    name: 'jovay-testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://api.zan.top/public/jovay-testnet'] },
    },
    blockExplorers: {
      default: {
        name: 'Jovay Explorer',
        url: 'https://sepolia-explorer.jovay.io/l2',
      },
    },
  },
};

const localeMessages = defaultLocale.AddOrSwitchNetwork;
const getMessage = (msg: string, values?: Record<string, string>) =>
  values ? msg.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? '') : msg;

const AddOrSwitchNetworkDemo: React.FC = () => {
  const { addNetwork, isLoading: addLoading } = useAddNetwork();
  const { switchNetwork, isLoading: switchLoading } = useSwitchNetwork();
  const [messageApi, contextHolder] = message.useMessage();
  const isLoading = addLoading || switchLoading;

  const handleAddJovayTestnet = async (options?: { preferredWalletRdns?: string }) => {
    const params = chainToAddNetworkParams(JovayTestnet);
    if (!params) {
      messageApi.error(localeMessages.networkParamsIncomplete);
      return;
    }
    try {
      await addNetwork(params, options);
      messageApi.success(localeMessages.networkAddedSuccess);
    } catch (err: any) {
      const code = err?.code ?? err?.cause?.code;
      const msg = err?.message ?? '';
      if (code === 'NO_CONNECTOR' || code === 'NO_PROVIDER') {
        messageApi.error(localeMessages.noWalletDetected);
      } else if (code === 'NETWORK_PARAMS_INCOMPLETE') {
        messageApi.error(localeMessages.networkParamsIncomplete);
      } else if (code === 4001 || msg.includes('User rejected')) {
        messageApi.warning(localeMessages.userCanceled);
      } else if (code === -32601) {
        messageApi.error(localeMessages.walletNotSupport);
      } else if (msg.includes('timeout') || msg.includes('NETWORK_TIMEOUT')) {
        messageApi.error(localeMessages.requestTimeout);
      } else {
        messageApi.error(
          getMessage(localeMessages.networkAddFailedWithMsg, { errorMsg: msg || 'Unknown error' }),
        );
      }
    }
  };

  const handleSwitchTo = async (chain: Chain) => {
    try {
      await switchNetwork(chain, { addIfNotExists: true });
      messageApi.success(localeMessages.switchSuccess);
    } catch (err: any) {
      const code = err?.code ?? err?.cause?.code;
      const msg = err?.message ?? '';
      if (code === 'NO_CONNECTOR') {
        messageApi.error(localeMessages.pleaseConnectWallet);
      } else if (!msg.includes('User rejected')) {
        messageApi.error(
          getMessage(localeMessages.switchFailedWithMsg, { errorMsg: msg || 'Unknown error' }),
        );
      }
    }
  };

  return (
    <>
      {contextHolder}
      <Space direction="vertical" style={{ width: '100%' }}>
        <div>
          <Connector>
            <ConnectButton />
          </Connector>
        </div>
        <Space wrap>
          <Button loading={isLoading} onClick={() => handleAddJovayTestnet()}>
            Add Jovay-testnet to wallet
          </Button>
          <Button
            loading={isLoading}
            onClick={() => handleAddJovayTestnet({ preferredWalletRdns: METAMASK_RDNS })}
          >
            Add Jovay-testnet to MetaMask
          </Button>
          <Button loading={isLoading} onClick={() => handleSwitchTo(JovayTestnet)}>
            {getMessage(localeMessages.switchToNetwork, { chainName: JovayTestnet.name })}
          </Button>
          <Button loading={isLoading} onClick={() => handleSwitchTo(Sepolia)}>
            {getMessage(localeMessages.switchToNetwork, { chainName: Sepolia.name })}
          </Button>
          <Button loading={isLoading} onClick={() => handleSwitchTo(Polygon)}>
            {getMessage(localeMessages.switchToNetwork, { chainName: Polygon.name })}
          </Button>
        </Space>
      </Space>
    </>
  );
};

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      walletConnect={{
        projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
      }}
      eip6963
      transports={{
        [Mainnet.id]: http(),
        [Polygon.id]: http(),
        [Sepolia.id]: http(),
        [JovayTestnetChainId]: http('https://api.zan.top/public/jovay-testnet'),
      }}
      wallets={[MetaMask(), WalletConnect()]}
      chains={[Mainnet, Polygon, Sepolia, JovayTestnet]}
    >
      <AddOrSwitchNetworkDemo />
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
