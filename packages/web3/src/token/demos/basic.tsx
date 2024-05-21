import { useState } from 'react';
import { Token } from '@ant-design/web3';
import { EthereumColorful } from '@ant-design/web3-icons';

const App: React.FC = () => {
  const [token, setToken] = useState<any>(undefined);

  return (
    <Token.Select
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
