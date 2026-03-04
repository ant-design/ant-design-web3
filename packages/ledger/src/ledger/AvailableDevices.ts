import type { DiscoveredDevice } from '@ledgerhq/device-management-kit';
import type { Subscription } from 'rxjs';

import { getDMK } from './dmk';

/**
 * 可用 Ledger 设备管理器。
 *
 * - 通过 listenToAvailableDevices 持续监听所有已知 USB 设备（完整列表由 DMK 维护）。
 * - discover() 触发浏览器 WebUSB 设备选择对话框，每次让用户选择一台新设备；
 *   发现的设备会同步出现在 listenToAvailableDevices 的列表中。
 * - 所有订阅均有对应的 unsubscribe 管理，避免内存泄漏。
 */
class AvailableDevices {
  public devices: DiscoveredDevice[] = [];

  private subscription: Subscription | null = null;
  private discoverSubscription: Subscription | null = null;

  constructor() {
    this.startListening();
  }

  /**
   * 确保 listenToAvailableDevices 订阅存活。
   * 如果之前被意外 complete/error，重新建立订阅。
   */
  public ensureSubscribed = () => {
    if (!this.subscription || this.subscription.closed) {
      this.startListening();
    }
  };

  private startListening = () => {
    const dmk = getDMK();

    this.stopListening();

    this.subscription = dmk.listenToAvailableDevices({}).subscribe({
      next: (deviceList) => {
        this.devices = deviceList;
      },
      error: () => {
        this.subscription = null;
      },
      complete: () => {
        this.subscription = null;
      },
    });
  };

  public discover = (): Promise<DiscoveredDevice> => {
    const dmk = getDMK();

    this.stopDiscovering();

    return new Promise((resolve, reject) => {
      let resolved = false;
      this.discoverSubscription = dmk.startDiscovering({}).subscribe({
        next: (device) => {
          resolved = true;
          resolve(device);
          this.stopDiscovering();
        },
        error: (error) => {
          this.discoverSubscription = null;
          reject(error);
        },
        complete: () => {
          this.discoverSubscription = null;
          if (!resolved) {
            reject(new Error('No device selected. User may have cancelled the device picker.'));
          }
        },
      });
    });
  };

  private stopDiscovering = () => {
    if (this.discoverSubscription) {
      this.discoverSubscription.unsubscribe();
      this.discoverSubscription = null;
    }
  };

  public stopListening = () => {
    this.stopDiscovering();
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  };
}

export default AvailableDevices;
