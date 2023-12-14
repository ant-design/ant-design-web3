import {
  Web3ConfigProvider,
  type Account,
  ConnectButton,
  useAccount,
  useNFT,
} from '@ant-design/web3';
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import type { Web3ConfigProviderProps } from '@ant-design/web3-common';
import { Spin } from 'antd';

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
          link: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
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
});
