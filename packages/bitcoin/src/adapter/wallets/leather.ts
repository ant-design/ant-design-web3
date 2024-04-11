import type { Account, Balance } from '@ant-design/web3-common';
import { message } from 'antd';
import { AddressType } from 'sats-connect';

import { getBalanceByMempool } from '../../helpers';
import type { Adapter } from '../useAdapter';

interface LeatherWindow extends Window {
  // TODO
  LeatherProvider?: any;
}

declare const window: LeatherWindow;

export class LeatherAdapter implements Adapter {
  provider: LeatherWindow['LeatherProvider'];
  account?: Account;
  balance?: Balance;

  constructor() {
    this.provider = window.LeatherProvider;
    this.account = undefined;
  }

  connect = async (): Promise<void> => {
    if (!this.provider) return;
    try {
      const userAddresses = await window.LeatherProvider?.request('getAddresses');
      const { addresses } = userAddresses.result;
      const addr = addresses.find(
        ({ type }: { type: AddressType }) => type === AddressType.p2tr,
      ).address;
      this.account = { address: addr };
      this.balance = await getBalanceByMempool(addr);
    } catch (e) {
      // @ts-ignore
      message.error(e.message);
    }
    return;
  };

  disconnect = async (): Promise<void> => {
    this.account = undefined;
  };

  signMessage = async (message: string): Promise<void> => {
    if (!this.account?.address || !this.provider) return;
    const response = await this.provider.request('signMessage', {
      address: this.account.address,
      message,
    });
    if (response.status === 'success') {
      alert('messageHash:' + response.result.messageHash);
    } else {
      // TODO:
    }
  };

  sendBitcoin = async (
    to: string,
    sats: number,
    options?: { feeRate: number },
  ): Promise<string | undefined> => {
    if (!this.provider) return;
    let txid = '';
    try {
      const response = await this.provider.request('sendTransfer', {
        address: to,
        amount: sats,
      });
      if (response.status === 'success') {
        txid = response.result.txid;
      } else {
        // handle error
      }
    } catch (err) {}
    return txid;
  };
}
