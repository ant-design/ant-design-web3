import React from 'react';
import { BSC, Mainnet, USDT } from '@ant-design/web3-assets';
import { render, screen } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { describe, expect, it, vi } from 'vitest';

import { ChainInfo } from '../ChainInfo';
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

describe('ChainInfo', () => {
  const renderWithProviders = (ui: React.ReactElement) => {
    return render(
      <ConfigProvider>
        <PayPanelContext.Provider value={mockContextValue}>{ui}</PayPanelContext.Provider>
      </ConfigProvider>,
    );
  };

  it('renders correct chain name and component icon', () => {
    renderWithProviders(<ChainInfo chainId={BSC.id} />);
    expect(screen.getByText(BSC.name)).toBeTruthy();
  });
});
