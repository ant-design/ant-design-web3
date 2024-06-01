import React from 'react';
import { BSC, Mainnet, metadata_MetaMask, USDT } from '@ant-design/web3-assets';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { PayPanelContext, type PayPanelProps } from '../PayPanelContext';
import { ShowCode } from '../ShowCode';

const mockProps: PayPanelProps = {
  amount: 1000000,
  target: {
    [Mainnet.id]: {
      address: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
      chain: Mainnet,
    },
    [BSC.id]: {
      address: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
      chain: BSC,
    },
  },
  token: USDT,
  wallets: [metadata_MetaMask],
  onFinish: vi.fn(),
};

describe('ShowCode', () => {
  const renderWithProviders = (ui: React.ReactElement) => {
    return render(
      <ConfigProvider>
        <PayPanelContext.Provider value={mockProps}>{ui}</PayPanelContext.Provider>
      </ConfigProvider>,
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initially renders correct content', () => {
    renderWithProviders(<ShowCode selectedChainId={BSC.id} onReturn={vi.fn()} />);

    expect(screen.getByText(`Send ${USDT.symbol} on ${BSC.name} network`)).toBeTruthy();
    expect(screen.getByText('请扫描二维码付款,或复制地址付款')).toBeTruthy();
    expect(screen.getByText(mockProps.target[BSC.id].address)).toBeTruthy();
  });

  it('calls onReturn when Return button is clicked', () => {
    const handleReturn = vi.fn();
    renderWithProviders(<ShowCode selectedChainId={BSC.id} onReturn={handleReturn} />);

    fireEvent.click(screen.getByText('Return'));
    expect(handleReturn).toHaveBeenCalled();
  });

  it('calls onFinish when Already paid button is clicked', () => {
    renderWithProviders(<ShowCode selectedChainId={BSC.id} onReturn={vi.fn()} />);

    fireEvent.click(screen.getByText('Already paid'));
    expect(mockProps.onFinish).toHaveBeenCalled();
  });

  it('sets payment link correctly when tab is changed', async () => {
    renderWithProviders(<ShowCode selectedChainId={BSC.id} onReturn={vi.fn()} />);

    const metaMaskTab = screen.getByText(metadata_MetaMask.name);
    fireEvent.click(metaMaskTab);
    await waitFor(() => {
      expect(screen.getByText('USDT Address')).toBeTruthy();
    });
  });

  it('renders QRCode with correct payment link', async () => {
    renderWithProviders(<ShowCode selectedChainId={BSC.id} onReturn={vi.fn()} />);

    await waitFor(() => {
      const qrCodeCanvas = document.querySelector('canvas');
      expect(qrCodeCanvas).toBeTruthy();
    });
  });
});
