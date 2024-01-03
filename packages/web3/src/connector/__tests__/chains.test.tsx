import React from 'react';
import { Connector, type ConnectorTriggerProps } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';
import type { Chain } from '@ant-design/web3-common';
import { fireEvent, render } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it, vi } from 'vitest';

describe('Connector with chains', () => {
  it('currentChain', () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { chain } = props;
      return <Button>{chain?.name}</Button>;
    };

    const App = () => (
      <Connector chain={Mainnet}>
        <CustomButton />
      </Connector>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Ethereum');
  });

  it('chains', () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { availableChains } = props;
      return <Button>{availableChains?.map((item) => item.name).join(',')}</Button>;
    };

    const App = () => (
      <Connector availableChains={[Mainnet, Polygon]}>
        <CustomButton />
      </Connector>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Ethereum,Polygon');
  });

  it('onSwitchChain', async () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { chain, onSwitchChain } = props;
      return (
        <Button
          onClick={() => {
            onSwitchChain?.(Polygon);
          }}
        >
          {chain?.name}
        </Button>
      );
    };

    const onChainSwitched = vi.fn();

    const App = () => {
      const [currentChain, setCurrentChain] = React.useState<Chain>(Mainnet);
      const chains = [Mainnet, Polygon];
      return (
        <Connector
          chain={currentChain}
          availableChains={chains}
          onChainSwitched={onChainSwitched}
          switchChain={async (chain: Chain) => {
            setCurrentChain(chain);
          }}
        >
          <CustomButton />
        </Connector>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Ethereum');
    fireEvent.click(baseElement.querySelector('.ant-btn') as HTMLElement);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Polygon');
      expect(onChainSwitched).toBeCalledWith(Polygon);
    });
  });
});
