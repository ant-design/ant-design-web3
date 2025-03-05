import React from 'react';
import { ConnectButton, Connector, useProvider } from '@ant-design/web3';
import { createNetworkConfig } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { suiMainnet, suiTestnet, SuiWeb3ConfigProvider } from '../..';
import { xrender } from './utils';

describe('SuiWeb3ConfigProvider switch-chain tests', () => {
  const mockedDatas = vi.hoisted(() => {
    return {
      // fake address
      shortAddress: '0xa123...y123',
      address: '0xa123a123b123b123____a00aaf10c9c283aae9498684218____x123x123y123y123',
    };
  });

  vi.mock('@mysten/dapp-kit', async () => {
    const originModules = await vi.importActual('@mysten/dapp-kit');
    const { remember } = await import('./utils');

    const accountRef = remember<string | undefined>(mockedDatas.address);

    return {
      ...originModules,
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
    const { networkConfig } = createNetworkConfig({
      localnet: { url: getFullnodeUrl('localnet') },
      devnet: { url: getFullnodeUrl('devnet') },
      testnet: { url: getFullnodeUrl('testnet') },
      mainnet: { url: getFullnodeUrl('mainnet') },
    });

    const CustomContent = () => {
      const { switchChain, chain, availableChains } = useProvider();

      return (
        <div>
          <div className="current-chain">{chain?.name}</div>
          <button
            type="button"
            className="switch-chain-btn"
            onClick={() => {
              if (availableChains) {
                // switch to testnet
                const nextNet = availableChains.find((v) => v.name === suiTestnet.name)!;
                switchChain?.(nextNet);
              }
            }}
          >
            switch chain
          </button>
        </div>
      );
    };

    const App = () => {
      return (
        <SuiWeb3ConfigProvider networkConfig={networkConfig} defaultNetwork="mainnet">
          <>
            <Connector>
              <ConnectButton />
            </Connector>
            <CustomContent />
          </>
        </SuiWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const connectBtn = selector('.ant-web3-connect-button');
    const chainSwitcher = selector('.ant-dropdown-trigger');

    // connected and current chain is mainnet
    expect(chainSwitcher?.textContent).toBe(suiMainnet.name);
    expect(connectBtn?.textContent).toBe(mockedDatas.shortAddress);
    fireEvent.click(connectBtn!);

    // switch chain net
    const switchChainBtn = selector('.switch-chain-btn');
    expect(switchChainBtn?.textContent).toBe('switch chain');
    fireEvent.click(switchChainBtn!);

    // test if chain has switched to testnet
    expect(chainSwitcher).toBeTruthy();
    await vi.waitFor(() => {
      expect(chainSwitcher?.textContent).toBe(suiTestnet.name);
    });
  });
});
