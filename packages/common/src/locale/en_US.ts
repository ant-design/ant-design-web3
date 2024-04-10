import type { RequiredLocale } from '../types';

const localeValues: RequiredLocale = {
  ConnectButton: {
    connect: 'Connect Wallet',
    disconnect: 'Disconnect',
    copyAddress: 'Copy Address',
    copied: 'Copied!',
    walletAddress: 'Wallet address',
    moreWallets: 'More Wallets',
  },
  ConnectModal: {
    title: 'Connect Wallet',
    guideTitle: 'What is a Wallet?',
    guideInfos1Title: 'Manage your private key and assets',
    guideInfos1Desc: 'Manage your private key and the assets of the corresponding chain address',
    guideInfos2Title: 'Help you connect to DApp',
    guideInfos2Desc: 'Authorize DApp to get your address, similar to login',
    guideInfos3Title: 'Call smart contract',
    guideInfos3Desc:
      'Through authorization of private key signature, initiate interaction with smart contract on the chain',
    guideInfosGetWalletBtnText: 'Get a Wallet',
    guideInfosMoreLinkText: 'Learn More',
    getWalletBtnText: 'Get',
    getWalletUniversalProtocolBtnText: 'About',
    getWalletPanelTitle: 'Get a Wallet',
    getWalletPanelInfoTitle: "Not what you're looking for?",
    getWalletPanelInfoDesc:
      'Select a wallet on the left to get started with a different wallet provider.',
    qrCodePanelTitleForDownload: 'Download {walletName}',
    qrCodePanelTitleForScan: 'Scan with {walletName}',
    qrCodePanelTitleForUniversalProtocol: 'Scan with your wallet',
    qrCodePanelLinkForDownload: 'Click to go to the download page',
    qrCodePanelLinkForConnect: 'Click to connect directly',
    qrCodePanelDownloadTipForReady: 'Scan the QR code to download the wallet.',
    qrCodePanelDownloadTipForNotReady: "Don't have",
    qrCodePanelUniversalProtocolTipForNotReady: "Don't know",
    walletCardPanelTitle: 'Get {selectedWalletName}',
    walletCardAppTitle: '{selectedWalletName} for Mobile',
    walletCardAppDesc: 'Use the mobile wallet to explore the world of Ethereum.',
    walletCardExtensionTitle: '{selectedWalletName} for {selectedExtensionBrowserName}',
    guideTipTitle: 'New to crypto wallets?',
    guideTipLearnMoreLinkText: 'Learn More',
    walletPanelPlugin: 'PLUGIN',
  },
  NFTCard: {
    actionText: 'Buy Now',
  },
  Address: {
    copyTips: 'Copy Address',
    copiedTips: 'Address Copied!',
  },
};

export default localeValues;
