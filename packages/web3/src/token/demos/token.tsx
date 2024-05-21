import { useState } from 'react';
import { Token } from '@ant-design/web3';
import { EthereumColorful } from '@ant-design/web3-icons';

const App: React.FC = () => {
  // 选中 token
  const [token, setToken] = useState<any>();

  return (
    <Token.Output
      token={token}
      onSelect={setToken}
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
