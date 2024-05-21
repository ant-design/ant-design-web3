import type { Account, Balance } from '@ant-design/web3-common';

import { NoProviderError } from '../../error';
import { getBalanceObject } from '../../helpers';
import type { SignPsbtParams, TransferParams } from '../../types';
import type { BitcoinWallet } from '../useBitcoinWallet';

export class OkxBitcoinWallet implements BitcoinWallet {
  name: string;
  provider: Window['okxwallet'];
  account?: Account;

  constructor(name: string) {
    this.name = name;
    this.provider = window.okxwallet;
    this.account = undefined;
  }

  connect = async (): Promise<void> => {
    if (!this.provider) {
      throw new NoProviderError();
    }

    try {
      const accounts = await this.provider.bitcoin.requestAccounts();
      this.account = { address: accounts[0] };
    } catch (error) {
      throw error;
    }
  };

  getBalance = async (): Promise<Balance> => {
    if (!this.provider) {
      throw new NoProviderError();
    }

    const { confirmed } = await this.provider.bitcoin.getBalance();
    return getBalanceObject(confirmed);
  };

  signMessage = async (msg: string): Promise<string> => {
    if (!this.provider) {
      throw new NoProviderError();
    }

    return await this.provider.bitcoin.signMessage(msg);
  };

  sendTransfer = async ({ to, sats, options }: TransferParams): Promise<string> => {
    if (!this.provider) {
      throw new NoProviderError();
    }

    let txid = '';
    try {
      txid = await this.provider.bitcoin.sendBitcoin(to, sats, options);
    } catch (error) {
      throw error;
    }
    return txid;
  };

  signPsbt = async ({ psbt, options = {} }: SignPsbtParams): Promise<SignPsbtParams> => {
    if (!this.provider) {
      throw new NoProviderError();
    }

    const { broadcast = false, signInputs = {}, signHash } = options;
    const toSignInputs = [];

    for (const address in signInputs) {
      for (const input of signInputs[address]) {
        toSignInputs.push({
          address,
          index: input,
          sighashTypes: [signHash],
        });
      }
    }

    const signedPsbt = await this.provider.bitcoin.signPsbt(psbt, {
      autoFinalized: broadcast,
      toSignInputs: toSignInputs.length === 0 ? undefined : toSignInputs,
    });

    return {
      psbt: signedPsbt,
    };
  };
}
