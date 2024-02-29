import React from 'react';
import { Badge, Button } from 'antd';

import { connectModalContext } from '../context';
import type { Wallet } from '../interface';

const PluginTag: React.FC<{ wallet: Wallet }> = ({ wallet }) => {
  const [hasExtension, setHasExtension] = React.useState<boolean>(false);
  const [extensionInstalled, setExtensionInstalled] = React.useState<boolean>(false);

  const { getMessage, localeMessage } = React.useContext(connectModalContext);

  React.useEffect(() => {
    if (wallet.hasExtensionInstalled) {
      setHasExtension(true);
      wallet.hasWalletReady?.().then((res) => {
        if (res) {
          wallet.hasExtensionInstalled?.().then((result) => {
            setExtensionInstalled(result);
          });
        }
      });
    }
  }, [wallet]);

  return hasExtension ? (
    <Badge dot={extensionInstalled} color="#52c41a">
      <Button size="small">{getMessage(localeMessage.walletPanelPluginTitle)}</Button>
    </Badge>
  ) : null;
};

export default PluginTag;
