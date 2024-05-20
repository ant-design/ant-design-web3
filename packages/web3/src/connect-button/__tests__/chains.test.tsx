import React from 'react';
import { ConnectButton, type Chain } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('ConnectButton chains', () => {
  it('no chains', async () => {
    const App: React.FC = () => {
      const [chain, setChain] = React.useState<Chain>(Polygon);
      return (
        <ConnectButton
          chain={chain}
          account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
          onSwitchChain={async (c) => {
            setChain(c);
          }}
        />
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-dropdown-trigger')).toBeNull();
  });

  it('show chains', async () => {
    const App: React.FC = () => {
      const [chain, setChain] = React.useState<Chain>(Polygon);
      return (
        <ConnectButton
          chain={chain}
          availableChains={[Mainnet, Polygon]}
          account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
          onSwitchChain={async (c) => {
            setChain(c);
          }}
        />
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-dropdown-trigger')?.textContent).toBe('Polygon');
    fireEvent.click(baseElement.querySelector('.ant-dropdown-trigger')!);
    expect(baseElement.querySelector('.ant-dropdown-menu-title-content')?.textContent).toBe(
      'Ethereum',
    );
    fireEvent.click(baseElement.querySelector('.ant-dropdown-menu-title-content')!);
    expect(baseElement.querySelector('.ant-dropdown-trigger')?.textContent).toBe('Ethereum');
  });

  it('set button type and size', async () => {
    const App: React.FC = () => {
      const [chain, setChain] = React.useState<Chain>(Polygon);
      return (
        <ConnectButton
          chain={chain}
          availableChains={[Mainnet, Polygon]}
          type="primary"
          size="large"
          account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
          onSwitchChain={async (c) => {
            setChain(c);
          }}
        />
      );
    };
    const { baseElement } = render(<App />);
    expect(
      baseElement.querySelector(
        '.ant-web3-connect-button-chain-select-button.ant-btn-primary.ant-btn-lg',
      ),
    ).toBeTruthy();
  });
});
