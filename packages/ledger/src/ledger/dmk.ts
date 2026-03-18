import {
  ConsoleLogger,
  DeviceManagementKitBuilder,
  type DeviceManagementKit,
} from '@ledgerhq/device-management-kit';
import { webHidTransportFactory } from '@ledgerhq/device-transport-kit-web-hid';

let dmkInstance: DeviceManagementKit | null = null;

/**
 * Get or create the DeviceManagementKit instance.
 * Using singleton pattern to ensure only one instance exists.
 *
 * @param logger 可选。传入自定义 logger 实例控制 DMK 日志输出；不传则使用 ConsoleLogger。生产环境可传入 no-op 实现以禁用日志。
 */
export const getDMK = (
  logger?: Parameters<DeviceManagementKitBuilder['addLogger']>[0] | null,
): DeviceManagementKit => {
  if (!dmkInstance) {
    const kit = new DeviceManagementKitBuilder().addTransport(webHidTransportFactory);
    if (logger !== undefined && logger !== null) {
      kit.addLogger(logger);
    } else {
      kit.addLogger(new ConsoleLogger());
    }
    dmkInstance = kit.build();
  }
  return dmkInstance;
};

/**
 * Reset the DMK instance (useful for testing)
 */
export const resetDMK = (): void => {
  dmkInstance = null;
};
