import React from 'react';
import { Connector } from '@ant-design/web3';
import { type ConnectorTriggerProps } from '@ant-design/web3-common';
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
});
