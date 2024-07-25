import TonConnect, { CHAIN, type TonConnectOptions } from '@tonconnect/sdk';

export interface TonConnectSdkConfigType extends TonConnectOptions {
  chain?: CHAIN;
}
class TonConnectSdk extends TonConnect {
  private _api: string;
  private _network: CHAIN;

  constructor(options: TonConnectSdkConfigType) {
    super({ manifestUrl: options?.manifestUrl });
    this._api = '';
    this._network = CHAIN.MAINNET;
    this._switchNetwork(options.chain || this._network);
  }

  get network() {
    return this._network;
  }

  set network(network: CHAIN) {
    this._switchNetwork(network);
  }

  get api() {
    return this._api;
  }

  private _switchNetwork(network: CHAIN) {
    if (network === CHAIN.MAINNET) {
      this._api = 'https://toncenter.com/api/v3';
    } else {
      this._api = 'https://testnet.toncenter.com/api/v3';
    }
    this._network = network;
  }

  async getBalance(url?: string) {
    if (!this.account?.address && !url) return Promise.resolve(0n);
    const queryUrl = url || `${this._api}/account?address=${this.account?.address}`;
    return fetch(queryUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch balance');
        }
        return res.json();
      })
      .then((res) => {
        return res.balance as bigint;
      });
  }
}

export default TonConnectSdk;
