import React, { useContext } from 'react';
import {
  ConfigContext,
  ConnectButton,
  useAccount,
  useNFT,
  Web3ConfigProvider,
  type Account,
} from '@ant-design/web3';
import type { Web3ConfigProviderProps } from '@ant-design/web3-common';
import { fireEvent, render } from '@testing-library/react';
import { Spin } from 'antd';
import { describe, expect, it, vi } from 'vitest';

const baseProps: Web3ConfigProviderProps = {
  availableWallets: [
    {
      name: 'MetaMask',
      remark: 'Easy-to-use browser extension.',
      extensions: [
        {
          key: 'Chrome',
          browserIcon:
            'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
          browserName: 'Chrome',
          link: 'https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
          description: 'Access your wallet right from your favorite web browser.',
        },
      ],
    },
  ],
};

describe('web3-config-provider', () => {
  it('Should work', () => {
    const App: React.FC = () => {
      const [account, setAccount] = React.useState<Account>();
      return (
        <Web3ConfigProvider
          {...baseProps}
          connect={async () => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890',
            };
            setAccount(newAccount);
          }}
          account={account}
        >
          <ConnectButton />
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
  it('useAccount', () => {
    const Child: React.FC = () => {
      const { account } = useAccount();
      return <div>{account?.address}</div>;
    };
    const App: React.FC = () => {
      const [account, setAccount] = React.useState<Account>();
      return (
        <Web3ConfigProvider
          {...baseProps}
          connect={async () => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890',
            };
            setAccount(newAccount);
          }}
          account={account}
        >
          <Child />
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
  it('useNFT', () => {
    const Child: React.FC = () => {
      const { metadata, error, loading } = useNFT(
        '0x79fcdef22feed20eddacbb2587640e45491b757f',
        42n,
      );
      if (error) {
        return <div>{error.message}</div>;
      }
      return <Spin spinning={loading}>{metadata.name}</Spin>;
    };
    const App: React.FC = () => {
      const [account, setAccount] = React.useState<Account>();
      return (
        <Web3ConfigProvider
          {...baseProps}
          connect={async () => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890' as `0x${string}`,
            };
            setAccount(newAccount);
          }}
          account={account}
        >
          <Child />
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
  it('useNFT with custom getNFTMetadata', () => {
    const Child: React.FC = () => {
      const { metadata, error, loading } = useNFT(
        '0x79fcdef22feed20eddacbb2587640e45491b757f',
        42n,
      );
      if (error) {
        return <div>{error.message}</div>;
      }
      return <Spin spinning={loading}>{metadata.name}</Spin>;
    };
    const App: React.FC = () => {
      const [account, setAccount] = React.useState<Account>();
      return (
        <Web3ConfigProvider
          {...baseProps}
          connect={async () => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890' as `0x${string}`,
            };
            setAccount(newAccount);
          }}
          account={account}
          getNFTMetadata={() => {
            return Promise.resolve({
              attributes: [],
              name: 'test',
              date: Date.now(),
              description: 'test',
              image: 'https://no.com/z.png',
            });
          }}
        >
          <Child />
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
  it('extendable', () => {
    const Child: React.FC = () => {
      const { account, balance } = useContext(ConfigContext);
      return (
        <>
          <div id="account-name">{account?.name}</div>
          <div id="balance">{balance?.value?.toString()}</div>
        </>
      );
    };

    const App: React.FC = () => {
      return (
        <Web3ConfigProvider
          account={{
            name: 'testAccount',
            address: '0x123456789',
          }}
          balance={{ value: 200n }}
        >
          <Web3ConfigProvider balance={{ value: 100n }}>
            <Child />
          </Web3ConfigProvider>
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('#account-name')?.textContent).toBe('testAccount');
    expect(baseElement.querySelector('#balance')?.textContent).toBe('100');
  });
  it('should not extend from parent', () => {
    const Child: React.FC = () => {
      const { account, balance } = useContext(ConfigContext);
      return (
        <>
          <div id="account-name">{account?.name}</div>
          <div id="balance">{balance?.value?.toString()}</div>
        </>
      );
    };

    const App: React.FC = () => {
      return (
        <Web3ConfigProvider
          account={{
            name: 'testAccount',
            address: '0x123456789',
          }}
          balance={{ value: 200n }}
        >
          <Web3ConfigProvider extendsContextFromParent={false} balance={{ value: 100n }}>
            <Child />
          </Web3ConfigProvider>
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('#account-name')?.textContent).toBeFalsy();
    expect(baseElement.querySelector('#balance')?.textContent).toBe('100');
  });
  it('merge locale', async () => {
    const { baseElement } = render(
      <Web3ConfigProvider
        locale={{
          ConnectButton: {
            disconnect: 'Parent Disconnect',
            copyAddress: 'Parent Copy Address',
          },
        }}
      >
        <Web3ConfigProvider
          locale={{
            ConnectButton: {
              copyAddress: 'Child Copy Address',
            },
          }}
        >
          <ConnectButton
            account={{
              address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
            }}
          />
        </Web3ConfigProvider>
      </Web3ConfigProvider>,
    );

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button') as Element);
    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-modal-footer')!.querySelectorAll('.ant-btn')[0]
          .childNodes[0].textContent,
      ).toBe('Child Copy Address');
      expect(
        baseElement.querySelector('.ant-modal-footer')!.querySelectorAll('.ant-btn')[1]
          .childNodes[0].textContent,
      ).toBe('Parent Disconnect');
    });
  });
  it('should ignore config when ignoreConfig is true', () => {
    const Child: React.FC = () => {
      const { account, balance } = useContext(ConfigContext);
      return (
        <>
          <div id="account-name">{account?.name}</div>
          <div id="balance">{balance?.value?.toString()}</div>
        </>
      );
    };

    const App: React.FC = () => {
      return (
        <Web3ConfigProvider
          account={{
            name: 'parentAccount',
            address: '0x123456789',
          }}
          balance={{ value: 200n }}
        >
          <Web3ConfigProvider
            ignoreConfig={true}
            account={{
              name: 'ignoredAccount',
              address: '0x987654321',
            }}
            balance={{ value: 100n }}
          >
            <Child />
          </Web3ConfigProvider>
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    // Should use parent config, not the ignored one
    expect(baseElement.querySelector('#account-name')?.textContent).toBe('parentAccount');
    expect(baseElement.querySelector('#balance')?.textContent).toBe('200');
  });
  it('should use active provider config when one is ignored', () => {
    const Child: React.FC = () => {
      const { account, balance } = useContext(ConfigContext);
      return (
        <>
          <div id="account-name">{account?.name}</div>
          <div id="balance">{balance?.value?.toString()}</div>
        </>
      );
    };

    const App: React.FC = () => {
      return (
        <Web3ConfigProvider
          ignoreConfig={true}
          account={{
            name: 'ignoredAccount',
            address: '0x111111111',
          }}
          balance={{ value: 100n }}
        >
          <Web3ConfigProvider
            account={{
              name: 'activeAccount',
              address: '0x222222222',
            }}
            balance={{ value: 300n }}
          >
            <Child />
          </Web3ConfigProvider>
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    // Should use active provider config, not the ignored one
    expect(baseElement.querySelector('#account-name')?.textContent).toBe('activeAccount');
    expect(baseElement.querySelector('#balance')?.textContent).toBe('300');
  });
  it('should work with multiple nested providers with ignoreConfig', () => {
    const Child: React.FC = () => {
      const { account, balance } = useContext(ConfigContext);
      return (
        <>
          <div id="account-name">{account?.name}</div>
          <div id="balance">{balance?.value?.toString()}</div>
        </>
      );
    };

    const App: React.FC = () => {
      return (
        <Web3ConfigProvider
          account={{
            name: 'level1',
            address: '0x111111111',
          }}
          balance={{ value: 100n }}
        >
          <Web3ConfigProvider
            ignoreConfig={true}
            account={{
              name: 'level2-ignored',
              address: '0x222222222',
            }}
            balance={{ value: 200n }}
          >
            <Web3ConfigProvider
              account={{
                name: 'level3-active',
                address: '0x333333333',
              }}
              balance={{ value: 300n }}
            >
              <Child />
            </Web3ConfigProvider>
          </Web3ConfigProvider>
        </Web3ConfigProvider>
      );
    };

    const { baseElement } = render(<App />);
    // Should merge level1 and level3, ignoring level2
    expect(baseElement.querySelector('#account-name')?.textContent).toBe('level3-active');
    expect(baseElement.querySelector('#balance')?.textContent).toBe('300');
  });
});
