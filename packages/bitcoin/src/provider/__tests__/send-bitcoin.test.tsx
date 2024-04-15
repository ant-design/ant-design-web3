import { fireEvent } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it, vi } from 'vitest';

import { useAdapter } from '../../adapter';
import { BitcoinWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

describe('BitcoinWeb3ConfigProvider', () => {
  it('send bitcoin', () => {
    const SendBitcoin: React.FC = () => {
      const { sendBitcoin } = useAdapter();
      return (
        <Button
          className="send-bitcoin"
          onClick={() =>
            sendBitcoin?.('bc1p3cphtuyx38ut42njdxzm4gvft3r75232lnj2ph6w5urpzum3whuquu6fam', 10000)
          }
        >
          发送
        </Button>
      );
    };

    const App = () => (
      <BitcoinWeb3ConfigProvider>
        <SendBitcoin />
      </BitcoinWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    const sendBtn = selector('.send-bitcoin')!;
    expect(sendBtn).not.toBeNull();
    fireEvent.click(sendBtn);
  });
});
