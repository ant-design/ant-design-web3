import { useEffect, useRef, useState } from 'react';
import type {
  DeviceSessionState,
  DeviceStatus as DeviceStatusType,
} from '@ledgerhq/device-management-kit';
import type { Subscription } from 'rxjs';

import { getDMK } from './dmk';

export interface UseDeviceStatusOptions {
  sessionId?: string | null;
  onStateChange?: (state: DeviceSessionState) => void;
  onError?: (error: Error) => void;
}

/**
 * Hook to monitor Ledger device status
 */
export const useDeviceStatus = (options: UseDeviceStatusOptions = {}) => {
  const { sessionId, onStateChange, onError } = options;
  const [deviceStatus, setDeviceStatus] = useState<DeviceStatusType | null>(null);
  const [currentApp, setCurrentApp] = useState<string | null>(null);
  const subscriptionRef = useRef<Subscription | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setDeviceStatus(null);
      setCurrentApp(null);
      return;
    }

    const dmk = getDMK();

    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
    }

    subscriptionRef.current = dmk.getDeviceSessionState({ sessionId }).subscribe({
      next: (state) => {
        setDeviceStatus(state.deviceStatus);

        // Extract current app name if available
        const appName = (state as any)?.currentApp?.name;
        if (appName) {
          setCurrentApp(appName);
        }

        onStateChange?.(state);
      },
      error: (error) => {
        console.error('Device status monitoring error:', error);
        onError?.(error);
      },
    });

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
        subscriptionRef.current = null;
      }
    };
  }, [sessionId, onStateChange, onError]);

  return {
    deviceStatus,
    currentApp,
  };
};

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
