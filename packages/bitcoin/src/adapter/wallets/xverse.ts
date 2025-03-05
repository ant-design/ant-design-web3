/* v8 ignore start */
import type { Account, Balance } from '@ant-design/web3-common';
import { AddressPurpose, getProviderById, request } from 'sats-connect';

import { NoAddressError, NoProviderError } from '../../error';
import { getBalanceByMempool, getInscriptionsByAddress } from '../../helpers';
import type { BitcoinProvider, SignPsbtParams, SignPsbtResult, TransferParams } from '../../types';
import type { BitcoinWallet } from '../useBitcoinWallet';

export class XverseBitcoinWallet implements BitcoinWallet {
  name: string;
  provider?: BitcoinProvider;
  account?: Account;
  payment?: string;

  constructor(name: string, id = 'XverseProviders.BitcoinProvider') {
    this.name = name;
    this.provider = getProviderById(id);
  }

  connect = async (): Promise<void> => {
    if (!this.provider) {
      throw new NoProviderError();
    }
    const response = await request('getAccounts', {
      purposes: [AddressPurpose.Ordinals, AddressPurpose.Payment],
    });
    if (response.status === 'error') {
      throw new Error(response.error.message);
    }
    const [ordinals, payment] = response.result;
    this.account = { address: ordinals.address };
    this.payment = payment.address;
  };

  getBalance = async (): Promise<Balance> => {
    if (!this.payment) {
      throw new NoAddressError();
    }
    const balance = await getBalanceByMempool(this.payment);
    return balance;
  };

  signMessage = async (msg: string): Promise<string> => {
    if (!this.provider) {
      throw new NoProviderError();
    }
    if (!this.account?.address) {
      throw new NoAddressError();
    }
    const response = await request('signMessage', {
      address: this.account.address,
      message: msg,
    });
    if (response.status === 'success') {
      return response.result.signature;
    }

    throw new Error(response.error.message);
  };

  sendTransfer = async ({ to, sats }: TransferParams): Promise<string> => {
    let txid = '';
    const response = await request('sendTransfer', {
      recipients: [
        {
          address: to,
          amount: sats,
        },
      ],
    });
    if (response.status === 'success') {
      txid = response.result.txid;
    } else {
      throw new Error(response.error.message);
    }
    return txid;
  };

  signPsbt = async ({ psbt, options }: SignPsbtParams): Promise<SignPsbtResult> => {
    if (!this.provider) {
      throw new NoProviderError();
    }
    const response = await request('signPsbt', {
      psbt,
      signInputs: options?.signInputs ?? {},
      broadcast: !!options?.broadcast,
      allowedSignHash: options?.signHash,
    });
    if (response.status === 'success') {
      return response.result as SignPsbtResult;
    }

    throw new Error(response.error.message);
  };

  getInscriptions = async (offset = 0, limit = 20) => {
    if (!this.account?.address) {
      throw new NoAddressError();
    }
    const inscriptions = await getInscriptionsByAddress({
      address: this.account?.address,
      offset,
      limit,
    });
    return inscriptions;
  };
}
