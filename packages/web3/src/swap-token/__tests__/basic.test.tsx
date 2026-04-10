import React from 'react';
import {
  FundFlowDirection,
  SwapToken,
  type SwapInputProps,
  type SwapTokenConfig,
  type SwapTokenToken,
} from '@ant-design/web3';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

type DemoSymbol = 'USDC';

type TokenPair = SwapTokenConfig<DemoSymbol, SwapTokenToken<DemoSymbol>>;

const tokenPairs: TokenPair[] = [
  {
    symbol: 'USDC',
    decimals: 6,
    fromToken: {
      symbol: 'USDC',
      decimals: 6,
      name: 'USDC (Ethereum)',
      balance: '1,000',
      amount: 1000000000n,
    },
    toToken: {
      symbol: 'USDC',
      decimals: 6,
      name: 'USDC (Arbitrum)',
      balance: '800',
      amount: 800000000n,
    },
  },
];

const renderSwapToken = (props?: Partial<SwapInputProps<DemoSymbol>>) => {
  return render(
    <SwapToken<DemoSymbol>
      swapIcon={<span data-testid="swap-icon">⇅</span>}
      tokens={tokenPairs}
      token={tokenPairs[0]}
      switchToken={() => {}}
      fundFlowDirection={FundFlowDirection.IN}
      switchFundFlowDirection={() => {}}
      showConnectButton={false}
      {...props}
    />,
  );
};

describe('SwapToken', () => {
  it('submits swap when input value is valid', async () => {
    const onButtonClick = vi.fn().mockResolvedValue(undefined);
    renderSwapToken({ onButtonClick });

    const inputs = screen.getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: '10' } });

    const actionButton = screen.getByRole('button', { name: 'Exchange' });

    await vi.waitFor(() => {
      expect((actionButton as HTMLButtonElement).disabled).toBe(false);
    });

    fireEvent.click(actionButton);

    await vi.waitFor(() => {
      expect(onButtonClick).toHaveBeenCalledTimes(1);
    });
  });

  it('calls switchFundFlowDirection when clicking swap icon', () => {
    const switchFundFlowDirection = vi.fn();
    const { container } = renderSwapToken({ switchFundFlowDirection });

    const swapIcon = container.querySelector('.ant-web3-swap-token-swap-icon');
    expect(swapIcon).toBeTruthy();
    fireEvent.click(swapIcon as Element);

    expect(switchFundFlowDirection).toHaveBeenCalledWith(FundFlowDirection.OUT);
  });

  it('renders extra content when provided', async () => {
    renderSwapToken({
      extra: (_, valueIn) => <div data-testid="swap-extra">Input: {valueIn}</div>,
    });

    const inputs = screen.getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: '5' } });

    await vi.waitFor(() => {
      expect(screen.getByTestId('swap-extra').textContent).toContain('5');
    });
  });

  it('disables button when wallet is not connected', () => {
    renderSwapToken({ showConnectButton: true });

    const actionButton = screen.getByRole('button', { name: 'Exchange' });
    expect((actionButton as HTMLButtonElement).disabled).toBe(true);
  });
});
