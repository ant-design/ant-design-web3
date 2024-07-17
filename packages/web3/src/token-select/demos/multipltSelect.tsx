import React, { useState } from 'react';
import { TokenSelect, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [token, setToken] = useState<Token>();

  return (
    <div style={{ width: 230 }}>
      <TokenSelect
        value={token}
        onChange={setToken}
        options={[
          ETH,
          USDT,
          { ...ETH, symbol: 'ETH_CLONE', name: 'ETH_CLONE' },
          { ...USDT, symbol: 'USDT_CLONE', name: 'USDT_CLONE' },
        ]}
        mode="multiple"
        style={{ width: '100%' }}
        maxTagCount={3}
      />
    </div>
  );
};

export default App;
