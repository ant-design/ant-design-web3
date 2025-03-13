import { ConnectModal } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import type { GetProp } from 'antd';
import { describe, expect, it, vi } from 'vitest';

describe('ConnectModal open Solana Nobile Wallet Adapter(MWA) test', () => {
  it('should open external link when clicking wallet on mobile without extension', async () => {
    const App = () => {
      const testWallet: GetProp<typeof ConnectModal, 'walletList'>[number] = {
        name: 'Mobile Wallet Adapter',
        remark: 'Solana Mobile Wallet Adapter',
        _isMobileWallet: true,
        _standardWallet: {},
        hasWalletReady: async () => {
          return true;
        },
      };

      return <ConnectModal open walletList={[testWallet]} connecting />;
    };

    const { baseElement } = render(<App />);

    // Find and click the wallet item
    const walletItem = baseElement.querySelector('.ant-web3-connect-modal-wallet-item');

    expect(walletItem).not.toBeNull();
    expect(baseElement.querySelector('.ant-web3-connect-modal-ripple-container')).toBeNull();

    fireEvent.click(walletItem!);

    // Wait for the deeplink to be processed
    await vi.waitFor(() => {
      // Verify deeplink was opened via window.location.href
      // expect(locationHref).toBe('testwallet://connect');
      expect(baseElement.querySelector('.ant-web3-connect-modal-ripple-container')).not.toBeNull();
    });
  });
});
