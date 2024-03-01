import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask } from '@ant-design/web3-assets';
import { Wallet } from '@ant-design/web3-common';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('ConnectModal with qcCode & plugin tag', () => {
  it('show qcCode', async () => {
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
    expect(baseElement.querySelector('.ant-web3-connect-modal-qc-icon')).toBeTruthy();
  });

  it('don not show qcCode', async () => {
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
    expect(baseElement.querySelector('.ant-web3-connect-modal-qc-icon')).not.toBeTruthy();
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
    const icon = baseElement.querySelector('.ant-web3-connect-modal-qc-icon');
    fireEvent.click(icon!);
    await waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code')).toBeTruthy();
    });
  });
});
