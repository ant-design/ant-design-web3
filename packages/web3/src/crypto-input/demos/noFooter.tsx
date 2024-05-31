import { useState } from 'react';
import { CryptoInput, type CryptoInputProps } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  return (
    <div style={{ width: 456 }}>
      <CryptoInput value={crypto} footer={false} onChange={setCrypto} tokenList={[ETH, USDT]} />
    </div>
  );
};

export default App;
