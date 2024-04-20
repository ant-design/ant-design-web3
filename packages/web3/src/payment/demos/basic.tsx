import { Payment } from '@ant-design/web3';
import { BSC, Mainnet, MetaMask, Polygon } from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  const supportChains = [Mainnet, Polygon, BSC];

  return (
    <Payment
      supportChains={supportChains}
      symbol={'USDT'}
      toAddress={'0xcEf95BdEF5578C4785Dfe0b4A6e45bB339f62462'}
      amount={0.1}
      supportWallets={[MetaMask]}
    />
  );
};

export default App;
