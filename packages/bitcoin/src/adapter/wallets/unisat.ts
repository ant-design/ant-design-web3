import type { Account, Balance } from '@ant-design/web3-common';

import { getBalanceObject } from '../../helpers';
import type { SignPsbtParams, SignPsbtResult, TransferParams } from '../../types';
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

  sendTransfer = async ({ to, sats, options }: TransferParams): Promise<string | undefined> => {
    if (!this.provider) return;
    let txid = '';
    try {
      txid = await this.provider.sendBitcoin(to, sats, options);
    } catch (e) {
      throw e;
    }
    return txid;
  };

  signPsbt = async ({
    psbt,
    options = {},
  }: SignPsbtParams): Promise<SignPsbtResult | undefined> => {
    if (!this.provider) return;
    const { broadcast = false, signInputs = {}, signHash } = options;
    const toSignInputs = [];

    // Convert xverse-compatible signInputs to unisat-compatible toSignInputs
    for (const address in signInputs) {
      for (const input of signInputs[address]) {
        toSignInputs.push({
          address,
          index: input,
          sighashTypes: [signHash],
        });
      }
    }
    const signedPsbt = await this.provider.signPsbt(psbt, {
      autoFinalized: broadcast,
      toSignInputs: toSignInputs.length === 0 ? undefined : toSignInputs,
    });
    return {
      psbt: signedPsbt,
    };
  };
}
