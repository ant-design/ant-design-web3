import React, { useState } from 'react';
import { SwapOutlined } from '@ant-design/icons';
import { CryptoInput, type CryptoInputProps, type Token } from '@ant-design/web3';
import { ETH, USDT } from '@ant-design/web3-assets/tokens';
import { Button, Flex } from 'antd';
import Decimal from 'decimal.js';

const App: React.FC = () => {
  const [cryptoPair, setCryptoPair] = useState<CryptoInputProps['value'][]>([]);

  const [tokenBalances, setTokenBalances] = useState<CryptoInputProps['balance'][]>([]);

  const handleQueryCrypto = async (crptoIndex: number, token?: Token) => {
    const newTokenBalances = [...tokenBalances];
    if (!token) {
      newTokenBalances[crptoIndex] = undefined;

      return setTokenBalances(newTokenBalances);
    }

    // mock query token balance
    console.log('Decimal.pow(10, token.decimal)', Decimal.pow(10, token.decimal).toFixed());

    setTimeout(() => {
      newTokenBalances[crptoIndex] = {
        amount: BigInt(new Decimal(1000).times(Decimal.pow(10, token.decimal)).toFixed()),
        unit: '$',
        price: token.name.includes('USD') ? 0.99 : 3984.57,
      };

      setTokenBalances(newTokenBalances);
    }, 500);
  };

  return (
    <Flex vertical align="center" style={{ width: 456 }} gap={16}>
      <CryptoInput
        header={'Sell'}
        value={cryptoPair[0]}
        balance={tokenBalances[0]}
        onChange={(crypto) => {
          setCryptoPair([crypto, cryptoPair[1]]);

          if (crypto?.token?.symbol !== cryptoPair?.[0]?.token?.symbol) {
            handleQueryCrypto(0, crypto?.token);
          }
        }}
        options={[ETH, USDT]}
      />
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <span
        style={{
          width: 30,
          height: 30,
          background: '#fff',
          border: '1px solid #d9d9d9',
          borderRadius: 8,
          marginBlock: -24,
          zIndex: 2,
          textAlign: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        }}
        onClick={() => {
          setCryptoPair([cryptoPair[1], cryptoPair[0]]);

          setTokenBalances([tokenBalances[1], tokenBalances[0]]);
        }}
      >
        <SwapOutlined
          style={{
            fontSize: 18,
            transform: 'rotate(90deg)',
            marginBlockStart: 6,
          }}
        />
      </span>
      <CryptoInput
        header={'Buy'}
        value={cryptoPair[1]}
        balance={tokenBalances[1]}
        onChange={(crypto) => {
          setCryptoPair([cryptoPair[0], crypto]);

          if (crypto?.token?.symbol !== cryptoPair?.[1]?.token?.symbol) {
            handleQueryCrypto(1, crypto?.token);
          }
        }}
        options={[ETH, USDT]}
      />
      <Button
        type="primary"
        size="large"
        style={{ width: '100%' }}
        onClick={() => {
          console.log('current crypto pair:', cryptoPair);
        }}
      >
        Swap
      </Button>
    </Flex>
  );
};

export default App;
