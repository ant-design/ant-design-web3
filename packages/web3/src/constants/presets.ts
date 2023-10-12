import { WalletMetadata } from '../ConnectModal/interface';

export enum WalletsPresets {
  SIMPLE = 'simple',
}

export type WalletsPresetsConfig = {
  [key in string]: WalletMetadata[];
};

export const walletsPresetsConfig: WalletsPresetsConfig = {
  [WalletsPresets.SIMPLE]: [
    {
      icon: 'https://metamask.io/images/metamask-logo.png',
      name: 'MetaMask',
      remark: 'MetaMask Wallet',
      app: {
        link: 'https://metamask.io/',
      },
      extensions: [
        {
          key: 'Chrome',
          browserIcon:
            'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
          browserName: 'Chrome',
          link: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
          description: 'Access your wallet right from your favorite web browser.',
        },
      ],
    },
    {
      icon: 'https://docs.walletconnect.com/img/walletconnect-logo-black.svg#light-mode-only',
      name: 'WalletConnect',
      remark: 'Connect with mobile APP',
      app: {
        link: 'https://walletconnect.com/',
      },
      group: 'Popular',
    },
  ],
};
