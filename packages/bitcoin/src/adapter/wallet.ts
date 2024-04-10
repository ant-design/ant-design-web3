import type { Account, Balance } from '@ant-design/web3-common';
import { message } from 'antd';
import * as XverseProvider from 'sats-connect';

import { getBalanceByMempool, getBalanceObject } from '../helpers';

export interface Provider {
  account?: Account;
  balance?: Balance;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  signMessage: (message: string) => Promise<void>;
}

export class XverseWallet implements Provider {
  account?: Account;
  balance?: Balance;

  async connect(): Promise<void> {
    const response = await XverseProvider.request('getAccounts', {
      purposes: [XverseProvider.AddressPurpose.Ordinals, XverseProvider.AddressPurpose.Payment],
    });
    if (response.status === 'error') {
      message.error(response.error.message);
      return;
    }
    const [ordinals, payment] = response.result;
    this.account = { address: ordinals.address };
    this.balance = await getBalanceByMempool(payment.address);
  }

  async disconnect(): Promise<void> {
    this.account = undefined;
  }

  async signMessage(message: string): Promise<void> {
    if (!this.account?.address) return;
    const response = await XverseProvider.request('signMessage', {
      address: this.account?.address,
      message,
    });
    if (response.status === 'success') {
      alert('messageHash:' + response.result.messageHash);
    } else {
      if (response.error.code === XverseProvider.RpcErrorCode.USER_REJECTION) {
        // handle user request cancelation
      } else {
        // handle request error
      }
    }
  }
}

export class UnisatWallet implements Provider {
  account?: Account;
  balance?: Balance;

  async connect(): Promise<void> {
    try {
      // @ts-ignore
      let accounts = await window.unisat.requestAccounts();
      // @ts-ignore
      let { confirmed } = await window.unisat.getBalance();
      this.account = { address: accounts[0] };
      this.balance = getBalanceObject(confirmed);
    } catch (e) {
      // @ts-ignore
      message.error(e.message);
    }
    return;
  }

  async disconnect(): Promise<void> {
    this.account = undefined;
  }

  async signMessage(message: string): Promise<void> {
    // @ts-ignore
    const res = await window.unisat.signMessage(message);
    alert('message success:' + res);
  }
}
