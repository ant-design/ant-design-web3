import React from 'react';
import { useProvider } from '@ant-design/web3';
import { Mainnet, Optimism } from '@ant-design/web3-assets';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { createStorage } from 'wagmi';

import { MetaMask, TokenPocket } from '../wallets';
import { EthersWeb3ConfigProvider } from './ethers-provider';

describe('ethers-provider', async () => {
  test('basic usage', async () => {
    const CustomConnector: React.FC = () => {
      const { availableChains } = useProvider();
      return (
        <div className="chains-name">{availableChains?.map((item) => item.name).join(',')}</div>
      );
    };

    const App = () => (
      <EthersWeb3ConfigProvider>
        <CustomConnector />
      </EthersWeb3ConfigProvider>
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
      <EthersWeb3ConfigProvider chains={[Mainnet, Optimism]}>
        <CustomConnector />
      </EthersWeb3ConfigProvider>
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
      <EthersWeb3ConfigProvider chains={[Mainnet, UnknownChain]}>
        <CustomConnector />
      </EthersWeb3ConfigProvider>
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
      <EthersWeb3ConfigProvider wallets={[MetaMask(), TokenPocket()]}>
        <CustomConnector />
      </EthersWeb3ConfigProvider>
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
      <EthersWeb3ConfigProvider
        wallets={[MetaMask()]}
        walletConnect={{ projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID' }}
      >
        <CustomConnector />
      </EthersWeb3ConfigProvider>
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
      <EthersWeb3ConfigProvider storage={storage}>
        <CustomConnector />
      </EthersWeb3ConfigProvider>
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
