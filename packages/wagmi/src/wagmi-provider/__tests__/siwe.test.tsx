import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type * as Wagmi from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { wagmiBaseMock } from '../__mocks__/wagmiBaseMock';
import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

let locationSpy: ReturnType<typeof vi.spyOn> = undefined as any;
const mockSignMessageAsync = vi.fn(async () => '0x123456789');

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
    useSignMessage: () => ({ signMessageAsync: mockSignMessageAsync }),
  };
});

describe('Wagmi siwe sign', () => {
  beforeEach(() => {
    locationSpy?.mockRestore();
  });

  it('has siwe', async () => {
    const { createConfig, http } = await import('wagmi');
    locationSpy = vi.spyOn(window, 'location', 'get').mockImplementation(() => {
      return undefined as any;
    });

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

    fireEvent.click(baseElement.querySelector('.ant-btn-compact-first-item')!);

    await waitFor(() => {
      expect(getNonce).toBeCalled();
      expect(createMessage).toBeCalled();
      expect(createMessage).toBeCalledWith({
        chainId: 1,
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        nonce: '1',
        uri: '',
        domain: '',
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

    fireEvent.click(baseElement.querySelector('.ant-btn-compact-first-item')!);

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

    fireEvent.click(baseElement.querySelector('.ant-btn-compact-first-item')!);

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

    const renderText = vi.fn((defaultDom, account) => `Custom Sign: ${account.address}`);

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
          <ConnectButton
            signBtnTextRender={(defaultDom, account) => {
              return (
                <div className="custom-text">
                  {defaultDom} & Custom Sign: {account?.address}
                </div>
              );
            }}
          />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);

    expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
      '0x21CD...Fd3B & Custom Sign: 0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
    );
  });

  it('test signOut function', async () => {
    const { createConfig, http } = await import('wagmi');
    const { useProvider } = await import('@ant-design/web3');

    const getNonce = vi.fn(async () => '1');
    const createMessage = vi.fn(() => 'message');
    const verifyMessage = vi.fn(async () => true);
    const fakeSignout = vi.fn();

    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [],
    });

    const TestComponent = () => {
      const { sign } = useProvider();

      React.useEffect(() => {
        if (sign?.signOut) {
          sign.signOut().then(() => {
            fakeSignout();
          });
        }
      }, [sign]);

      return <div data-testid="test-component">Test</div>;
    };

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
        <TestComponent />
      </AntDesignWeb3ConfigProvider>
    );

    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId('test-component')).toBeTruthy();
      expect(fakeSignout).toHaveBeenCalled();
    });
  });
});
