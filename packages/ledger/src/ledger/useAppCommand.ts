import { useCallback, useState } from 'react';
import type { CommandResult, DeviceSessionId } from '@ledgerhq/device-management-kit';
import { CloseAppCommand, OpenAppCommand } from '@ledgerhq/device-management-kit';

import { getDMK } from './dmk';

export interface UseAppCommandOptions {
  sessionId?: DeviceSessionId | null;
}

/**
 * Hook to manage Ledger device app commands
 */
export const useAppCommand = (options: UseAppCommandOptions = {}) => {
  const { sessionId } = options;
  const [isOpeningApp, setIsOpeningApp] = useState(false);
  const [isClosingApp, setIsClosingApp] = useState(false);

  const openApp = useCallback(
    async (appName: string, abortTimeout?: number): Promise<CommandResult<any, any>> => {
      if (!sessionId) {
        throw new Error('No session ID available');
      }

      const dmk = getDMK();
      setIsOpeningApp(true);

      try {
        const command = new OpenAppCommand({ appName });
        const result = await dmk.sendCommand({ sessionId, command, abortTimeout });
        setIsOpeningApp(false);
        return result;
      } catch (error) {
        setIsOpeningApp(false);
        throw error;
      }
    },
    [sessionId],
  );

  const closeApp = useCallback(async (): Promise<CommandResult<any, any>> => {
    if (!sessionId) {
      throw new Error('No session ID available');
    }

    const dmk = getDMK();
    setIsClosingApp(true);

    try {
      const command = new CloseAppCommand();
      const result = await dmk.sendCommand({ sessionId, command });
      setIsClosingApp(false);
      return result;
    } catch (error) {
      setIsClosingApp(false);
      throw error;
    }
  }, [sessionId]);

  return {
    openApp,
    closeApp,
    isOpeningApp,
    isClosingApp,
  };
};
