import TonConnect from '@tonconnect/sdk';

class TonConnectSdk extends TonConnect {
  private _api: string;

  constructor() {
    super();
    this._api = 'https://toncenter.com/api/v3';
  }

  get api() {
    return this._api;
  }

  set api(api: string) {
    this._api = api;
  }

  async getBalance() {
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
