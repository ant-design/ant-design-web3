import { useEffect, useRef, useState } from 'react';
import type { DiscoveredDevice } from '@ledgerhq/device-management-kit';
import type { Subscription } from 'rxjs';

import { getDMK } from './dmk';

export interface UseAvailableDevicesOptions {
  onDevicesChange?: (devices: DiscoveredDevice[]) => void;
  onError?: (error: Error) => void;
}

/**
 * Hook to listen to available Ledger devices
 */
export const useAvailableDevices = (options: UseAvailableDevicesOptions = {}) => {
  const { onDevicesChange, onError } = options;
  const [devices, setDevices] = useState<DiscoveredDevice[]>([]);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const subscriptionRef = useRef<Subscription | null>(null);

  useEffect(() => {
    const dmk = getDMK();

    // Subscribe to available devices
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
    }

    subscriptionRef.current = dmk.listenToAvailableDevices({}).subscribe({
      next: (deviceList) => {
        setDevices(deviceList);
        onDevicesChange?.(deviceList);
      },
      error: (error) => {
        console.error('Device monitoring error:', error);
        onError?.(error);
      },
    });

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
        subscriptionRef.current = null;
      }
    };
  }, [onDevicesChange, onError]);

  const discover = (): Promise<DiscoveredDevice> => {
    const dmk = getDMK();
    setIsDiscovering(true);

    return new Promise((resolve, reject) => {
      dmk.startDiscovering({}).subscribe({
        next: (device) => {
          setIsDiscovering(false);
          resolve(device);
        },
        error: (error) => {
          setIsDiscovering(false);
          reject(error);
        },
      });
    });
  };

  return {
    devices,
    discover,
    isDiscovering,
  };
};
