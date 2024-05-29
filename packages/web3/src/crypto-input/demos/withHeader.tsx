import { useState } from 'react';
import type { CryptoInputProps } from '@ant-design/web3';
import { ChainIds, CryptoInput } from '@ant-design/web3';
import { EthereumColorful } from '@ant-design/web3-icons';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  return (
    <CryptoInput
      value={crypto}
      onChange={setCrypto}
      header="Crypto Input Header"
      tokenList={[
        {
          name: 'Ethereum',
          symbol: 'ETH',
          icon: <EthereumColorful />,
          decimal: 18,
          availableChains: [
            {
              chain: {
                id: ChainIds.Mainnet,
                name: 'Ethereum',
              },
            },
          ],
        },
      ]}
    />
  );
};

export default App;
