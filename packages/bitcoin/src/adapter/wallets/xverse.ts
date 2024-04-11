import type { Account, Balance } from '@ant-design/web3-common';
import { message } from 'antd';
import {
  AddressPurpose,
  getProviderById,
  request,
  RpcErrorCode,
  type BitcoinProvider,
} from 'sats-connect';

import { getBalanceByMempool } from '../../helpers';

export class XverseAdapter {
  provider: BitcoinProvider | null;
  account?: Account;
  balance?: Balance;

  constructor(id = 'XverseProviders.BitcoinProvider') {
    this.provider = getProviderById(id);
  }

  connect = async (): Promise<void> => {
    if (!this.provider) return;
    const response = await request('getAccounts', {
      purposes: [AddressPurpose.Ordinals, AddressPurpose.Payment],
    });
    if (response.status === 'error') {
      message.error(response.error.message);
      return;
    }
    const [ordinals, payment] = response.result;
    this.account = { address: ordinals.address };
    this.balance = await getBalanceByMempool(payment.address);
  };

  disconnect = async (): Promise<void> => {
    this.account = undefined;
  };

  signMessage = async (msg: string): Promise<void> => {
    if (!this.account?.address || !this.provider) return;
    const response = await request('signMessage', {
      address: this.account.address,
      message: msg,
    });
    if (response.status === 'success') {
      alert('messageHash:' + response.result.messageHash);
    } else {
      if (response.error.code === RpcErrorCode.USER_REJECTION) {
        // handle user request cancelation
      } else {
        // handle request error
      }
    }
  };

  sendBitcoin = async (
    to: string,
    sats: number,
    options?: { feeRate: number },
  ): Promise<string> => {
    let txid = '';
    try {
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
        if (response.error.code === RpcErrorCode.USER_REJECTION) {
          // handle user cancellation error
        } else {
          // handle error
        }
      }
    } catch (err) {}
    return txid;
  };
}
