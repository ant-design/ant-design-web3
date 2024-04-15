import { fireEvent } from '@testing-library/react';
import { Button } from 'antd';
import { expect, test } from 'vitest';

import { useAdapter } from '../../adapter';
import { XverseWallet } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';
import { xrender } from './utils';

test('BitcoinWeb3ConfigProvider', () => {
  const Connect: React.FC = () => {
    const adapter = useAdapter();
    return (
      <Button className="connect" onClick={() => adapter.connect?.()}>
        连接
      </Button>
    );
  };

  let selectWalletCalled = false;
  const selectWallet = () => {
    selectWalletCalled = true;
  };

  const App = () => (
    <AntDesignWeb3ConfigProvider wallets={[XverseWallet().create()]} selectWallet={selectWallet}>
      <Connect />
    </AntDesignWeb3ConfigProvider>
  );

  const { selector } = xrender(App);
  const sendBtn = selector('.connect')!;
  expect(sendBtn).not.toBeNull();
  fireEvent.click(sendBtn);
});
