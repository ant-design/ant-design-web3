import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, MetaMaskColorful } from '@ant-design/web3-icons';
import { BSC, Mainnet, Polygon } from '@ant-design/web3-wagmi';

export const metadata_MetaMask: WalletMetadata = {
  icon: <MetaMaskColorful />,
  name: 'MetaMask',
  remark: 'MetaMask Wallet',
  app: {
    link: 'https://metamask.io/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
  group: 'Popular',
  paramsFormat: {
    nativeFormatStr: 'ethereum:{toAddress}@{chainId}?value={amount}',
    otherFormatStr:
      'ethereum:{tokenAddress}@{chainId}/transfer?address={toAddress}&uint256={amount}',
  },
  supportedChains: [Mainnet, Polygon, BSC],
};
