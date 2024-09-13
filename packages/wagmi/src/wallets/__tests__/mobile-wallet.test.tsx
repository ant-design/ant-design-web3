import { MobileWallet } from '@ant-design/web3-wagmi';
import { describe, expect, it } from 'vitest';
import type { Connector } from 'wagmi';

describe('MobileWallet', () => {
  it('name', async () => {
    const wallet = MobileWallet().create();
    expect(wallet.name).toBe('Scan QR Code');
    expect(wallet.getQrCode).toBeTruthy();
  });

  it('always return true for hasWalletReady', async () => {
    const wallet = MobileWallet().create();
    const install = await wallet.hasWalletReady?.();
    expect(install).toBe(true);
  });

  it('custom metadata', async () => {
    const wallet = MobileWallet({
      group: 'TestGroup',
    }).create();
    expect(wallet.group).toBe('TestGroup');
  });

  it('useWalletConnectOfficialModal', async () => {
    const wallet = MobileWallet({
      useWalletConnectOfficialModal: true,
    }).create();
    expect(wallet.getQrCode).toBeTruthy();
    expect(wallet.customQrCodePanel).toBeTruthy();
  });

  it('get qr code', async () => {
    let eventFired = false;
    const testConnector = {
      getProvider: async () => {
        return {
          on: (_: string, callback: (uri: string) => void) => {
            eventFired = true;
            setTimeout(() => {
              callback('https://web3.ant.design');
            }, 100);
          },
        };
      },
    } as Connector;
    const wallet = MobileWallet().create([testConnector]);
    const qrCode = await wallet.getQrCode?.();
    expect(qrCode?.uri).toBe('https://web3.ant.design');
    const qrCode2 = await wallet.getQrCode?.();
    expect(qrCode2?.uri).toBe('https://web3.ant.design');
  });
});
