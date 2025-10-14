import type { DeviceSessionId, DiscoveredDevice } from '@ledgerhq/device-management-kit';
import { DeviceStatus } from '@ledgerhq/device-management-kit';

import {
  useAppCommand,
  useAvailableDevices,
  useConnect,
  useDeviceStatus,
  useEthereumSigner,
} from '../ledger';
import type { LedgerAccount, LedgerWallet, WalletFactory } from '../types';

export const Ledger = (): WalletFactory => {
  return {
    name: 'Ledger',
    create: () => {
      let sessionId: DeviceSessionId | null = null;
      let currentAddress: string | null = null;
      let derivationPath = "44'/60'/0'/0/0";

      // These will be set up when the wallet is used in a React component
      let devicesRef: DiscoveredDevice[] = [];
      let connectFn: ((args: any) => Promise<DeviceSessionId>) | null = null;
      let disconnectFn: ((id?: DeviceSessionId) => Promise<void>) | null = null;
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
          console.log('Connecting to Ledger...');

          // Wait for device to be available
          if (devicesRef.length === 0) {
            throw new Error('No Ledger device found. Please connect your device.');
          }

          const device = devicesRef[0];

          if (connectFn) {
            sessionId = await connectFn({ device });

            // Wait for device to be unlocked and Ethereum app to be open
            let retries = 0;
            const maxRetries = 30; // 15 seconds total (500ms * 30)

            while (retries < maxRetries) {
              if (deviceStatusRef === DeviceStatus.CONNECTED && currentAppRef === 'Ethereum') {
                break;
              }

              if (
                deviceStatusRef === DeviceStatus.CONNECTED &&
                currentAppRef !== 'Ethereum' &&
                openAppFn
              ) {
                try {
                  await openAppFn('Ethereum');
                } catch (error) {
                  console.error('Failed to open Ethereum app:', error);
                }
              }

              await new Promise((resolve) => setTimeout(resolve, 500));
              retries++;
            }

            // Get address
            if (getAddressFn) {
              currentAddress = getAddressFn();

              if (currentAddress) {
                adapter.accounts = [
                  {
                    address: currentAddress,
                    path: derivationPath,
                  },
                ];
              }
            }
          }
        },

        disconnect: async () => {
          console.log('Disconnecting from Ledger...');

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
          console.log('Signing typed data:', typedData);

          if (!signTypedDataFn) {
            throw new Error('Sign typed data function not available');
          }

          const signature = await signTypedDataFn(typedData);
          return signature;
        },

        // Internal methods to set up hooks
        _setupHooks: (hooks: {
          devices: DiscoveredDevice[];
          connect: (args: any) => Promise<DeviceSessionId>;
          disconnect: (id?: DeviceSessionId) => Promise<void>;
          openApp: (appName: string) => Promise<any>;
          getAddress: () => string | null;
          signMessage: (message: string) => Promise<any>;
          signTypedData: (typedData: any) => Promise<any>;
          deviceStatus: DeviceStatus | null;
          currentApp: string | null;
        }) => {
          devicesRef = hooks.devices;
          connectFn = hooks.connect;
          disconnectFn = hooks.disconnect;
          openAppFn = hooks.openApp;
          getAddressFn = hooks.getAddress;
          signMessageFn = hooks.signMessage;
          signTypedDataFn = hooks.signTypedData;
          deviceStatusRef = hooks.deviceStatus;
          currentAppRef = hooks.currentApp;
        },

        // Hook to use in React components
        useLedgerHooks: () => {
          const { devices } = useAvailableDevices();
          const { sessionId: connectedSessionId, connect, disconnect } = useConnect();
          const { deviceStatus, currentApp } = useDeviceStatus({ sessionId: connectedSessionId });
          const { openApp } = useAppCommand({ sessionId: connectedSessionId });
          const { address, signMessage, signTypedData } = useEthereumSigner({
            sessionId: connectedSessionId,
            derivationPath,
          });

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
        icon: undefined, // TODO: Add Ledger icon
        group: 'Hardware',
        remark: 'Ledger Hardware Wallet',
      };
    },
  };
};
