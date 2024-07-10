import { metadata_MobileConnect } from '@ant-design/web3-assets';
import { Wallet } from '@ant-design/web3-common';
import { useConnectors } from 'wagmi';

export type UseWalletsResult = Wallet[];

export const useWallets = (): UseWalletsResult => {
  const connectors = useConnectors();
  const walletConnect = connectors.find((current) => current.id === 'walletConnect');
  const getQrCode = async () =>
    new Promise<{ uri: string }>((resolve) =>
      walletConnect?.emitter.on('message', ({ type, data }) => {
        if (type === 'display_uri') resolve({ uri: data as string });
      }),
    );
  const wallets = connectors.map<Wallet>((connector) => {
    // For wallet-connect protocol
    if (connector === walletConnect) {
      return {
        ...metadata_MobileConnect,
        key: walletConnect?.uid,
        getWagmiConnector: () => walletConnect,
        hasWalletReady: () => true,
        getQrCode: walletConnect ? getQrCode : undefined,
      };
    }

    // For eip6963 standard wallets
    return {
      icon: connector?.icon,
      name: connector!.name,
      remark: `Wallet ${connector?.name} detected`,
      key: connector?.uid,
      hasWalletReady: () => !!connector.uid,
      hasExtensionInstalled: () => true,
      getQrCode: walletConnect ? getQrCode : undefined,
      group: 'Installed',
    };
  });

  return wallets;
};
