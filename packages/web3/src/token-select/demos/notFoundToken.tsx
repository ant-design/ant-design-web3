import React, { useState } from 'react';
import { TokenSelect, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [token, setToken] = useState<Token>({ ...USDT, symbol: 'Solana' });

  return <TokenSelect value={token} onChange={setToken} options={[ETH, USDT]} />;
};

export default App;
