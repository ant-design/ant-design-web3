import React from 'react';
import type { ConnectorTriggerProps } from '@ant-design/web3';
import { Connector, ConnectStatus, Web3ConfigProvider } from '@ant-design/web3';
import { metadata_MetaMask } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it, vi } from 'vitest';

import { type Account } from '../../../../web3/src';

describe('Connect spin', async () => {
  it('connect', async () => {
    vi.useFakeTimers();

    const CustomTrigger: React.FC<ConnectorTriggerProps> = (props) => {
      const { loading, onConnectClick, account } = props;
      return (
        <Button onClick={() => onConnectClick?.()}>
          {loading ? 'Connecting...' : account?.address || 'Connect Your Wallet'}
        </Button>
      );
    };

    let connectPromiveResolve: (account: Account) => void = () => {};

    const connectPromise = new Promise<Account>((resolve) => {
      connectPromiveResolve = resolve;
    });

    const App = () => {
      const [account, setAccount] = React.useState<Account>();
      return (
        <Web3ConfigProvider
          sign={{
            signIn: () => {
              return new Promise<void>(() => {});
            },
          }}
        >
          <Connector
            availableWallets={[
              {
                ...metadata_MetaMask,
                hasWalletReady: async () => {
                  return true;
                },
                hasExtensionInstalled: async () => {
                  return true;
                },
              },
            ]}
            connect={async () => {
              const a = await connectPromise;
              setAccount(a);
              return a;
            }}
            account={account}
            modalProps={{
              open: true,
            }}
          >
            <CustomTrigger />
          </Connector>
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-modal-plugin-tag')).toBeTruthy();
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item') as Element);
    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-connect-modal-wallet-connecting')?.textContent,
      ).toBe('Connecting...');
    });

    connectPromiveResolve({
      address: '0x1234567890123456789012345678901234567890',
    });

    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-connect-modal-wallet-connecting')?.textContent,
      ).toBe('Signing...');
    });
  });
});
