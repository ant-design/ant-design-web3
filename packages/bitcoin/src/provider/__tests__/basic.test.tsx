import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useAdapter } from '../../adapter';
import { BitcoinWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

describe('BitcoinWeb3ConfigProvider', () => {
  it('mount correctly', () => {
    const App = () => (
      <BitcoinWeb3ConfigProvider>
        <div className="content">test</div>
      </BitcoinWeb3ConfigProvider>
    );

    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });

  it('connect and show account address', async () => {
    const Address: React.FC = () => {
      const { account } = useAdapter();
      return <div className="address">{account?.address}</div>;
    };

    const App = () => {
      const { connect } = useAdapter();
      return (
        <BitcoinWeb3ConfigProvider>
          <div>
            <div className="content">test</div>
            <button
              className="connect"
              onClick={async () => {
                await connect?.();
              }}
            >
              Connect
            </button>
            <Address />
          </div>
        </BitcoinWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);
    expect(selector('.content')?.textContent).toBe('test');

    const connectBtn = selector('.connect')!;
    const address = selector('.address');

    expect(connectBtn).not.toBeNull();

    // default address is empty
    expect(address?.textContent).toBe('');

    fireEvent.click(connectBtn);
  });

  it('disconnect', () => {
    const CustomConnector: React.FC = () => {
      const { disconnect } = useAdapter();
      return (
        <div>
          <button onClick={async () => await disconnect?.()}>Disconnect</button>
        </div>
      );
    };

    const App: React.FC = () => {
      return (
        <BitcoinWeb3ConfigProvider>
          <CustomConnector />
        </BitcoinWeb3ConfigProvider>
      );
    };

    const { selector } = xrender(App);

    const btn = selector('button')!;

    expect(btn?.textContent).toBe('Disconnect');
    fireEvent.click(btn);
  });
});
