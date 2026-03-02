import type { DiscoveredDevice } from '@ledgerhq/device-management-kit';
import type { Subscription } from 'rxjs';

import { getDMK } from './dmk';

class AvailableDevices {
  public devices: DiscoveredDevice[] = [];

  private subscription: Subscription | null = null;

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
      error: (error) => {
        console.error('Device monitoring error:', error);
        this.subscription = null;
      },
      complete: () => {
        this.subscription = null;
      },
    });
  };

  public discover = (): Promise<DiscoveredDevice> => {
    const dmk = getDMK();

    return new Promise((resolve, reject) => {
      dmk.startDiscovering({}).subscribe({
        next: (device) => {
          this.devices = [device];
          resolve(device);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  };

  public stopListening = () => {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  };
}

export default AvailableDevices;
