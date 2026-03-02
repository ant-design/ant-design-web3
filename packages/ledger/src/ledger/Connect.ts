import type { ConnectUseCaseArgs, DeviceSessionId } from '@ledgerhq/device-management-kit';

import { getDMK } from './dmk';

class Connect {
  private sessionId: DeviceSessionId | null = null;

  public connect = async (args: ConnectUseCaseArgs): Promise<DeviceSessionId> => {
    const dmk = getDMK();

    await this.disconnect();

    try {
      this.sessionId = await dmk.connect(args);
      return this.sessionId;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Connection failed');
      throw error;
    }
  };

  public disconnect = async () => {
    const dmk = getDMK();
    if (!this.sessionId) {
      return;
    }
    try {
      await dmk.disconnect({ sessionId: this.sessionId });
      this.sessionId = null;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Disconnection failed');
      throw error;
    }
  };
}

export default Connect;
