import { ChainType, type WalletMetadata } from '@ant-design/web3-common';
import { ImTokenColorful } from '@ant-design/web3-icons';

export const metadata_imToken: WalletMetadata = {
  icon: <ImTokenColorful />,
  name: 'imToken',
  remark: 'Connect with mobile APP',
  app: {
    link: 'https://token.im/download',
  },
  transferQRCodeFormatter: (params) => {
    const { toAddress, chainId, amount, tokenAddress = '', decimal } = params;
    if (tokenAddress) {
      return `ethereum:${toAddress}@${chainId}?contractAddress=${tokenAddress}&decimal=${decimal}&value=${amount}`;
    }
    return `ethereum:${toAddress}@${chainId}?decimal=18&value=${amount}`;
  },
  supportChainTypes: [ChainType.EVM],
};
