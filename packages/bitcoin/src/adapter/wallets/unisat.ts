import type { Account, Balance } from '@ant-design/web3-common';
import { message } from 'antd';

import { getBalanceObject } from '../../helpers';
import type { Adapter } from '../useAdapter';

interface UnisatWindow extends Window {
  // TODO: unisat interface
  unisat?: any;
}

declare const window: UnisatWindow;

export class UnisatAdapter implements Adapter {
  name: string;
  provider: UnisatWindow['unisat'];
  account?: Account;
  balance?: Balance;

  constructor(name: string) {
    this.name = name;
    this.provider = window.unisat;
    this.account = undefined;
  }

  connect = async (): Promise<void> => {
    if (!this.provider) return;
    try {
      const accounts = await this.provider.requestAccounts();
      const { confirmed } = await this.provider.getBalance();
      this.account = { address: accounts[0] };
      this.balance = getBalanceObject(confirmed);
    } catch (e) {
      // @ts-ignore
      message.error(e.message);
    }
    return;
  };

  signMessage = async (msg: string): Promise<void> => {
    if (!this.provider) return;
    const res = await this.provider.signMessage(msg);
    message.success(res);
  };

  sendBitcoin = async (
    to: string,
    sats: number,
    options?: { feeRate: number },
  ): Promise<string | undefined> => {
    if (!this.provider) return;
    let txid = '';
    try {
      txid = await this.provider.sendBitcoin(to, sats, options);
    } catch (e) {
      console.log(e);
    }
    return txid;
  };
}
