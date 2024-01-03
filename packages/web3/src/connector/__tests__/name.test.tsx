import React from 'react';
import { Connector, type Account, type ConnectorTriggerProps } from '@ant-design/web3';
import { render } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it } from 'vitest';

describe('Connector', () => {
  it('name', async () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { account, onConnectClick, onDisconnectClick, children } = props;
      return (
        <Button
          onClick={() => {
            if (account) {
              onDisconnectClick?.();
            } else {
              onConnectClick?.();
            }
          }}
        >
          {(account?.name || account?.address) ?? children}
        </Button>
      );
    };

    const App = () => {
      const [account] = React.useState<Account>({
        address: '0x1234567890',
        name: 'wanderingearth.eth',
      });
      return (
        <Connector account={account}>
          <CustomButton>children</CustomButton>
        </Connector>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('wanderingearth.eth');
  });
});
