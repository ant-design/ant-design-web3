import { Wallet, metadata_WalletConnect } from '@ant-design/web3-common';
import { Connector } from 'wagmi';

export function getWalletByConnector(connector: Connector): Wallet {
  const getQrCode = async () => {
    const provider = await connector.getProvider();
    return new Promise<{ uri: string }>((resolve) => {
      provider.on('display_uri', (uri: string) => {
        resolve({
          uri,
        });
      });
    });
  };
  return {
    ...metadata_WalletConnect,
    hasBrowserExtensionInstalled: async () => {
      return false;
    },
    getQrCode: connector.options.showQrModal === false ? getQrCode : undefined,
  };
}
