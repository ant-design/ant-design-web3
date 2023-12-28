import type { RequiredLocale } from '../types';

const localeValues: RequiredLocale = {
  ConnectButton: {
    connect: 'Connect Wallet',
    disconnect: 'Disconnect',
    copyAddress: 'Copy Address',
    addressCopied: 'Address Copied!',
    walletAddress: 'Wallet address',
  },
  ConnectModal: {
    title: 'Connect Wallet',
    guideTitle: 'What is a wallet?',
    guideInfos1Title: 'Manage your private key and assets',
    guideInfos1Desc: 'Manage your private key and the assets of the corresponding chain address',
    guideInfos2Title: 'Help you connect to DApp',
    guideInfos2Desc: 'Authorize DApp to get your address, similar to login',
    guideInfos3Title: 'Call smart contract',
    guideInfos3Desc:
      'Through authorization of private key signature, initiate interaction with smart contract on the chain',
    guideInfosGetWalletBtnText: 'Get Wallet',
    guideInfosMoreLinkText: 'Learn more',
    getWalletBtnText: 'Get',
    getWalletPanelTitle: 'Get a wallet',
    getWalletPanelInfoTitle: 'Not what you&apos;re looking for?',
    getWalletPanelInfoDesc:
      'Select a wallet on the left to get started with a different wallet provider.',
  },
};

export default localeValues;
