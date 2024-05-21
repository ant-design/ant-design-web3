import React from 'react';
import { useProvider } from '@ant-design/web3';
import { Mainnet, Optimism } from '@ant-design/web3-assets';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { createStorage } from 'wagmi';

import { MetaMask, TokenPocket } from '../wallets';
import { EthWeb3jsConfigProvider } from './web3js-provider';

describe('web3js-provider', async () => {
  test('basic usage', async () => {
    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <EthWeb3jsConfigProvider>
        <CustomConnector />
      </EthWeb3jsConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.chains-name')?.textContent).toBe('Ethereum');
  });

  test('chains', async () => {
    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <EthWeb3jsConfigProvider chains={[Mainnet, Optimism]}>
        <CustomConnector />
      </EthWeb3jsConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.chains-name')?.textContent).toBe('Ethereum,OP Mainnet');
  });

  test('chains but not found', async () => {
    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const UnknownChain = { ...Mainnet, name: 'Unknown', id: -9999 };

    const App = () => (
      <EthWeb3jsConfigProvider chains={[Mainnet, UnknownChain]}>
        <CustomConnector />
      </EthWeb3jsConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.chains-name')?.textContent).toBe('Ethereum');
  });

  test('wallets', async () => {
    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <EthWeb3jsConfigProvider wallets={[MetaMask(), TokenPocket()]}>
        <CustomConnector />
      </EthWeb3jsConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('MetaMask,TokenPocket');
  });

  test('wallet-connect', async () => {
    const CustomConnector: React.FC = () => {
      const { availableWallets } = useProvider();
      return (
        <div className="wallets-name">{availableWallets?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <EthWeb3jsConfigProvider
        wallets={[MetaMask()]}
        walletConnect={{ projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID' }}
      >
        <CustomConnector />
      </EthWeb3jsConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.wallets-name')?.textContent).toBe('MetaMask,WalletConnect');
  });

  test('storage', async () => {
    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = ({ storage }: any) => (
      <EthWeb3jsConfigProvider storage={storage}>
        <CustomConnector />
      </EthWeb3jsConfigProvider>
    );
    expect(
      render(<App storage={false} />).baseElement.querySelector('.chains-name')?.textContent,
    ).toBe('Ethereum');
    expect(
      render(<App storage={createStorage({ storage: localStorage })} />).baseElement.querySelector(
        '.chains-name',
      )?.textContent,
    ).toBe('Ethereum');
  });
});
