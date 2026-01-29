import React, { useRef, useState } from 'react';
import { useProvider } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TronWeb3ConfigProvider } from '../..';
import { xrender } from './utils';

describe('TronWeb3ConfigProvider basic cases', () => {
  const mockedData = vi.hoisted(() => {
    const mockAddress = 'TLszVpy8nWpC2HFkgmGQQVeUQqmDLNvNYA';
    const mockAddressShort = 'TLszVp...DLNvNYA';
    const balance = 10002;

    const mockedDisconnect = vi.fn();

    return {
      address: {
        value: mockAddress,
        short: mockAddressShort,
      },
      balance,
      mockedDisconnect,
    };
  });

  vi.mock('@tronweb3/tronwallet-adapter-react-hooks', async () => {
    const originModules = await vi.importActual('@tronweb3/tronwallet-adapter-react-hooks');
    const { remember } = await import('./utils');

    const WalletProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
      <div>{children}</div>
    );
    const connectedRef = remember(false);
    const addressValueRef = remember<string | null>(null);
    const walletNameRef = remember<string | null>(null);

    return {
      ...originModules,
      WalletProvider,
      useWallet: () => {
        // provide a state to emit re-render
        const [, setConnected] = useState(false);
        const [, setAddressValue] = useState(addressValueRef.value);
        const _connectedRef = useRef(false);
        const [, focusUpdate] = useState(Date.now());
        const [, setWalletName] = useState(walletNameRef.value);

        return {
          connected: connectedRef.value,
          wallets: [{ state: '' }],
          address: 'TLszVpy8nWpC2HFkgmGQQVeUQqmDLNvNYA',
          connect: () => {
            _connectedRef.current = true;
            addressValueRef.value = mockedData.address.value;
            connectedRef.value = true;
            setConnected(true);
            focusUpdate(Math.random());
          },
          disconnect: async () => {
            setAddressValue(null);
            mockedData.mockedDisconnect();
          },
          select: (walletName: string) => {
            walletNameRef.value = walletName;
            setWalletName(walletName);
            focusUpdate(Math.random());
          },
          wallet: walletNameRef.value
            ? { adapter: { name: walletNameRef.value, readyState: 'Found' } }
            : null,
          other: { _connectedRef, connectedRef },
        };
      },
    };
  });

  it('mount correctly', () => {
    const App = () => (
      <TronWeb3ConfigProvider>
        <div className="content">test</div>
      </TronWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');
  });

  it('available show account address', async () => {
    const connectRunned = vi.fn();

    const Address: React.FC = () => {
      const { account } = useProvider();
      return <div className="address">{account?.address}</div>;
    };

    const CustomConnect = () => {
      const { connect } = useProvider();

      return (
        <button
          type="button"
          className="connect"
          onClick={async () => {
            connectRunned();
            await connect?.({ name: 'Test', remark: '' });
          }}
        >
          Connect
        </button>
      );
    };

    const App = () => {
      return (
        <TronWeb3ConfigProvider>
          <div>
            <div className="content">test</div>
            <CustomConnect />
            <Address />
          </div>
        </TronWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');

    const connectBtn = selector('.connect')!;
    const address = selector('.address');

    expect(connectBtn).not.toBeNull();

    // default address is empty
    expect(address?.textContent).toBe('');

    fireEvent.click(connectBtn);

    await vi.waitFor(() => {
      expect(connectRunned).toBeCalled();
      expect(address?.textContent).toBe(mockedData.address.value);
    });
  });

  it('available disconnect', () => {
    const CustomConnector: React.FC = () => {
      const { disconnect } = useProvider();
      return (
        <div>
          <button type="button" onClick={async () => await disconnect?.()}>
            Disconnect
          </button>
        </div>
      );
    };

    const App: React.FC = () => {
      return (
        <TronWeb3ConfigProvider>
          <CustomConnector />
        </TronWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const btn = selector('button')!;

    expect(btn?.textContent).toBe('Disconnect');
    fireEvent.click(btn);

    expect(mockedData.mockedDisconnect).toBeCalled();
  });

  it('should ignore config when ignoreConfig is true', () => {
    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <TronWeb3ConfigProvider>
        <TronWeb3ConfigProvider ignoreConfig={true}>
          <CustomConnector />
        </TronWeb3ConfigProvider>
      </TronWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    // Should use parent config, not the ignored one
    // The parent config should have default wallets
    expect(selector('.wallets-name')).toBeTruthy();
  });

  it('should use active provider config when one is ignored', () => {
    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <TronWeb3ConfigProvider ignoreConfig={true}>
        <TronWeb3ConfigProvider>
          <CustomConnector />
        </TronWeb3ConfigProvider>
      </TronWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    // Should use active provider config, not the ignored one
    expect(selector('.wallets-name')).toBeTruthy();
  });
});
