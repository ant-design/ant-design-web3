import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { TronWeb3ConfigProvider } from '../';
import { OkxTronWallet, TronlinkWallet } from '../../wallets';

describe('TronWeb3ConfigProvider', () => {
  afterAll(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  it('mount correctly', () => {
    const App = () => (
      <TronWeb3ConfigProvider wallets={[TronlinkWallet]}>
        <div className="content">test</div>
      </TronWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });

  it('show address', async () => {
    const Address = () => {
      return <div className="address">TUguNkmfvjeHanGyQZLGJfj28w1tMtvNDT</div>;
    };

    const App = () => {
      return (
        <TronWeb3ConfigProvider wallets={[TronlinkWallet]}>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
          <Address />
        </TronWeb3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    const modalBtn = baseElement.querySelector('.connect') as HTMLButtonElement;
    fireEvent.click(modalBtn);
    await vi.waitFor(() => {
      const connectBtn = baseElement.querySelector('.ant-list-item')!;
      fireEvent.click(connectBtn);
      expect(connectBtn).toBeTruthy();
    });

    await vi.waitFor(() => {
      expect(baseElement.querySelector('.address')?.textContent).toBe(
        'TUguNkmfvjeHanGyQZLGJfj28w1tMtvNDT',
      );
    });
  });

  it('disconnect', async () => {
    const App = () => {
      return (
        <TronWeb3ConfigProvider wallets={[TronlinkWallet]}>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
        </TronWeb3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    const modalBtn = baseElement.querySelector('.connect') as HTMLButtonElement;
    fireEvent.click(modalBtn);
    await waitFor(() => {
      const connectBtn = baseElement.querySelector('.ant-list-item')!;
      expect(connectBtn).toBeTruthy();
      fireEvent.click(connectBtn);
    });

    await waitFor(() => {
      expect(baseElement.querySelector('.connect')?.textContent);
    });

    fireEvent.click(modalBtn);

    await waitFor(() => {
      const disconnect = screen.getByText('Disconnect');
      expect(disconnect).toBeTruthy();
      fireEvent.click(screen.getByText('Disconnect'));
    });
    expect(baseElement.querySelector('.connect')?.textContent).toBe('Connect Wallet');
  });

  it('show icon', async () => {
    const App = () => {
      return (
        <TronWeb3ConfigProvider wallets={[TronlinkWallet, OkxTronWallet]}>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
        </TronWeb3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    const modalBtn = baseElement.querySelector('.connect') as HTMLButtonElement;
    fireEvent.click(modalBtn);
    await waitFor(() => {
      const icons = baseElement.querySelector('.ant-web3-icon-okx-wallet-colorful')!;
      expect(icons).toBeTruthy();
    });
    await waitFor(() => {
      const items = baseElement.querySelectorAll('.ant-list-item')!;
      expect(items.length).toBe(2);
      const item = baseElement.querySelector('.ant-web3-connect-modal-img')!;
      expect(item.getAttribute('src')).toBeTruthy();
    });
  });
});
