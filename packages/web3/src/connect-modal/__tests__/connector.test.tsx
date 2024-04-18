import React from 'react';
import { Connector, ConnectorTriggerProps } from '@ant-design/web3';
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

    const App = () => {
      const [account, setAccount] = React.useState<Account>();
      return (
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
          connect={async () =>
            new Promise((resolve) => {
              setTimeout(() => {
                const newAccount = {
                  address: '0x1234567890123456789012345678901234567890',
                };
                setAccount(newAccount);
                resolve();
              }, 2000);
            })
          }
          account={account}
          modalProps={{
            open: true,
          }}
        >
          <CustomTrigger />
        </Connector>
      );
    };

    const { baseElement } = render(<App />);
    const spin = baseElement.querySelector('.ant-spin-container');
    expect(spin?.classList.length).toBe(1);
    expect(baseElement.querySelector('.ant-web3-connect-modal-plugin-tag')).toBeTruthy();
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-wallet-item') as Element);
    await vi.waitFor(() => {
      expect(spin?.className).contain('ant-spin-blur');
    });
    vi.advanceTimersByTime(2000);
    expect(baseElement.querySelector('ant-spin-blur')).toBeFalsy();
  });
});
