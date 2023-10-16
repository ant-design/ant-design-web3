import { WalletMetadata, Wallet, WalletProvider } from '../types';

export class MetaMaskProvider implements WalletProvider {
  metadata: WalletMetadata = {
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
    // @ts-ignore
    installed: window.ethereum?.isMetaMask ?? false,
  };

  create = async (): Promise<Wallet> => {
    // @ts-ignore
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }
    return {
      // @ts-ignore
      provider: window.ethereum,
      ...this.metadata,
    };
  };

  hasBrowserExtensionInstalled = async (): Promise<boolean> => {
    // @ts-ignore
    return window.ethereum && window.ethereum?.isMetaMask;
  };
}
