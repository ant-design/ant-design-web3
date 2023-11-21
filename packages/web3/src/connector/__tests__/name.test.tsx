import { Connector, type ConnectorTriggerProps, type Account } from '@ant-design/web3';
import React from 'react';
import { Button } from 'antd';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';

describe('Connector', () => {
  it('name', async () => {
    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { name, address, connected, onConnectClick, onDisconnectClick, children } = props;
      return (
        <Button
          onClick={() => {
            if (connected) {
              onDisconnectClick?.();
            } else {
              onConnectClick?.();
            }
          }}
        >
          {(name || address) ?? children}
        </Button>
      );
    };

    const App = () => {
      const [accounts] = React.useState<Account[]>([
        {
          address: '0x1234567890',
          name: 'wanderingearth.eth',
        },
      ]);
      return (
        <Connector accounts={accounts}>
          <CustomButton>children</CustomButton>
        </Connector>
      );
    };
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-btn')?.textContent).toBe('wanderingearth.eth');
  });
});
