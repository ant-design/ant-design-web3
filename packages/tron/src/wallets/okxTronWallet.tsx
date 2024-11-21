import { metadata_OkxWallet } from '@ant-design/web3-assets';
import { ChromeCircleColorful, TronlinkColorful } from '@ant-design/web3-icons';

export const okxTronWallet = {
  ...metadata_OkxWallet,
  key: 'okxTronWallet',
  group: 'Popular',
};

export const tronWallets = {
  icon: <TronlinkColorful />,
  name: 'TronLink',
  remark: 'TronLink',
  app: {
    link: 'https://www.tronlink.org/dlDetails/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec',
      description: 'The first and most popular TRON wallet. Recommended by TRON Foundation.',
    },
  ],
  key: 'tronWallet',
  group: 'Popular',
};
