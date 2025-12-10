import { Wallet } from '@ant-design/web3-common';
import { LedgerFilled } from '@ant-design/web3-icons';
import type { DeviceSessionId } from '@ledgerhq/device-management-kit';
import { DeviceStatus as DeviceStatusType } from '@ledgerhq/device-management-kit';

import { LedgerAccount } from '../types';
import AppCommand from './useAppCommand';
import AvailableDevices from './useAvailableDevices';
import Connect from './useConnect';
import DeviceStatus from './useDeviceStatus';
import EthereumSigner from './useEthereumSigner';

export class Ledger {
  wallet: Wallet = {
    name: 'Ledger',
    icon: <LedgerFilled />,
    group: 'Hardware',
    remark: 'Ledger Hardware Wallet',
    hasWalletReady: async () => true,
  };

  public availableDevices: AvailableDevices;
  public connectInstance: Connect;
  public deviceStatus: DeviceStatus;
  public appCommand: AppCommand;
  public ethereumSigner: EthereumSigner;

  public derivationPath: string;

  public sessionId: DeviceSessionId | null = null;
  public accounts: LedgerAccount[] = [];

  constructor(name?: string, derivationPath?: string) {
    this.wallet.name = name || 'Ledger';
    this.derivationPath = derivationPath || "44'/60'/0'/0/0";

    this.availableDevices = new AvailableDevices();
    this.connectInstance = new Connect();
    this.deviceStatus = new DeviceStatus();
    this.appCommand = new AppCommand();
    this.ethereumSigner = new EthereumSigner();
  }

  public connect = async () => {
    if (this.availableDevices.devices.length === 0) {
      try {
        await this.availableDevices.discover();
      } catch (error) {
        throw new Error('Failed to discover device');
      }
      if (this.availableDevices.devices.length === 0) {
        throw new Error('No Ledger device found. Please connect your device.');
      }
    }

    console.log('availableDevices', this.availableDevices.devices);

    // 暂时取第 1 个设备
    const device = this.availableDevices.devices[0];
    // 连接设备
    this.sessionId = await this.connectInstance.connect({ device });

    if (!this.sessionId) {
      throw new Error('Cannot connect to Ledger device');
    }

    // 轮询 15 次，每次间隔 200ms 检查是否在 Ethereum app
    this.deviceStatus.listenDeviceStatus(this.sessionId);
    let appFound = false;
    for (let i = 0; i < 15; i++) {
      if (
        this.deviceStatus.currentApp === 'Ethereum' &&
        this.deviceStatus.deviceStatus === DeviceStatusType.CONNECTED
      ) {
        appFound = true;
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    this.deviceStatus.unsubscribe();
    if (!appFound && this.deviceStatus.currentApp !== 'Ethereum') {
      throw new Error(
        "Failed to connect to Ledger device's Ethereum app. Please open the Ethereum app manually and try again.",
      );
    }

    await this.appCommand.openApp(this.sessionId, 'Ethereum');

    const address = await this.ethereumSigner.getAddress(this.sessionId, this.derivationPath);

    this.accounts = [
      {
        address,
        path: this.derivationPath,
      },
    ];
  };

  public disconnect = async () => {
    this.ethereumSigner.unsubscribe();
    this.appCommand.closeApp();
    this.deviceStatus.unsubscribe();
    this.connectInstance.disconnect();
    this.availableDevices.unsubscribe();
    this.accounts = [];
  };

  public signMessage = async (message: string) => {
    if (!this.sessionId) {
      throw new Error('No session ID available');
    }
    return this.ethereumSigner.signMessage(this.sessionId, this.derivationPath, message);
  };

  public signTypedData = async (typedData: any) => {
    if (!this.sessionId) {
      throw new Error('No session ID available');
    }
    return this.ethereumSigner.signTypedData(this.sessionId, this.derivationPath, typedData);
  };
}
