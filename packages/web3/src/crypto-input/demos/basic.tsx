import React, { useState } from 'react';
import { CryptoInput, type CryptoInputProps, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  const [tokenBalance, setTokenBalance] = useState<CryptoInputProps['balance']>();

  const handleQueryCrypto = async (token?: Token) => {
    if (!token) {
      return setTokenBalance(undefined);
    }

    // mock query token balance
    setTimeout(() => {
      setTokenBalance({
        amount: 10000000000000000000000n,
        unit: '$',
        price: 3984.57,
      });
    }, 500);
  };

  return (
    <div style={{ width: 456 }}>
      <CryptoInput
        value={crypto}
        balance={tokenBalance}
        onChange={(value) => {
          setCrypto(value);

          if (value?.token?.symbol !== crypto?.token?.symbol) {
            handleQueryCrypto(value?.token);
          }
        }}
        options={[ETH, USDT]}
      />
    </div>
  );
};

export default App;
