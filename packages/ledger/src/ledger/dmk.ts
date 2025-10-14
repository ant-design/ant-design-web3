import {
  ConsoleLogger,
  DeviceManagementKitBuilder,
  type DeviceManagementKit,
} from '@ledgerhq/device-management-kit';
import { webHidTransportFactory } from '@ledgerhq/device-transport-kit-web-hid';

let dmkInstance: DeviceManagementKit | null = null;

/**
 * Get or create the DeviceManagementKit instance
 * Using singleton pattern to ensure only one instance exists
 */
export const getDMK = (): DeviceManagementKit => {
  if (!dmkInstance) {
    dmkInstance = new DeviceManagementKitBuilder()
      .addLogger(new ConsoleLogger())
      .addTransport(webHidTransportFactory)
      .build();
  }
  return dmkInstance;
};

/**
 * Reset the DMK instance (useful for testing)
 */
export const resetDMK = (): void => {
  dmkInstance = null;
};
