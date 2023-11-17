import { Connector, type ConnectorTriggerProps } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';
import React from 'react';
import { Button } from 'antd';
import { render, fireEvent } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';
import type { ChainIds, Chain } from '@ant-design/web3-common';

describe('Connector with chains', () => {
  it('currentChain', () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { currentChain } = props;
      return <Button>{currentChain?.name}</Button>;
    };

    const App = () => (
      <Connector currentChain={Mainnet}>
        <CustomButton />
      </Connector>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Ethereum');
  });

  it('chains', () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { chains } = props;
      return <Button>{chains?.map((item) => item.name).join(',')}</Button>;
    };

    const App = () => (
      <Connector chains={[Mainnet, Polygon]}>
        <CustomButton />
      </Connector>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('Ethereum,Polygon');
  });

  it('onSwitchChain', async () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { currentChain, onSwitchChain, chains } = props;
      return (
        <Button
          onClick={() => {
            onSwitchChain?.(chains?.[1].id || Polygon.id);
          }}
        >
          {currentChain?.name}
        </Button>
      );
    };

    const onChainSwitched = vi.fn();

    const App = () => {
      const [currentChain, setCurrentChain] = React.useState<Chain>(Mainnet);
      const chains = [Mainnet, Polygon];
      return (
        <Connector
          chains={chains}
          currentChain={currentChain}
          onChainSwitched={onChainSwitched}
          switchChain={async (id: ChainIds) => {
            setCurrentChain(chains.find((item) => item.id === id) || Mainnet);
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
      expect(onChainSwitched).toBeCalled();
    });
  });
});
