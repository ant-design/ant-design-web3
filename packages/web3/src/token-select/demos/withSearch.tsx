import { useState } from 'react';
import { TokenSelect, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets';

const App: React.FC = () => {
  const [token, setToken] = useState<Token>();

  return (
    <TokenSelect
      showSearch
      value={token}
      onChange={setToken}
      placeholder={'Enter name / contract'}
      tokenList={[ETH, USDT]}
    />
  );
};

export default App;
