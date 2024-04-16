import { CryptoPrice } from '@ant-design/web3';

function formatMoney(value: number) {
  // 使用千分符分隔金额
  return value.toLocaleString();
}

const App: React.FC = () => {
  const customFormat = (
    preFormatValue: string,
    info: { originValue: number | bigint; symbol: string; decimals?: number; fixed?: number },
  ) => {
    return `${formatMoney(Number(preFormatValue))} ${info.symbol}`;
  };
  return <CryptoPrice format={customFormat} value={123456700000000000000000n} />;
};

export default App;
