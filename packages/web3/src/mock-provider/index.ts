// A mock provider for testing
import type {
  UniversalWeb3ProviderInterface,
  Account,
  UniversalWeb3ProviderEventType,
} from '@ant-design/web3-common';

export class MockProvider implements UniversalWeb3ProviderInterface {
  private currentAccount?: Account;
  private addressList: Account[] = [];

  getAccounts = async () => {
    return this.addressList || [];
  };
  getCurrentAccount = async () => {
    return this.currentAccount;
  };
  getCurrentNetwork = async () => {
    return 1;
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
  on = (type: UniversalWeb3ProviderEventType, handler: () => void) => {};
  off = (type: UniversalWeb3ProviderEventType, handler: () => void) => {};

  getAvaliableWallets = async () => {
    return [
      {
        icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0',
        name: '测试钱包',
        remark: '备注',
        app: {
          link: 'https://test.com/xxx',
        },
        extensions: [
          {
            key: 'Chrome',
            link: 'https://test.com/xxx',
            browserIcon:
              'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
            browserName: 'Chrome',
            description: 'Access your wallet right from your favorite web browser.',
          },
          {
            key: 'Firefox',
            link: 'https://test.com/xxx',
            browserIcon:
              'https://github.com/ant-design/ant-design/assets/10286961/a6559d9b-d20a-4ac7-a263-53c04b9038a4',
            browserName: 'Firefox',
            description: 'Access your wallet right from your favorite web browser.',
          },
        ],
        group: 'Popular',
      },
      {
        icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
        name: '测试钱包2',
        remark: '备注2',
        app: {
          link: 'https://test.com/xxx',
        },
        extensions: [
          {
            key: 'Firefox',
            link: 'https://test.com/xxx',
            browserIcon:
              'https://github.com/ant-design/ant-design/assets/10286961/a6559d9b-d20a-4ac7-a263-53c04b9038a4',
            browserName: 'Firefox',
            description: 'Access your wallet right from your favorite web browser.',
          },
        ],
      },
      {
        icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
        name: '测试钱包3',
        remark: '备注3',
        group: 'Popular',
        app: {
          link: 'https://test.com/xxx',
        },
      },
      {
        name: '测试钱包4',
        remark: '备注4',
        extensions: [
          {
            key: 'Safari',
            link: 'https://test.com/xxx',
            browserIcon:
              'https://github.com/ant-design/ant-design/assets/10286961/9d56eba7-84d7-4360-b013-bf57d419b058',
            browserName: 'Safari',
            description: 'Access your wallet right from your favorite web browser.',
          },
        ],
      },
      {
        name: '测试钱包5',
        remark: '备注5',
        app: {
          link: 'https://test.com/xxx',
        },
      },
      {
        name: '测试钱包6',
        remark: '备注6',
        key: 6,
        app: {
          link: 'https://test.com/xxx',
        },
        extensions: [
          {
            key: 'Chrome',
            link: 'https://test.com/xxx',
            browserIcon:
              'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
            browserName: 'Chrome',
            description: 'Access your wallet right from your favorite web browser.',
          },
        ],
      },
      {
        name: '测试钱包6',
        remark: '备注6',
        key: 7,
        app: {
          link: 'https://test.com/xxx',
        },
        extensions: [
          {
            key: 'Chrome',
            link: 'https://test.com/xxx',
            browserIcon:
              'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
            browserName: 'Chrome',
            description: 'Access your wallet right from your favorite web browser.',
          },
        ],
      },
    ];
  };

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
