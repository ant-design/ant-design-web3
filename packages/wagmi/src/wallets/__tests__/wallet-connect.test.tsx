import { WalletConnect } from '@ant-design/web3-wagmi';
import { describe, expect, it } from 'vitest';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

describe('WalletConnect', async () => {
  it('name', async () => {
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        walletConnect({
          showQrModal: false,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        }),
      ],
    });
    const wagmiWallet = config.connectors[0];
    const wallet = WalletConnect().create();
    expect(wallet.name).toBe('WalletConnect');
    expect(wallet.name).toBe(wagmiWallet.name);
    expect(wallet.getQrCode).toBeTruthy();
  });

  it('always return true for hasWalletReady', async () => {
    const wallet = WalletConnect().create();
    const install = await wallet.hasWalletReady?.();
    expect(install).toBe(true);
  });

  it('custom metadata', async () => {
    const wallet = WalletConnect({
      group: 'TestGroup',
    }).create();
    expect(wallet.group).toBe('TestGroup');
  });

  it('useWalletConnectOfficialModal', async () => {
    const config = createConfig({
      chains: [mainnet],
      transports: {
        [mainnet.id]: http(),
      },
      connectors: [
        walletConnect({
          showQrModal: true,
          projectId: 'YOUR_WALLET_CONNET_PROJECT_ID',
        }),
      ],
    });
    const wagmiWallet = config.connectors[0];
    const wallet = WalletConnect({
      useWalletConnectOfficialModal: true,
    }).create();
    expect(wallet.getQrCode).toBe(undefined);
  });
});
