import React, { useState } from 'react';
import { CryptoInput, type CryptoInputProps, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';
import { Radio } from 'antd';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  const [tokenBalance, setTokenBalance] = useState<CryptoInputProps['balance']>();

  const [size, setSize] = useState<CryptoInputProps['size']>('middle');

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
    <div style={{ width: 480, rowGap: 16 }}>
      <Radio.Group
        value={size}
        onChange={(e) => setSize(e.target.value)}
        optionType="button"
        options={[
          {
            label: 'small',
            value: 'small',
          },
          {
            label: 'middle',
            value: 'middle',
          },
          {
            label: 'large',
            value: 'large',
          },
        ]}
        style={{ marginBottom: 16 }}
      />
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
        size={size}
      />
    </div>
  );
};

export default App;
