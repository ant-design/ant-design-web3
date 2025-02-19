import React from 'react';
import { Connector, Web3ConfigProvider, type ConnectorTriggerProps } from '@ant-design/web3';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it, vi } from 'vitest';
import type * as Wagmi from 'wagmi';
import { mainnet } from 'wagmi/chains';

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
      };
    },
    useConnect: () => {
      return {
        connectors: [],
        connectAsync: async () => {
          return {
            accounts: ['0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B'],
          };
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

describe('sign after connect', () => {
  it('sign after connect', async () => {
    const signIn = vi.fn(async () => {});

    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { account, onConnectClick, onDisconnectClick, children } = props;
      return (
        <Button
          onClick={() => {
            if (account) {
              onDisconnectClick?.();
            } else {
              onConnectClick?.({
                name: 'Custom',
                remark: 'Custom',
                hasExtensionInstalled: async () => true,
              });
            }
          }}
        >
          {(account?.name || account?.address) ?? children}
        </Button>
      );
    };

    const App = () => {
      return (
        <Web3ConfigProvider
          connect={async () => ({
            address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          })}
          sign={{ signIn }}
          account={undefined}
          chain={{
            id: 2,
            name: 'custom',
          }}
        >
          <Connector>
            <CustomButton>Custom</CustomButton>
          </Connector>
        </Web3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);
    const btn = baseElement.querySelector('.ant-btn')!;

    expect(btn.textContent).toBe('Custom');

    fireEvent.click(btn);

    await waitFor(() => {
      expect(signIn).toBeCalledWith('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');
    });
  });
});
