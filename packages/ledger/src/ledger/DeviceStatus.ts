import type { DeviceStatus as DeviceStatusType } from '@ledgerhq/device-management-kit';
import type { Subscription } from 'rxjs';

import { getDMK } from './dmk';

class DeviceStatus {
  public deviceStatus: DeviceStatusType | null = null;
  public currentApp: string | null = null;

  private subscription: Subscription | null = null;

  public listenDeviceStatus = (sessionId: string) => {
    if (!sessionId) {
      this.deviceStatus = null;
      this.currentApp = null;
      return;
    }

    const dmk = getDMK();

    this.unsubscribe();

    this.subscription = dmk.getDeviceSessionState({ sessionId }).subscribe({
      next: (state) => {
        this.deviceStatus = state.deviceStatus;

        // Extract current app name if available
        const appName = (state as any)?.currentApp?.name;
        if (appName) {
          this.currentApp = appName;
        }
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  };

  public unsubscribe = () => {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  };
}

export default DeviceStatus;
