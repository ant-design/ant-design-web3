import type { Account, Balance } from '@ant-design/web3-common';

import { getBalanceObject } from '../../helpers';
import type { BitcoinWallet } from '../useBitcoinWallet';

export class UnisatBitcoinWallet implements BitcoinWallet {
  name: string;
  provider: Window['unisat'];
  account?: Account;

  constructor(name: string) {
    this.name = name;
    this.provider = window.unisat;
    this.account = undefined;
  }

  connect = async (): Promise<void> => {
    if (!this.provider) return;
    try {
      const accounts = await this.provider.requestAccounts();
      this.account = { address: accounts[0] };
    } catch (e) {
      throw e;
    }
    return;
  };

  getBalance = async (): Promise<Balance | undefined> => {
    if (!this.provider) return;
    const { confirmed } = await this.provider.getBalance();
    const balance = getBalanceObject(confirmed);
    return balance;
  };

  signMessage = async (msg: string): Promise<string | undefined> => {
    if (!this.provider) return;
    const signature = await this.provider.signMessage(msg);
    return signature;
  };

  sendTransfer = async (
    to: string,
    sats: number,
    options?: { feeRate: number },
  ): Promise<string | undefined> => {
    if (!this.provider) return;
    let txid = '';
    try {
      txid = await this.provider.sendBitcoin(to, sats, options);
    } catch (e) {
      throw e;
    }
    return txid;
  };
}
