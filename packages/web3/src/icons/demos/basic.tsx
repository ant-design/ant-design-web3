import {
  ArbitrumFilled,
  BitcoinFilled,
  Bitcoin,
  BSCFilled,
  EthereumFilled,
  Ethereum,
  OptimismFilled,
  USDT,
  WalletWhite,
} from '@ant-design/web3-icons';
import { Space } from 'antd';

const style = {
  fontSize: 64,
};

export default () => {
  return (
    <Space>
      <ArbitrumFilled style={style} />
      <BitcoinFilled style={style} />
      <Bitcoin style={style} />
      <BSCFilled style={style} />
      <EthereumFilled style={style} />
      <Ethereum style={style} />
      <OptimismFilled style={style} />
      <USDT style={style} />
      <WalletWhite style={style} />
    </Space>
  );
};
