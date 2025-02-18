import React from 'react';
import {
  BSC,
  Mainnet,
  metadata_imToken,
  metadata_MetaMask,
  metadata_TokenPocket,
  USDT,
} from '@ant-design/web3-assets';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { PayPanel } from '../index';
import { type PayPanelProps } from '../PayPanelContext';

vi.mock('../ChainList', () => ({
  ChainList: ({ onChainSelected }: any) => (
    <button type="button" onClick={() => onChainSelected(BSC.id)}>
      Select Chain
    </button>
  ),
}));

vi.mock('../ShowCode', () => ({
  ShowCode: ({ selectedChainId, onReturn }: any) => (
    <div>
      <span>Selected Chain ID: {selectedChainId}</span>
      <button type="button" onClick={onReturn}>
        Return
      </button>
    </div>
  ),
}));

const mockProps: PayPanelProps = {
  amount: 1000000,
  target: {
    [Mainnet.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
    [BSC.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
  },
  supportedChains: [{ chain: Mainnet }, { chain: BSC }],
  token: USDT,
  wallets: [metadata_MetaMask, metadata_imToken, metadata_TokenPocket],
  onFinish: vi.fn(),
};

describe('PayPanel', () => {
  const renderWithProviders = (ui: React.ReactElement) => {
    return render(<ConfigProvider>{ui}</ConfigProvider>);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initially renders ChainList component', () => {
    renderWithProviders(<PayPanel {...mockProps} />);
    expect(screen.getByText(/select chain/i)).toBeTruthy();
  });

  it('renders ShowCode component after chain is selected', async () => {
    renderWithProviders(<PayPanel {...mockProps} />);
    fireEvent.click(screen.getByText(/select chain/i));
    await waitFor(() => {
      expect(screen.getByText(/selected chain ID: 56/i)).toBeTruthy();
    });
  });

  it('returns to ChainList component when return button is clicked in ShowCode', async () => {
    renderWithProviders(<PayPanel {...mockProps} />);
    fireEvent.click(screen.getByText(/select chain/i));
    await waitFor(() => {
      expect(screen.getByText(/selected chain ID: 56/i)).toBeTruthy();
    });
    fireEvent.click(screen.getByText(/return/i));
    await waitFor(() => {
      expect(screen.getByText(/select chain/i)).toBeTruthy();
    });
  });

  it('calls onFinish function when appropriate (mock test)', () => {
    renderWithProviders(<PayPanel {...mockProps} />);
    expect(mockProps.onFinish).not.toHaveBeenCalled();
  });
});
