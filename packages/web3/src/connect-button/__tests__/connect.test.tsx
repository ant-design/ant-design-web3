import React from 'react';
import { useProvider } from '@ant-design/web3';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ConnectButton, Web3ConfigProvider, type Account } from '../../../../web3/src';

describe('ConnectButton connect', async () => {
  it('connect', async () => {
    const onClickCallFn = vi.fn();
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
          onClick={onClickCallFn}
          onDisconnectClick={() => {
            disconnect?.();
          }}
        />
      );
    };

    const App = () => {
      const [account, setAccount] = React.useState<Account | undefined>();
      return (
        <Web3ConfigProvider
          availableWallets={[
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
          ]}
          connect={async () => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890',
            };
            setAccount(newAccount);
          }}
          disconnect={async () => {
            setAccount(undefined);
          }}
          account={account}
        >
          <CustomConnector />
        </Web3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.custom-btn')!);
    await vi.waitFor(() => {
      expect(onClickCallFn).toBeCalled();
      expect(baseElement.querySelector('.ant-web3-address.ant-typography span')?.textContent).toBe(
        '0x1234...7890',
      );
    });

    fireEvent.click(baseElement.querySelector('.custom-btn')!);

    const btns = baseElement.querySelectorAll('.ant-btn');
    fireEvent.click(baseElement.querySelector('.ant-modal-close')!);

    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-connect-button-profile-modal')?.className,
      ).toContain('ant-zoom-leave');
    });

    fireEvent.click(btns[2]);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
        'Connect Wallet',
      );
    });
  });
});
