import type {
  Web3ProviderInterface,
  Account,
  Web3ProviderEventType,
} from '@ant-design/web3-common';
import { Chains } from '@ant-design/web3-common';

export class MockProvider implements Web3ProviderInterface {
  private currentAccount?: Account;
  private addressList: Account[] = [];

  getAccounts = async () => {
    return this.addressList || [];
  };
  getCurrentAccount = async () => {
    return this.currentAccount;
  };
  requestAccounts = async () => {
    return new Promise<Account[]>((resolve) => {
      setTimeout(() => {
        const addressList = [
          {
            address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
          },
          {
            address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
          },
        ];
        resolve(addressList);
        this.currentAccount = addressList[0];
        this.addressList = addressList;
      }, 1000);
    });
  };
  disconnect = async () => {
    this.currentAccount = undefined;
    this.addressList = [];
  };
  on = (type: Web3ProviderEventType, handler: () => void) => {};
  off = (type: Web3ProviderEventType, handler: () => void) => {};

  getQrCodeLink = async () => {
    return new Promise<string>((resolve) =>
      setTimeout(
        () =>
          resolve(
            `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
          ),
        2000,
      ),
    );
  };
  chain = Chains.bitcoin;
  getNFTMetadata = async (address: string, id: number) => {
    return {
      name: 'OurMetaverseDAO NFT #6',
      description: 'OurMetaverseDAO NFT, Our Metaverse, Our Dream!',
      image:
        'https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp',
      dna: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
      edition: 6,
      date: 1657097440578,
      attributes: [
        {
          trait_type: 'GENDER',
          value: 'Girl',
        },
        {
          trait_type: 'BACKGROUND',
          value: 'Gradient Purple',
        },
        {
          trait_type: 'WEAPON',
          value: 'Surfboard Yellow',
        },
        {
          trait_type: 'BODY',
          value: 'White',
        },
        {
          trait_type: 'BACK HAIR',
          value: 'Chignon White',
        },
        {
          trait_type: 'CLOTHES',
          value: 'T Shirt Pistachio Green',
        },
        {
          trait_type: 'EYES',
          value: 'Vertical White And Blue 4',
        },
        {
          trait_type: 'EYEBROWS',
          value: 'Normal Pink',
        },
        {
          trait_type: 'MOUTH',
          value: 'Normal Smile Red',
        },
        {
          trait_type: 'FRONT HAIR',
          value: 'Curtain Bangs White',
        },
        {
          trait_type: 'FRONT ACCESSORY',
          value: 'Wireless Headset White And Red',
        },
      ],
      compiler: 'HashLips Art Engine',
    };
  };
}
