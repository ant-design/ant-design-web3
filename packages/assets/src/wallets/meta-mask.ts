import type { WalletMetadata } from '@ant-design/web3-common';

export const metadata_MetaMask: WalletMetadata = {
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
};
