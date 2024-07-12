import React, { useState, type FC, type PropsWithChildren } from 'react';
import {
  ConnectButton,
  Connector,
  useProvider,
  type ConnectorTriggerProps,
} from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { tonkeeper } from '../../wallets';
import { TonWeb3ConfigProvider } from '../TonWeb3ConfigProvider';

describe('TonWeb3ConfigProvider', () => {
  vi.mock('@tonconnect/sdk', async () => {
    const originModules = await vi.importActual('@tonconnect/sdk');
    const TonConnectProvider: React.FC<React.PropsWithChildren> = ({ children }) => <>{children}</>;
    return {
      ...originModules,
      TonConnectProvider,
    };
  });

  it('mount correctly', () => {
    const App = () => (
      <TonWeb3ConfigProvider wallets={[tonkeeper]}>
        <div className="content">test</div>
      </TonWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });
});
