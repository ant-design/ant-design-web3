import React from 'react';
import { Connector, useProvider } from '@ant-design/web3';
import { type ConnectorTriggerProps } from '@ant-design/web3-common';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
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
        <button
          type="button"
          className="content"
          onClick={() => {
            onSwitchChain?.(suiMainnet);
          }}
        >
          {chain?.name}
        </button>
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

  it('available custom `QueryClientProvider`', () => {
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

  it('available both provide `queryClient` and `QueryClientProvider`', async () => {
    const testFakeKey = 'fake____key';
    const myQueryClient = new QueryClient();
    (myQueryClient as any).__fake__key = testFakeKey;

    const testFakeKey2 = 'fake____key2';
    const myQueryClient2 = new QueryClient();
    (myQueryClient2 as any).__fake__key = testFakeKey2;

    const TestQueryClientInstance = () => {
      const client = useQueryClient();

      return <div className="fake-key">{(client as any).__fake__key}</div>;
    };

    const App = () => {
      return (
        <QueryClientProvider client={myQueryClient}>
          <SuiWeb3ConfigProvider queryClient={myQueryClient2}>
            <TestQueryClientInstance />
          </SuiWeb3ConfigProvider>
        </QueryClientProvider>
      );
    };

    const { selector } = xrender(App);

    expect(selector('.fake-key')?.textContent).toBe(testFakeKey2);
  });

  it('should ignore config when ignoreConfig is true', () => {
    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <SuiWeb3ConfigProvider>
        <SuiWeb3ConfigProvider ignoreConfig={true}>
          <CustomConnector />
        </SuiWeb3ConfigProvider>
      </SuiWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    // Should use parent config, not the ignored one
    expect(selector('.chains-name')?.textContent).toBe('Sui');
  });

  it('should use active provider config when one is ignored', () => {
    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <SuiWeb3ConfigProvider ignoreConfig={true}>
        <SuiWeb3ConfigProvider>
          <CustomConnector />
        </SuiWeb3ConfigProvider>
      </SuiWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    // Should use active provider config, not the ignored one
    expect(selector('.chains-name')?.textContent).toBe('Sui');
  });
});
