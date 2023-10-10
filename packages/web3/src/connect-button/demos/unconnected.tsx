import { ChainSelect, UnconnectedButton } from '@ant-design/web3';
import {
  ArbitrumFilled,
  BSCFilled,
  EthereumFilled,
  OptimismFilled,
  PolygonFilled,
} from '@ant-design/web3-icons';
import { Space } from 'antd';

export default () => {
  return (
    <Space>
      <UnconnectedButton type="default" />
      <UnconnectedButton type="primary" />
      <UnconnectedButton type="text" />
      <Space.Compact block>
        <ChainSelect
          chains={[
            {
              id: 1,
              name: 'Ethereum',
              icon: <EthereumFilled />,
            },
            {
              id: 137,
              name: 'Polygon',
              icon: <PolygonFilled />,
            },
            {
              id: 56,
              name: 'BSC',
              icon: <BSCFilled />,
            },
            {
              id: 42_161,
              name: 'Arbitrum',
              icon: <ArbitrumFilled />,
            },
            {
              id: 10,
              name: 'Optimism',
              icon: <OptimismFilled />,
            },
          ]}
        />
        <UnconnectedButton type="default" />
      </Space.Compact>
    </Space>
  );
};
