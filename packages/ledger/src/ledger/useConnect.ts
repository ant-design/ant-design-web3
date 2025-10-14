import { useCallback, useEffect, useState } from 'react';
import type { ConnectUseCaseArgs, DeviceSessionId } from '@ledgerhq/device-management-kit';

import { getDMK } from './dmk';

/**
 * Hook to manage Ledger device connection
 */
export const useConnect = () => {
  const [sessionId, setSessionId] = useState<DeviceSessionId | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const connect = useCallback(async (args: ConnectUseCaseArgs): Promise<DeviceSessionId> => {
    const dmk = getDMK();
    setIsConnecting(true);
    setError(null);

    try {
      const newSessionId = await dmk.connect(args);
      setSessionId(newSessionId);
      setIsConnecting(false);
      return newSessionId;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Connection failed');
      setError(error);
      setIsConnecting(false);
      throw error;
    }
  }, []);

  const disconnect = useCallback(
    async (sessionIdToDisconnect?: DeviceSessionId) => {
      const dmk = getDMK();
      const targetSessionId = sessionIdToDisconnect || sessionId;

      if (!targetSessionId) {
        return;
      }

      setIsDisconnecting(true);
      setError(null);

      try {
        await dmk.disconnect({ sessionId: targetSessionId });
        setSessionId(null);
        setIsDisconnecting(false);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Disconnection failed');
        setError(error);
        setIsDisconnecting(false);
        throw error;
      }
    },
    [sessionId],
  );

  return {
    sessionId,
    connect,
    disconnect,
    isConnecting,
    isDisconnecting,
    error,
  };
};
