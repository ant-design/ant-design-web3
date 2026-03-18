import type { RequiredLocale } from '../types';

const localeValues: RequiredLocale = {
  ConnectButton: {
    connect: 'Connect Wallet',
    disconnect: 'Disconnect',
    copyAddress: 'Copy Address',
    copied: 'Copied!',
    walletAddress: 'Wallet address',
    moreWallets: 'More Wallets',
    sign: 'Sign',
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
    walletListEmpty: 'No wallet available',
    walletConnectSuccess: 'Wallet Connected!',
    getWalletTipsTitle: "Not what you're looking for?",
    getWalletTipsDesc:
      'Select a wallet on the left to get started with a different wallet provider.',
    linkWallet: 'Link',
    walletConnecting: 'Connecting...',
    walletSigning: 'Signing...',
  },
  NFTCard: {
    actionText: 'Buy Now',
  },
  Address: {
    copyTips: 'Copy Address',
    copiedTips: 'Address Copied!',
  },
  TokenSelect: {
    placeholder: 'Please select token',
  },
  CryptoInput: {
    placeholder: 'Please enter amount',
    maxButtonText: 'Max',
  },
  PayPanel: {
    tips: 'Please scan the QR code or copy the address',
  },
  AddOrSwitchNetwork: {
    pleaseConnectWallet: 'Please connect your wallet first',
    noWalletDetected: 'No Ethereum wallet detected, please install MetaMask or similar wallet',
    noProviderDetected: 'No provider detected, please install MetaMask or similar wallet',
    networkConfigIncomplete: 'Network configuration information is incomplete',
    networkParamsIncomplete:
      'Network configuration parameters are incomplete, please check the RPC URL and browser URL',
    requestTimeout: 'Request timeout, please check the network connection and try again',
    userCanceled:
      'You canceled the add network operation, please click add again if you need to use',
    invalidConfig:
      'Network configuration information is incorrect, please contact technical support',
    walletNotSupport:
      'Your wallet does not support adding custom networks, please use MetaMask or other compatible wallets',
    networkAddFailed:
      'Network adding failed, please ensure that the wallet supports this network or add manually',
    networkAddFailedWithMsg: 'Network adding failed: {errorMsg}, please try again later',
    networkAddedSuccess: 'Network added successfully',
    switchSuccess: 'Switch network success',
    switchNetworkFailed: 'Failed to switch network, please try again',
    switchFailedAddFirst: 'Network switching failed, please add this network to your wallet first',
    switchFailedWithMsg: 'Network switching failed: {errorMessage}',
    autoAddFailed:
      'Auto adding network failed, please add the network manually in your wallet or contact technical support',
    switchToNetwork: 'Switch to {chainName} Network',
  },
};

export default localeValues;
