import {
  BSC,
  Mainnet,
  metadata_imToken,
  metadata_MetaMask,
  metadata_TokenPocket,
  USDT,
} from '@ant-design/web3-assets';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { PayPanel } from '../index';
import { type PayPanelProps } from '../PayPanelContext';

const mockProps: PayPanelProps = {
  amount: 1000000, // 示例数值
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
  wallets: [metadata_MetaMask, metadata_imToken, metadata_TokenPocket],
  onFinish: vi.fn(),
};

describe('PayPanel', () => {
  it('initially renders', () => {
    expect(() => render(<PayPanel {...mockProps} />)).toBeTruthy();
  });
});
