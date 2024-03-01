import React from 'react';
import { Badge, Button } from 'antd';

import { connectModalContext } from '../context';
import type { Wallet } from '../interface';

const PluginTag: React.FC<{ wallet: Wallet }> = ({ wallet }) => {
  const [extensionInstalled, setExtensionInstalled] = React.useState<boolean>(false);
  const { getMessage, localeMessage } = React.useContext(connectModalContext);

  const judgeExtensionInstalled = async () => {
    const hasWalletReady = await wallet.hasWalletReady?.();
    if (hasWalletReady) {
      const hasInstalled = await wallet.hasExtensionInstalled?.();
      setExtensionInstalled(!!hasInstalled);
    }
  };

  React.useEffect(() => {
    judgeExtensionInstalled();
  }, [wallet]);

  return (
    wallet.hasExtensionInstalled && (
      <Badge dot={extensionInstalled} color="#52c41a">
        <Button size="small" disabled={!extensionInstalled}>
          {getMessage(localeMessage.walletPanelPlugin)}
        </Button>
      </Badge>
    )
  );
};

export default PluginTag;
