import type { DeviceStatus as DeviceStatusType } from '@ledgerhq/device-management-kit';
import type { Subscription } from 'rxjs';

import { getDMK } from './dmk';

/**
 * 设备状态监听器。
 * 通过 DMK 的 getDeviceSessionState 订阅 Ledger 设备的连接状态和当前运行的 App 信息。
 * 当订阅出错时安全地重置状态，不再抛出未捕获异常。
 */
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
      error: () => {
        this.deviceStatus = null;
        this.currentApp = null;
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
