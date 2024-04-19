import React, { useCallback } from 'react';
import { Badge, Button } from 'antd';

import { connectModalContext } from '../context';
import type { Wallet } from '../interface';

const PluginTag: React.FC<{ wallet: Wallet; hoveredWallet?: Wallet }> = ({ wallet }) => {
  const [extensionInstalled, setExtensionInstalled] = React.useState<boolean>(false);
  const { getMessage, localeMessage, prefixCls } = React.useContext(connectModalContext);

  const judgeExtensionInstalled = useCallback(async () => {
    const hasWalletReady = await wallet.hasWalletReady?.();
    if (hasWalletReady) {
      const hasInstalled = await wallet.hasExtensionInstalled?.();
      setExtensionInstalled(!!hasInstalled);
    }
  }, [wallet]);

  React.useEffect(() => {
    judgeExtensionInstalled();
  }, [judgeExtensionInstalled]);

  return wallet.hasExtensionInstalled ? (
    <Badge dot={extensionInstalled} color="#52c41a">
      <Button className={`${prefixCls}-plugin-tag`} size="small" disabled={!extensionInstalled}>
        {getMessage(localeMessage.walletPanelPlugin)}
      </Button>
    </Badge>
  ) : null;
};

export default PluginTag;
