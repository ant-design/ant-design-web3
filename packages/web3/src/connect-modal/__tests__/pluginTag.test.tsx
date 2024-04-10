import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask } from '@ant-design/web3-assets';
import type { Wallet } from '@ant-design/web3-common';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('ConnectModal with qrCode & plugin tag', () => {
  it('show qrCode', async () => {
    const wallet: Wallet = {
      ...metadata_MetaMask,
      getQrCode: async () => {
        return {
          uri: '',
        };
      },
    };

    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        mode="normal"
        walletList={[wallet]}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.anticon-qrcode')).toBeTruthy();
  });

  it('do not show qrCode', async () => {
    const wallet: Wallet = {
      ...metadata_MetaMask,
    };

    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        mode="normal"
        walletList={[wallet]}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.anticon-qrcode')).not.toBeTruthy();
  });

  it('not show plugin tag', async () => {
    const wallet: Wallet = {
      ...metadata_MetaMask,
    };

    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        mode="normal"
        walletList={[wallet]}
      />
    );
    render(<App />);
    const span = screen.queryByText('PLUGIN');
    expect(!!span?.parentElement === false).toBeTruthy();
  });

  it('show plugin tag when installed', async () => {
    const wallet: Wallet = {
      ...metadata_MetaMask,
      hasExtensionInstalled: async () => {
        return true;
      },
    };

    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        mode="normal"
        walletList={[wallet]}
      />
    );
    render(<App />);
    const span = screen.queryByText('PLUGIN');
    expect(!!span?.parentElement?.getAttribute('disabled') === false).toBeTruthy();
  });

  it('show plugin tag when not installed', async () => {
    const wallet: Wallet = {
      ...metadata_MetaMask,
      hasExtensionInstalled: async () => {
        return false;
      },
    };

    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        mode="normal"
        walletList={[wallet]}
      />
    );
    render(<App />);
    const span = screen.queryByText('PLUGIN');
    expect(span?.parentElement?.getAttribute('disabled') === '').toBeTruthy();
  });

  it('click event trigger', async () => {
    const wallet: Wallet = {
      ...metadata_MetaMask,
      getQrCode: async () => {
        return {
          uri: '',
        };
      },
    };

    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="Powered by AntChain"
        mode="normal"
        walletList={[wallet]}
      />
    );
    const { baseElement } = render(<App />);
    const icon = baseElement.querySelector('.ant-web3-connect-modal-qr-btn');
    fireEvent.click(icon!);
    await waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-box')).toBeTruthy();
    });
  });
});
