import React from 'react';
import { Connector } from '@ant-design/web3';
import { type ConnectorTriggerProps } from '@ant-design/web3-common';
import { useSuiClient, useSuiClientQuery } from '@mysten/dapp-kit';
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
import { describe, expect, it, vi } from 'vitest';

import { suiMainnet, SuiWeb3ConfigProvider } from '../../';
import { xrender } from './utils';

describe('SuiWeb3ConfigProvider basic tests', () => {
  it('mount correctly', () => {
    const App = () => (
      <SuiWeb3ConfigProvider>
        <div className="content">test</div>
      </SuiWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');
  });

  it('available custom trigger', () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = ({
      chain,
      onSwitchChain,
    }) => {
      return (
        <div
          onClick={() => {
            onSwitchChain?.(suiMainnet);
          }}
          className="content"
        >
          {chain?.name}
        </div>
      );
    };

    const switchChain = vi.fn();

    const App = () => (
      <SuiWeb3ConfigProvider>
        <Connector switchChain={switchChain}>
          <CustomButton chain={suiMainnet} onSwitchChain={switchChain} />
        </Connector>
      </SuiWeb3ConfigProvider>
    );

    const { selector } = xrender(App);

    expect(selector('.content')?.textContent).toBe('Sui');
  });

  it('available set `queryClient`', () => {
    const testFakeKey = 'fake____key';
    const myQueryClient = new QueryClient();
    (myQueryClient as any).__fake__key = testFakeKey;

    const TestQueryClientInstance = () => {
      const client = useQueryClient();

      return <div className="fake-key">{(client as any).__fake__key}</div>;
    };

    const App = () => {
      return (
        <SuiWeb3ConfigProvider queryClient={myQueryClient}>
          <TestQueryClientInstance />
        </SuiWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    expect(selector('.fake-key')?.textContent).toBe(testFakeKey);
  });

  it('available custom QueryClientProvider', () => {
    const testFakeKey = 'fake____key';
    const myQueryClient = new QueryClient();
    (myQueryClient as any).__fake__key = testFakeKey;

    const TestQueryClientInstance = () => {
      const client = useQueryClient();

      return <div className="fake-key">{(client as any).__fake__key}</div>;
    };

    const App = () => {
      return (
        <QueryClientProvider client={myQueryClient}>
          <SuiWeb3ConfigProvider>
            <TestQueryClientInstance />
          </SuiWeb3ConfigProvider>
        </QueryClientProvider>
      );
    };

    const { selector } = xrender(App);

    expect(selector('.fake-key')?.textContent).toBe(testFakeKey);
  });
});
