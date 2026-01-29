import { Wallet } from '@ant-design/web3-common';
import { LedgerFilled } from '@ant-design/web3-icons';
import type { DeviceSessionId } from '@ledgerhq/device-management-kit';
import { DeviceStatus as DeviceStatusType } from '@ledgerhq/device-management-kit';

import { LedgerAccount } from '../types';
import AppCommand from './AppCommand';
import AvailableDevices from './AvailableDevices';
import Connect from './Connect';
import DeviceStatus from './DeviceStatus';
import { LedgerError } from './errors';
import EthereumSigner from './EthereumSigner';

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

  public connect = async (returnWhenNoDevice?: boolean) => {
    if (this.availableDevices.devices.length === 0) {
      if (returnWhenNoDevice) {
        throw new LedgerError('NO_DEVICE', 'No available devices to connect');
      }
      try {
        await this.availableDevices.discover();
      } catch {
        throw new LedgerError('NO_DEVICE', 'Failed to discover device');
      }
      if (this.availableDevices.devices.length === 0) {
        throw new LedgerError('NO_DEVICE', 'No Ledger device found. Please connect your device.');
      }
    }

    try {
      // 暂时取第 1 个设备
      if (!this.sessionId) {
        const device = this.availableDevices.devices[0];
        this.sessionId = await this.connectInstance.connect({ device });
      }
    } catch {
      throw new LedgerError('CONNECTION_FAILED', 'Cannot connect to Ledger device');
    }

    if (!this.sessionId) {
      throw new LedgerError('CONNECTION_FAILED', 'Cannot connect to Ledger device');
    }

    // 轮询 15 次，每次间隔 200ms 检查是否在 Ethereum app
    let appFound = false;
    try {
      this.deviceStatus.listenDeviceStatus(this.sessionId);
      for (let i = 0; i < 15; i++) {
        if (
          this.deviceStatus.currentApp === 'Ethereum' &&
          this.deviceStatus.deviceStatus === DeviceStatusType.CONNECTED
        ) {
          appFound = true;
          break;
        }
        await new Promise((resolve) => {
          setTimeout(resolve, 200);
        });
      }
    } catch {
      throw new LedgerError(
        'ETHEREUM_APP_NOT_OPEN',
        "Failed to connect to Ledger device's Ethereum app. Please open the Ethereum app manually and try again.",
      );
    } finally {
      this.deviceStatus.unsubscribe();
    }

    if (!appFound && this.deviceStatus.currentApp !== 'Ethereum') {
      throw new LedgerError(
        'ETHEREUM_APP_NOT_OPEN',
        "Failed to connect to Ledger device's Ethereum app. Please open the Ethereum app manually and try again.",
      );
    }

    try {
      // await this.appCommand.openApp(this.sessionId, 'Ethereum');

      const address = await this.ethereumSigner.getAddress(this.sessionId, this.derivationPath);

      this.accounts = [
        {
          address,
          path: this.derivationPath,
        },
      ];
    } catch {
      throw new LedgerError('CANNOT_GET_ADDRESS', 'Failed to get address');
    }
  };

  public disconnect = async () => {
    try {
      this.ethereumSigner.unsubscribe();
      this.appCommand.closeApp();
      this.deviceStatus.unsubscribe();
      this.connectInstance.disconnect();
      this.availableDevices.unsubscribe();
      this.accounts = [];
      this.sessionId = null;
    } catch {}
  };

  public signMessage = async (message: string) => {
    if (!this.sessionId) {
      throw new LedgerError(
        'NO_SESSION',
        'No session ID available. Please connect to Ledger device first.',
      );
    }
    try {
      return await this.ethereumSigner.signMessage(this.sessionId, this.derivationPath, message);
    } catch {
      throw new LedgerError('SIGN_MESSAGE_FAILED', 'Failed to sign message');
    }
  };

  public signTypedData = async (typedData: any) => {
    if (!this.sessionId) {
      throw new LedgerError(
        'NO_SESSION',
        'No session ID available. Please connect to Ledger device first.',
      );
    }
    try {
      return await this.ethereumSigner.signTypedData(
        this.sessionId,
        this.derivationPath,
        typedData,
      );
    } catch {
      throw new LedgerError('SIGN_TYPED_DATA_FAILED', 'Failed to sign typed data');
    }
  };
}
