import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { SuiWeb3ConfigProvider } from '../../';
import { xrender } from './utils';

describe('SuiWeb3ConfigProvider basic tests', () => {
  const mockedDatas = vi.hoisted(() => {
    return {
      // fake address
      shortAddress: '0xa123...y123',
      address: '0xa123a123b123b123____a00aaf10c9c283aae9498684218____x123x123y123y123',
      sns: 'fakesns.sui',
    };
  });

  vi.mock('@mysten/dapp-kit', async () => {
    const originModules = await vi.importActual('@mysten/dapp-kit');

    return {
      ...originModules,
      useCurrentAccount: () => {
        return {
          address: mockedDatas.address,
        };
      },
      useResolveSuiNSName: (address?: string) => {
        const sns = address ? mockedDatas.sns : undefined;

        return { data: sns };
      },
    };
  });

  it('available get account info', async () => {
    const App = () => {
      return (
        <SuiWeb3ConfigProvider>
          <Connector>
            <ConnectButton />
          </Connector>
        </SuiWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const connectBtn = selector('.ant-web3-connect-button');

    expect(connectBtn?.textContent).toBe(mockedDatas.shortAddress);
    fireEvent.click(connectBtn!);

    await vi.waitFor(() => {
      const addressInfo = selector('.ant-web3-connect-button-profile-modal .ant-web3-address');
      expect(addressInfo?.textContent).toBe(mockedDatas.address);
    });
  });

  it('available get sns info', async () => {
    const App = () => {
      return (
        <SuiWeb3ConfigProvider sns>
          <Connector>
            <ConnectButton />
          </Connector>
        </SuiWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const connectBtn = selector('.ant-web3-connect-button');

    expect(connectBtn?.textContent).toBe(mockedDatas.sns);
    fireEvent.click(connectBtn!);

    await vi.waitFor(() => {
      const addressInfo = selector('.ant-web3-connect-button-profile-modal .ant-web3-address');
      expect(addressInfo?.textContent).toBe(mockedDatas.address);
    });
  });
});
