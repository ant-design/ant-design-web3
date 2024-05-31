import { useState } from 'react';
import { CryptoInput, type CryptoInputProps } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  return <CryptoInput value={crypto} footer={false} onChange={setCrypto} tokenList={[ETH, USDT]} />;
};

export default App;
