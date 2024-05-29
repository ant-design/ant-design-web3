import { useState } from 'react';
import type { CryptoInputProps } from '@ant-design/web3';
import { ChainIds, CryptoInput } from '@ant-design/web3';
import { EthereumColorful } from '@ant-design/web3-icons';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  return (
    <CryptoInput
      footer="Crypto Input Footer"
      value={crypto}
      onChange={setCrypto}
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
              contract: '0x',
            },
          ],
        },
      ]}
    />
  );
};

export default App;
