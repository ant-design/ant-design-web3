import { DeviceStatus } from '@ledgerhq/device-management-kit';
import type { Subscription } from 'rxjs';

import type { MonitorDeviceInfo } from '../types';
import { getDMK } from './dmk';

type Listener = (state: MonitorDeviceInfo) => void;

const INITIAL_STATE: MonitorDeviceInfo = {
  deviceStatus: DeviceStatus.NOT_CONNECTED,
};

/**
 * DMK 会话事件桥梁。
 *
 * 职责单一：订阅 DMK `getDeviceSessionState` 并将设备状态与元数据
 * （deviceStatus / currentApp / deviceModel / sessionId）推送给监听者。
 * 不管理业务 phase，不接受外部手动写入。
 */
export class USBStatusMonitor {
  private _state: MonitorDeviceInfo = { ...INITIAL_STATE };
  private _listeners = new Set<Listener>();
  private _subscription: Subscription | null = null;

  get state(): MonitorDeviceInfo {
    return this._state;
  }

  /**
   * Subscribe to DMK session state.
   * Pushes deviceStatus + device metadata to listeners.
   */
  watch(sessionId: string): void {
    this.unwatch();
    const dmk = getDMK();

    this._subscription = dmk.getDeviceSessionState({ sessionId }).subscribe({
      next: (raw) => {
        if (raw.deviceStatus === DeviceStatus.NOT_CONNECTED) {
          this._setState({
            deviceStatus: DeviceStatus.NOT_CONNECTED,
            sessionId: undefined,
            currentApp: undefined,
          });
          return;
        }

        const appName = (raw as any)?.currentApp?.name as string | undefined;
        const deviceModel = (raw as any)?.deviceModel?.model as string | undefined;

        this._setState({
          deviceStatus: raw.deviceStatus,
          sessionId,
          currentApp: appName ?? this._state.currentApp,
          deviceModel: deviceModel ?? this._state.deviceModel,
        });
      },
      error: () => {
        this._setState({ ...INITIAL_STATE });
      },
      complete: () => {
        this._setState({ ...INITIAL_STATE });
      },
    });
  }

  /**
   * Unsubscribe and reset to initial state (NOT_CONNECTED, no metadata).
   */
  unwatch(): void {
    this._subscription?.unsubscribe();
    this._subscription = null;
    this._setState({ ...INITIAL_STATE });
  }

  onChange(listener: Listener): () => void {
    this._listeners.add(listener);
    return () => {
      this._listeners.delete(listener);
    };
  }

  private _setState(next: MonitorDeviceInfo): void {
    this._state = next;
    this._listeners.forEach((l) => l(next));
  }
}
