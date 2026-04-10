import React from 'react';
import type { SwapTokenConfig, SwapTokenToken } from '@ant-design/web3';

interface TokenBadgeProps {
  text: string;
  background: string;
}

const TokenBadge: React.FC<TokenBadgeProps> = ({ text, background }) => (
  <span
    style={{
      width: 28,
      height: 28,
      lineHeight: '28px',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 10,
      background,
    }}
  >
    {text}
  </span>
);

type DemoSymbol = 'USDC' | 'ETH';

type SwapTokenPair = SwapTokenConfig<DemoSymbol, SwapTokenToken<DemoSymbol>>;

export const mockTokenPairs: SwapTokenPair[] = [
  {
    symbol: 'USDC',
    decimals: 6,
    fromToken: {
      symbol: 'USDC',
      decimals: 6,
      icon: <TokenBadge text="USDC" background="#2775CA" />,
      name: 'USDC',
      balance: '1,250.42',
      amount: 1250420000n,
      chainId: 1,
    },
    toToken: {
      symbol: 'USDC',
      decimals: 6,
      icon: <TokenBadge text="USDC" background="#0496FF" />,
      name: 'USDC.jovay',
      balance: '980.11',
      amount: 980110000n,
      chainId: 42161,
    },
  },
  {
    symbol: 'ETH',
    decimals: 18,
    fromToken: {
      symbol: 'ETH',
      decimals: 18,
      icon: <TokenBadge text="ETH" background="#627EEA" />,
      name: 'ETH',
      balance: '2.45',
      amount: 2450000000000000000n,
      chainId: 1,
    },
    toToken: {
      symbol: 'ETH',
      decimals: 18,
      icon: <TokenBadge text="WETH" background="#1F1F1F" />,
      name: 'ETH(Jovay)',
      balance: '3.12',
      amount: 3120000000000000000n,
      chainId: 10,
    },
  },
];
