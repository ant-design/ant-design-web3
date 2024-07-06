import TonConnect from '@tonconnect/sdk';

interface TonConnectSdkOptions {
  manifestUrl: string;
}
class TonConnectSdk extends TonConnect {
  private _api: string;

  constructor(options: TonConnectSdkOptions) {
    super({ manifestUrl: options.manifestUrl });
    this._api = 'https://toncenter.com/api/v3';
  }

  get api() {
    return this._api;
  }

  set api(api: string) {
    this._api = api;
  }

  async getBalance() {
    if (!this.account?.address) return Promise.resolve('0');
    return fetch(`${this._api}/account?address=${this.account?.address}`, {
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
        return res.balance as string;
      });
  }
}

export default TonConnectSdk;
