import { useState } from 'react';
import type { CryptoInputProps } from '@ant-design/web3';
import { CryptoInput } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  return (
    <CryptoInput
      footer={() => 'Custom Footer'}
      value={crypto}
      onChange={setCrypto}
      tokenList={[ETH, USDT]}
    />
  );
};

export default App;
