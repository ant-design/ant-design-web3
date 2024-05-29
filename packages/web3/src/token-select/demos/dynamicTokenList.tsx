import { useState } from 'react';
import { TokenSelect } from '@ant-design/web3';
import { EthereumColorful } from '@ant-design/web3-icons';

const App: React.FC = () => {
  const [token, setToken] = useState<string>();

  return (
    <TokenSelect
      value={token}
      onChange={setToken}
      queryTokenList={() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                name: `Ethereum-${Math.random().toPrecision(2)}`,
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
            ]);
          }, 1000);
        });
      }}
    />
  );
};

export default App;
