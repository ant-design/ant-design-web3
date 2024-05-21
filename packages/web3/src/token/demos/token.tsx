import { useState } from 'react';
import { Token } from '@ant-design/web3';
import { EthereumColorful } from '@ant-design/web3-icons';

const App: React.FC = () => {
  // 选中 token
  const [token, setToken] = useState<any>();

  // 金额
  const [amount, setAmount] = useState<string | number>();

  return (
    <Token.Output
      amount={amount}
      token={token}
      onSelect={setToken}
      onAmountChange={setAmount}
      tokenList={[
        {
          name: 'Ethereum',
          symbol: 'ETH',
          icon: <EthereumColorful />,
          contract: '0x',
        },
      ]}
    />
  );
};

export default App;
