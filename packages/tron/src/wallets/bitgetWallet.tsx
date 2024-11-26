import { BitgetWalletColorful, ChromeCircleColorful } from '@ant-design/web3-icons';

export const BitgetWallet = {
  icon: <BitgetWalletColorful />,
  name: 'Bitget',
  remark: 'Bitget',
  app: {
    link: 'https://web3.bitget.com/wallet-download',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chrome.google.com/webstore/detail/jiidiaalihmmhddjgbnbgdfflelocpak',
      description:
        "Bitget Wallet, formerly known as BitKeep, is one of the world's largest non-custodial  multi-chain crypto wallets.",
    },
  ],
  key: 'BitgetWallet',
  group: 'Popular',
};
