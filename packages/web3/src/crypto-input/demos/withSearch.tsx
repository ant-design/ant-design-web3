import { useState } from 'react';
import { CryptoInput, type CryptoInputProps, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  const [tokenBalance, setTokenBalance] = useState<{
    amount: string;
    unitPrice: string;
  }>();

  const handleQueryCrypto = async (token?: Token) => {
    if (!token) {
      return setTokenBalance(undefined);
    }

    // mock query token balance
    setTimeout(() => {
      setTokenBalance({
        amount: '100',
        unitPrice: '100',
      });
    }, 500);
  };

  return (
    <CryptoInput
      value={crypto}
      balance={tokenBalance}
      onChange={(value) => {
        setCrypto(value);

        if (value?.token?.symbol !== crypto?.token?.symbol) {
          handleQueryCrypto(value?.token);
        }
      }}
      tokenList={[ETH, USDT]}
    />
  );
};

export default App;
