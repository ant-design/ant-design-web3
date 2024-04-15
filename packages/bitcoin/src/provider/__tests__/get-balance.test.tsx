import { fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useAdapter } from '../../adapter';
import { UnisatWallet, XverseWallet } from '../../wallets';
import { BitcoinWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

describe('get balance', () => {
  it('xverse', async () => {
    const Address: React.FC = () => {
      const { balance } = useAdapter();
      return <div className="address">{String(balance?.value)}</div>;
    };

    const App = () => {
      const { connect } = useAdapter();
      return (
        <BitcoinWeb3ConfigProvider wallets={[XverseWallet()]}>
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

    expect(address?.textContent).not.toBeNull();
    expect(connectBtn).not.toBeNull();

    fireEvent.click(connectBtn);
  });

  it('unisat', async () => {
    const Address: React.FC = () => {
      const { balance } = useAdapter();
      return <div className="address">{String(balance?.value)}</div>;
    };

    const App = () => {
      const { connect } = useAdapter();
      return (
        <BitcoinWeb3ConfigProvider wallets={[UnisatWallet()]}>
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

    expect(address?.textContent).not.toBeNull();

    expect(connectBtn).not.toBeNull();

    fireEvent.click(connectBtn);
  });
});
