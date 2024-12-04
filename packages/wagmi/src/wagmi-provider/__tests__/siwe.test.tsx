import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type * as Wagmi from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { wagmiBaseMock } from '../__mocks__/wagmiBaseMock';
import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

vi.mock('wagmi', async (importOriginal) => {
  const actual = await importOriginal<typeof Wagmi>();
  return {
    ...actual,
    ...wagmiBaseMock,
    // https://wagmi.sh/react/hooks/useAccount
    useAccount: () => {
      return {
        chain: {
          name: 'Ethereum',
        },
        isDisconnected: false,
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      };
    },
  };
});

describe('Wagmi siwe sign', () => {
  it('has siwe', async () => {
    const { createConfig, http } = await import('wagmi');

    const getNonce = vi.fn(async () => '1');
    const createMessage = vi.fn(() => 'message');
    const verifyMessage = vi.fn(async () => true);

    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [],
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        walletFactories={[MetaMask()]}
        chainAssets={[Mainnet]}
        wagimConfig={config}
        siwe={{
          getNonce,
          createMessage,
          verifyMessage,
        }}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
      'Sign: 0x21CD...Fd3B',
    );

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await waitFor(() => {
      expect(getNonce).toBeCalled();
      expect(createMessage).toBeCalledWith({
        chainId: 1,
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        nonce: '1',
        uri: 'http://localhost:3000',
        domain: 'localhost',
        version: '1',
      });
      expect(verifyMessage).toBeCalled();
    });
  });

  it('call with diff chainId', async () => {
    const { createConfig, http } = await import('wagmi');

    const getNonce = vi.fn(async () => '1');
    const createMessage = vi.fn(() => 'message');
    const verifyMessage = vi.fn(async () => true);

    const config = createConfig({
      chains: [
        {
          ...mainnet,
          id: 2,
        },
      ],
      transports: {
        [2]: http(),
      },
      connectors: [],
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        siwe={{
          getNonce,
          createMessage,
          verifyMessage,
        }}
        walletFactories={[MetaMask()]}
        chainAssets={[
          {
            ...Mainnet,
            id: 2,
          },
        ]}
        wagimConfig={config}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await waitFor(() => {
      expect(createMessage).toBeCalledWith({
        chainId: 2,
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        nonce: '1',
        uri: 'http://localhost:3000',
        domain: 'localhost',
        version: '1',
      });
    });
  });

  it('call with no chainId', async () => {
    const { createConfig, http } = await import('wagmi');

    const getNonce = vi.fn(async () => '1');
    const createMessage = vi.fn(() => 'message');
    const verifyMessage = vi.fn(async () => true);

    const config = createConfig({
      chains: [
        {
          ...mainnet,
          id: undefined as any,
        },
      ],
      transports: {
        [2]: http(),
      },
      connectors: [],
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        walletFactories={[MetaMask()]}
        siwe={{
          getNonce,
          createMessage,
          verifyMessage,
        }}
        chainAssets={[
          {
            ...Mainnet,
            id: undefined as any,
          },
        ]}
        wagimConfig={config}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await waitFor(() => {
      expect(createMessage).toBeCalledWith({
        chainId: 1,
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        nonce: '1',
        uri: 'http://localhost:3000',
        domain: 'localhost',
        version: '1',
      });
    });
  });

  it('has no siwe', async () => {
    const { createConfig, http } = await import('wagmi');

    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [],
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        walletFactories={[MetaMask()]}
        chainAssets={[Mainnet]}
        wagimConfig={config}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
      '0x21CD...Fd3B',
    );
  });

  it('siwe', async () => {
    const { createConfig, http } = await import('wagmi');

    const getNonce = vi.fn(() => {
      throw new Error('signAddress is required');
    });
    const createMessage = vi.fn(() => 'message');
    const verifyMessage = vi.fn(async () => true);
    const signMessage = vi.fn(async () => 'signMessage' as any);

    const renderText = vi.fn((address: string) => `Custom Sign: ${address}`);

    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [],
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        walletFactories={[MetaMask()]}
        chainAssets={[Mainnet]}
        wagimConfig={config}
        siwe={{
          getNonce,
          createMessage,
          verifyMessage,
        }}
      >
        <Connector>
          <ConnectButton signBtnTextRender={renderText} />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);

    const btn = baseElement.querySelector('.ant-web3-connect-button-text');

    await waitFor(async () => {
      fireEvent.click(btn!);
      expect(baseElement.querySelector('.ant-message')).not.toBeNull();
    });
  });

  it('render text', async () => {
    const { createConfig, http } = await import('wagmi');

    const getNonce = vi.fn(async () => '1');
    const createMessage = vi.fn(() => 'message');
    const verifyMessage = vi.fn(async () => true);
    const signMessage = vi.fn(async () => 'signMessage' as any);

    const renderText = vi.fn((address: string) => `Custom Sign: ${address}`);

    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [],
    });

    const App = () => (
      <AntDesignWeb3ConfigProvider
        walletFactories={[MetaMask()]}
        chainAssets={[Mainnet]}
        wagimConfig={config}
        siwe={{
          getNonce,
          createMessage,
          verifyMessage,
        }}
      >
        <Connector>
          <ConnectButton signBtnTextRender={renderText} />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
      'Custom Sign: 0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });
});
