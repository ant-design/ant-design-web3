import { NFTCard, NFTImage } from '@ant-design/web3';
import { SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { createNetworkConfig } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { QueryClient } from '@tanstack/react-query';
import { Space } from 'antd';

const queryClient = new QueryClient();
const networkConfig = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  devnet: { url: getFullnodeUrl('devnet') },
  // testnet: { url: getFullnodeUrl('testnet') },
  testnet: { url: `https://api.zan.top/node/v1/sui/testnet/${YOUR_ZAN_API_KEY}` },
  mainnet: { url: getFullnodeUrl('mainnet') },
});

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider networkConfig={networkConfig} queryClient={queryClient}>
      <Space>
        <NFTCard address="0x110e5f6b7113ac27cad69b561d0cc595f6b875d07d2d8714e439bb73059aa6f8" />
        <NFTImage address="0x110e5f6b7113ac27cad69b561d0cc595f6b875d07d2d8714e439bb73059aa6f8" />
      </Space>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
