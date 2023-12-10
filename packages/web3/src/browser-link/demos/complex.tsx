import { BrowserLink } from '@ant-design/web3';
import { Arbitrum, Polygon } from '@ant-design/web3-assets';
import { ChainIds, Web3ConfigProvider } from '@ant-design/web3-common';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <BrowserLink
        ellipsis
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        href="https://etherscan.io/address/3ea2cfd153b8d8505097b81c87c11f5d05097c18"
      />
      <BrowserLink
        ellipsis
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        href="https://etherscan.io/address/3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        chain={ChainIds.Mainnet}
      />
      <Web3ConfigProvider chain={Polygon}>
        <BrowserLink
          ellipsis
          address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
          href="https://etherscan.io/address/3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        />
      </Web3ConfigProvider>
      <BrowserLink
        ellipsis
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        href="https://etherscan.io/address/3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        chain={ChainIds.BSC}
        iconOnly
      />
      <Web3ConfigProvider chain={Arbitrum}>
        <BrowserLink
          ellipsis
          address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
          href="https://etherscan.io/address/3ea2cfd153b8d8505097b81c87c11f5d05097c18"
          iconOnly
        />
      </Web3ConfigProvider>
      <BrowserLink
        ellipsis
        address="3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        href="https://etherscan.io/address/3ea2cfd153b8d8505097b81c87c11f5d05097c18"
        chain={ChainIds.Polygon}
        iconOnly
        iconStyle={{
          fontSize: 40,
          background: '#eee',
          boxShadow: '0 0 5px #999',
          padding: 8,
          borderRadius: '50%',
        }}
      />
    </Space>
  );
};

export default App;
