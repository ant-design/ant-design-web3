import React, { useState } from 'react';
import type { CryptoInputProps } from '@ant-design/web3';
import { CryptoInput } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  return (
    <div style={{ width: 456 }}>
      <CryptoInput
        footer={'Custom Footer'}
        value={crypto}
        onChange={setCrypto}
        options={[ETH, USDT]}
      />
    </div>
  );
};

export default App;
