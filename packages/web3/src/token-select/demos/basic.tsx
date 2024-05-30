import { useState } from 'react';
import { TokenSelect, type Token } from '@ant-design/web3';
import { EthereumColorful } from '@ant-design/web3-icons';

const App: React.FC = () => {
  const [token, setToken] = useState<Token>();

  return (
    <TokenSelect
      value={token}
      onChange={setToken}
      tokenList={[
        {
          name: 'Ethereum',
          symbol: 'ETH',
          icon: <EthereumColorful />,
          decimal: 18,
          availableChains: [
            {
              chain: {
                name: 'Ethereum',
                id: 1,
              },
              contract: '0x',
            },
          ],
        },
      ]}
    />
  );
};

export default App;
