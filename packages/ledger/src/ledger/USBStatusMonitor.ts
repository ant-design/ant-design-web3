import { DeviceStatus as DeviceStatusType } from '@ledgerhq/device-management-kit';
import type { Subscription } from 'rxjs';

import type { USBDeviceState } from '../types';
import { getDMK } from './dmk';

type Listener = (state: USBDeviceState) => void;

const INITIAL_STATE: USBDeviceState = { phase: 'idle' };

export class USBStatusMonitor {
  private _state: USBDeviceState = { ...INITIAL_STATE };
  private _listeners = new Set<Listener>();
  private _subscription: Subscription | null = null;

  get state(): USBDeviceState {
    return this._state;
  }

  /**
   * Subscribe to DMK session state and map it to USBDeviceState.
   * Automatically detects device disconnect.
   */
  watch(sessionId: string): void {
    this.unwatch();
    const dmk = getDMK();

    this._subscription = dmk.getDeviceSessionState({ sessionId }).subscribe({
      next: (raw) => {
        if (raw.deviceStatus === DeviceStatusType.NOT_CONNECTED) {
          this._setState({ phase: 'disconnected', sessionId: undefined, currentApp: undefined });
          return;
        }

        const appName = (raw as any)?.currentApp?.name as string | undefined;
        const deviceModel = (raw as any)?.deviceModel?.model as string | undefined;

        this._setState({
          phase: 'connected',
          sessionId,
          currentApp: appName ?? this._state.currentApp,
          deviceModel: deviceModel ?? this._state.deviceModel,
        });
      },
      error: () => {
        this._setState({ phase: 'disconnected', sessionId: undefined });
      },
      complete: () => {
        this._setState({ phase: 'disconnected', sessionId: undefined });
      },
    });
  }

  unwatch(): void {
    this._subscription?.unsubscribe();
    this._subscription = null;
  }

  /**
   * Allow external callers (e.g. USBConnection) to push state transitions
   * such as `connecting` or `idle`.
   */
  updateState(partial: Partial<USBDeviceState>): void {
    this._setState({ ...this._state, ...partial });
  }

  onChange(listener: Listener): () => void {
    this._listeners.add(listener);
    return () => {
      this._listeners.delete(listener);
    };
  }

  private _setState(next: USBDeviceState): void {
    this._state = next;
    this._listeners.forEach((l) => l(next));
  }
}
