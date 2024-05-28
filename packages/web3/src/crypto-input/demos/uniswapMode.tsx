import { Suspense, useDeferredValue, useState } from 'react';
import type { CryptoInputProps, Token } from '@ant-design/web3';
import { ChainIds, CryptoInput } from '@ant-design/web3';
import { EthereumColorful } from '@ant-design/web3-icons';
import { Flex, Spin } from 'antd';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  const [tokenBalance, setTokenBalance] = useState<{
    balance: string;
    price: string;
  }>();

  // token total price
  const total = useDeferredValue(
    crypto?.amount
      ? (parseFloat(crypto.amount) * parseFloat(tokenBalance?.price || '0')).toString()
      : undefined,
  );

  const handleQueryCrypto = async (token?: Token) => {
    if (!token) {
      return setTokenBalance(undefined);
    }

    // mock query token balance
    setTimeout(() => {
      setTokenBalance({
        balance: '100',
        price: '100',
      });
    }, 500);
  };

  return (
    <CryptoInput
      value={crypto}
      onChange={(value) => {
        setCrypto(value);

        if (value?.token?.symbol !== crypto?.token?.symbol) {
          handleQueryCrypto(value?.token);
        }
      }}
      header={<span style={{ color: 'rgba(0 0 0 / 45%)' }}>Sell</span>}
      footer={
        <Suspense fallback={<Spin spinning />}>
          {!!tokenBalance && (
            <Flex style={{ color: 'rgba(0 0 0 / 45%)', fontWeight: '500' }} justify="space-between">
              <span>{total || '-'}</span>
              <span>
                Balance: {tokenBalance?.balance || '-'}
                <a
                  style={{ marginInlineStart: 4, color: 'red' }}
                  onClick={() => {
                    setCrypto({
                      ...crypto,
                      amount: tokenBalance?.balance,
                    });
                  }}
                >
                  Max
                </a>
              </span>
            </Flex>
          )}
        </Suspense>
      }
      tokenList={[
        {
          name: 'Ethereum',
          symbol: 'ETH',
          icon: <EthereumColorful />,
          decimal: 18,
          availableChains: [
            {
              chain: {
                id: ChainIds.Mainnet,
                name: 'Ethereum',
              },
              contract: '0x',
            },
          ],
        },
      ]}
    />
  );
};

export default App;
