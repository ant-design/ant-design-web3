import { LedgerFilled } from '@ant-design/web3-icons';
import type { DeviceSessionId, DiscoveredDevice } from '@ledgerhq/device-management-kit';
import { DeviceStatus } from '@ledgerhq/device-management-kit';
import { message } from 'antd';

import {
  useAppCommand,
  useAvailableDevices,
  useConnect,
  useDeviceStatus,
  useEthereumSigner,
} from '../ledger';
import type { LedgerAccount, LedgerHooks, LedgerWallet, WalletFactory } from '../types';

export const Ledger = (options?: { derivationPath?: string }): WalletFactory => {
  return {
    name: 'Ledger',
    create: () => {
      let sessionId: DeviceSessionId | null = null;
      let currentAddress: string | null = null;
      let derivationPath = options?.derivationPath || "44'/60'/0'/0/0";

      // These will be set up when the wallet is used in a React component
      let devicesRef: DiscoveredDevice[] = [];
      let connectFn: ((args: any) => Promise<DeviceSessionId>) | null = null;
      let disconnectFn: ((id?: DeviceSessionId) => Promise<void>) | null = null;
      let discoverFn: (() => Promise<DiscoveredDevice>) | null = null;
      let openAppFn: ((appName: string) => Promise<any>) | null = null;
      let getAddressFn: (() => string | null) | null = null;
      let signMessageFn: ((message: string) => Promise<any>) | null = null;
      let signTypedDataFn: ((typedData: any) => Promise<any>) | null = null;
      let deviceStatusRef: DeviceStatus | null = null;
      let currentAppRef: string | null = null;

      const adapter: LedgerWallet = {
        name: 'Ledger',
        accounts: [] as LedgerAccount[],

        connect: async () => {
          if (!discoverFn) return;
          // discover devices when no devices found
          if (devicesRef.length === 0) {
            try {
              devicesRef = [await discoverFn()];
            } catch (error) {
              message.error('Failed to discover device');
              return;
            }
            if (devicesRef.length === 0) {
              message.error('No Ledger device found. Please connect your device.');
              return;
            }
          }

          if (!connectFn) return;
          // 暂时取第 1 个设备
          const device = devicesRef[0];
          // 连接设备
          sessionId = await connectFn({ device });

          // 轮询 15 次，每次间隔 200ms 检查是否在 Ethereum app
          let appFound = false;
          for (let i = 0; i < 15; i++) {
            if (currentAppRef === 'Ethereum' && deviceStatusRef === DeviceStatus.CONNECTED) {
              appFound = true;
              break;
            }
            await new Promise((resolve) => setTimeout(resolve, 200));
          }
          if (!appFound && currentAppRef !== 'Ethereum') {
            message.error(
              "Failed to connect to Ledger device's Ethereum app. Please open the Ethereum app manually and try again.",
            );
            return;
          }

          if (!openAppFn) return;
          await openAppFn('Ethereum');

          if (!getAddressFn) return;
          currentAddress = getAddressFn();

          if (currentAddress) {
            adapter.accounts = [
              {
                address: currentAddress,
                path: derivationPath,
              },
            ];
          }
        },

        disconnect: async () => {
          if (disconnectFn && sessionId) {
            await disconnectFn(sessionId);
            sessionId = null;
            currentAddress = null;
            adapter.accounts = [];
          }
        },

        signMessage: async (message: string) => {
          console.log('Signing message:', message);

          if (!signMessageFn) {
            throw new Error('Sign message function not available');
          }

          const signature = await signMessageFn(message);
          return signature;
        },

        signTypedData: async (typedData: any) => {
          if (!signTypedDataFn) {
            throw new Error('Sign typed data function not available');
          }

          const signature = await signTypedDataFn(typedData);
          return signature;
        },

        // Hook to use in React components
        useLedgerHooks: (): LedgerHooks => {
          const { devices, discover } = useAvailableDevices();
          const { sessionId: connectedSessionId, connect, disconnect } = useConnect();
          const { deviceStatus, currentApp } = useDeviceStatus({ sessionId: connectedSessionId });
          const { openApp } = useAppCommand({ sessionId: connectedSessionId });
          const { address, signMessage, signTypedData } = useEthereumSigner({
            sessionId: connectedSessionId,
            derivationPath,
          });

          devicesRef = devices;
          discoverFn = discover;
          connectFn = connect;
          disconnectFn = disconnect;
          openAppFn = openApp;
          getAddressFn = () => address;
          signMessageFn = signMessage;
          signTypedDataFn = signTypedData;
          deviceStatusRef = deviceStatus;
          currentAppRef = currentApp;

          return {
            devices,
            connect,
            disconnect,
            openApp,
            getAddress: () => address,
            signMessage,
            signTypedData,
            deviceStatus,
            currentApp,
          };
        },
      };

      return {
        name: 'Ledger',
        adapter,
        icon: <LedgerFilled />,
        group: 'Hardware',
        remark: 'Ledger Hardware Wallet',
      };
    },
  };
};
