import type { DeviceSessionId } from '@ledgerhq/device-management-kit';
import { CloseAppCommand } from '@ledgerhq/device-management-kit';

import { getDMK } from './dmk';

/**
 * Ledger 设备 App 命令管理。
 * 负责关闭设备上当前运行的 App（如 Ethereum App），供断开连接时使用。
 * sessionId 由外部通过 setSessionId 注入。
 */
class AppCommand {
  private sessionId: DeviceSessionId | null = null;

  public closeApp = async () => {
    if (!this.sessionId) {
      return;
    }

    const dmk = getDMK();
    const command = new CloseAppCommand();
    await dmk.sendCommand({ sessionId: this.sessionId, command });
  };

  public setSessionId = (sessionId: DeviceSessionId | null) => {
    this.sessionId = sessionId;
  };
}

export default AppCommand;
