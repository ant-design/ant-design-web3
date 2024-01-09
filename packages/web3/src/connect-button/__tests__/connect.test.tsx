import EventEmitter from 'events';
import React, { useEffect } from 'react';
import { useProvider } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { mainnet } from 'wagmi/chains';

import { ConnectButton } from '..';
import { AntDesignWeb3ConfigProvider } from '../../../../wagmi/src/wagmi-provider/config-provider';
import { MetaMask } from '../../../../wagmi/src/wallets';

const mockConnector = {
  name: 'MetaMask',
};

const event = new EventEmitter();

const connectAsync = vi.fn();
const disconnectAsync = vi.fn();

vi.mock('wagmi', () => {
  return {
    // https://wagmi.sh/react/hooks/useAccount
    useAccount: () => {
      const [connected, setConnected] = React.useState(false);
      useEffect(() => {
        event.on('connectChanged', (c) => {
          setConnected(c);
        });
      }, []);
      return {
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        isDisconnected: !connected,
        connector: mockConnector,
      };
    },
    useConnect: () => {
      return {
        connectors: [mockConnector],
        connectAsync: () => {
          connectAsync();
          event.emit('connectChanged', true);
        },
      };
    },
    useDisconnect: () => {
      return {
        disconnectAsync: () => {
          disconnectAsync();
          event.emit('connectChanged', false);
        },
      };
    },
    useNetwork: () => {
      return {
        chain: mainnet,
      };
    },
    useSwitchNetwork: () => {
      return {
        switchNetwork: () => {},
      };
    },
    useBalance: () => {
      return {};
    },
  };
});

describe('ConnectButton connect', async () => {
  it('connect', async () => {
    const CustomConnector = () => {
      const { connect, account, disconnect } = useProvider();
      return (
        <ConnectButton
          className="custom-btn"
          account={account}
          onConnectClick={() => {
            if (account) {
              disconnect?.();
              return;
            }
            connect?.();
          }}
          onDisconnectClick={() => {
            disconnect?.();
          }}
        />
      );
    };

    const App = () => (
      <AntDesignWeb3ConfigProvider
        availableChains={[mainnet]}
        availableConnectors={[]}
        assets={[Mainnet, MetaMask]}
      >
        <CustomConnector />
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    fireEvent.click(baseElement.querySelector('.custom-btn')!);
    await vi.waitFor(() => {
      expect(connectAsync).toBeCalled();
    });

    fireEvent.click(baseElement.querySelector('.custom-btn')!);
    const btns = baseElement.querySelectorAll('.ant-btn');
    fireEvent.click(baseElement.querySelector('.ant-modal-close')!);
    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-connect-button-profile-modal')?.className,
      ).toContain('ant-zoom-leave');
    });
    fireEvent.click(btns[2]); // Disconnect Button
    await vi.waitFor(() => {
      expect(disconnectAsync).toBeCalled();
    });
  });
});
