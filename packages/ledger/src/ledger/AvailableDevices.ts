import type { DiscoveredDevice } from '@ledgerhq/device-management-kit';
import type { Subscription } from 'rxjs';

import { getDMK } from './dmk';

class AvailableDevices {
  public devices: DiscoveredDevice[] = [];

  private subscription: Subscription | null = null;

  constructor() {
    this.listenToAvailableDevices();
  }

  private listenToAvailableDevices = () => {
    const dmk = getDMK();

    this.unsubscribe();

    this.subscription = dmk.listenToAvailableDevices({}).subscribe({
      next: (deviceList) => {
        this.devices = deviceList;
      },
      error: (error) => {
        console.error('Device monitoring error:', error);
      },
    });
  };

  public discover = (): Promise<DiscoveredDevice> => {
    const dmk = getDMK();

    return new Promise((resolve, reject) => {
      dmk.startDiscovering({}).subscribe({
        next: (device) => {
          this.devices = [...this.devices, device];
          resolve(device);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  };

  public unsubscribe = () => {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  };
}

export default AvailableDevices;
