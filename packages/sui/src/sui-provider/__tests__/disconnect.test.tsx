import React, { useState } from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { SuiWeb3ConfigProvider } from '../../';
import { wait, xrender } from './utils';

describe('SuiWeb3ConfigProvider disconnect tests', () => {
  const mockedDatas = vi.hoisted(() => {
    return {
      // fake address
      shortAddress: '0xa123...y123',
      address: '0xa123a123b123b123____a00aaf10c9c283aae9498684218____x123x123y123y123',
      WALLETS: [
        {
          name: 'Test Wallet',
          icon: 'data:image/svg+xml;base64,test_test_test_test_test_test_test_test_',
        },
        {
          name: 'Test2 Wallet',
          icon: 'data:image/svg+xml;base64,test2_test2_test2_test2_test2_test2_test2_',
        },
      ],
    };
  });

  vi.mock('@mysten/dapp-kit', async () => {
    const originModules = await vi.importActual('@mysten/dapp-kit');
    const { remember } = await import('./utils');

    const accountRef = remember<string | undefined>(mockedDatas.address);

    return {
      ...originModules,
      useDisconnectWallet: () => {
        const [, forceUpdate] = useState('init');

        const mutateAsync = async () => {
          await wait(30);
          accountRef.value = undefined;

          forceUpdate('updated');
        };

        return {
          mutateAsync: mutateAsync,
        };
      },
      useWallets: () => {
        return [...mockedDatas.WALLETS];
      },
      useCurrentAccount: () => {
        return accountRef.value
          ? {
              address: accountRef.value,
            }
          : undefined;
      },
    };
  });

  it('available disconnect', async () => {
    const App = () => {
      return (
        <SuiWeb3ConfigProvider>
          <Connector>
            <ConnectButton />
          </Connector>
        </SuiWeb3ConfigProvider>
      );
    };

    const { selector, selectors } = xrender(App);

    const connectBtn = selector('.ant-web3-connect-button');

    // connected
    expect(connectBtn?.textContent).toBe(mockedDatas.shortAddress);
    fireEvent.click(connectBtn!);

    // try to click disconnect button
    await vi.waitFor(() => {
      const profileBtns = selectors('.ant-web3-connect-button-profile-modal-footer .ant-btn');
      expect(profileBtns.length).toBe(2);
      expect(profileBtns.item(1).textContent).toBe('Disconnect');
      fireEvent.click(profileBtns.item(1));
    });

    // test connect-button has changed to short address
    await vi.waitFor(() => {
      expect(selector('.ant-web3-connect-button')?.textContent).toBe('Connect Wallet');
    });
  });
});
