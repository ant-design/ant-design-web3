/* eslint-disable no-useless-catch */

import type { DeviceSessionId } from '@ledgerhq/device-management-kit';
import { CloseAppCommand, OpenAppCommand } from '@ledgerhq/device-management-kit';

import { getDMK } from './dmk';

class AppCommand {
  private sessionId: DeviceSessionId | null = null;

  public openApp = async (sessionId: string, appName: string): Promise<any> => {
    if (!sessionId) {
      throw new Error('No session ID available');
    }

    this.closeApp();
    this.sessionId = sessionId;

    const dmk = getDMK();

    try {
      const command = new OpenAppCommand({ appName });
      const result = await dmk.sendCommand({ sessionId, command });
      return result;
    } catch (error) {
      throw error;
    }
  };

  public closeApp = async () => {
    if (!this.sessionId) {
      return;
    }

    const dmk = getDMK();

    try {
      const command = new CloseAppCommand();
      await dmk.sendCommand({ sessionId: this.sessionId, command });
    } catch (error) {
      throw error;
    }
  };
}

export default AppCommand;
