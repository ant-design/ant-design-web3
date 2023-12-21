import { CryptoPrice } from '@ant-design/web3';
import { EthereumCircleFilled } from '@ant-design/web3-icons';

const App: React.FC = () => {
  return (
    <CryptoPrice
      icon
      chain={{
        id: 1,
        name: 'Ethereum',
        nativeCurrency: {
          name: 'Ether',
          symbol: 'WETH',
          decimals: 18,
          icon: <EthereumCircleFilled />,
        },
      }}
      value={1230000000000000000n}
    />
  );
};

export default App;
