import React from 'react';
import { BSC, Mainnet, USDT } from '@ant-design/web3-assets';
import { fireEvent, render, screen } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ChainList } from '../ChainList';
import { PayPanelContext, type PayPanelProps } from '../PayPanelContext';

const mockContextValue: PayPanelProps = {
  amount: 1000000,
  target: {
    [Mainnet.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
    [BSC.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
  },
  supportedChains: [{ chain: Mainnet }, { chain: BSC }],
  token: USDT,
  wallets: [],
  onFinish: vi.fn(),
};

describe('ChainList', () => {
  const renderWithProviders = (ui: React.ReactElement) => {
    return render(
      <ConfigProvider>
        <PayPanelContext.Provider value={mockContextValue}>{ui}</PayPanelContext.Provider>
      </ConfigProvider>,
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initially renders', () => {
    renderWithProviders(<ChainList onChainSelected={vi.fn()} />);
    expect(screen.getByText(/select network/i)).toBeTruthy();
  });

  it('renders all chain options', () => {
    renderWithProviders(<ChainList onChainSelected={vi.fn()} />);
    expect(screen.getByText(Mainnet.name)).toBeTruthy();
    expect(screen.getByText(BSC.name)).toBeTruthy();
  });

  it('calls onChainSelected with correct chain ID when chain is clicked', () => {
    const handleChainSelected = vi.fn();
    renderWithProviders(<ChainList onChainSelected={handleChainSelected} />);

    const mainnetOption = screen.getByText(Mainnet.name);
    fireEvent.click(mainnetOption);

    expect(handleChainSelected).toHaveBeenCalledWith(Mainnet.id.toString());

    const bscOption = screen.getByText(BSC.name);
    fireEvent.click(bscOption);

    expect(handleChainSelected).toHaveBeenCalledWith(BSC.id.toString());
  });
});
