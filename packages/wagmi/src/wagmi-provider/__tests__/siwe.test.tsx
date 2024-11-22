import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type * as Wagmi from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';
import SiweConfigProvider from '../siwe-provider';

vi.mock('wagmi', async (importOriginal) => {
  const actual = await importOriginal<typeof Wagmi>();
  return {
    ...actual,
    useConfig: () => {
      return {};
    },
    // https://wagmi.sh/react/hooks/useAccount
    useAccount: () => {
      return {
        chain: mainnet,
        isDisconnected: false,
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      };
    },
    useConnect: () => {
      return {
        connectors: [],
        connectAsync: async () => {
          return {};
        },
      };
    },
    useDisconnect: () => {
      return {
        disconnectAsync: () => {},
      };
    },
    useSwitchChain: () => {
      return {
        switchChain: () => {},
      };
    },
    useBalance: () => {
      return {};
    },
    useEnsName: () => ({}),
    useEnsAvatar: () => ({}),
    useSignMessage: () => ({ signMessageAsync: async () => 'signMessage' }),
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
      <SiweConfigProvider
        siwe={{
          getNonce,
          createMessage,
          verifyMessage,
        }}
      >
        <AntDesignWeb3ConfigProvider
          walletFactories={[MetaMask()]}
          chainAssets={[Mainnet]}
          wagimConfig={config}
        >
          <Connector>
            <ConnectButton />
          </Connector>
        </AntDesignWeb3ConfigProvider>
      </SiweConfigProvider>
    );
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
      'Sign: 0x21CD...Fd3B',
    );

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await waitFor(() => {
      expect(getNonce).toBeCalled();
      expect(createMessage).toBeCalled();
      expect(verifyMessage).toBeCalled();
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
          signMessage,
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
          signMessage,
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
