import React, { useState } from 'react';
import { QrcodeOutlined } from '@ant-design/icons';
import { Button, List, Space, Typography } from 'antd';
import classNames from 'classnames';
import mobile from 'is-mobile';

import type { Wallet } from '../interface';
import PluginTag from './PluginTag';
import WalletIcon from './WalletIcon';

export interface WalletItemProps {
  wallet: Wallet;
  prefixCls: string;
  selectedWallet?: Wallet;
  onSelect: (wallet: Wallet) => void;
  onQrCodeSelect: (wallet: Wallet) => void;
  showQrPlaceholder?: boolean;
  disabled?: boolean;
}

const WalletItem: React.FC<WalletItemProps> = ({
  wallet,
  prefixCls,
  selectedWallet,
  onSelect,
  onQrCodeSelect,
  showQrPlaceholder,
  disabled = false,
}) => {
  const useUniversalLink: boolean = !!(mobile() && wallet.deeplink);
  const [showPluginTag, setShowPluginTag] = useState(!useUniversalLink);
  // Check if the wallet is ready (installed) to determine whether to show the plugin tag
  React.useEffect(() => {
    const checkWalletInstalled = async () => {
      const isWalletInstalled = await wallet.hasExtensionInstalled?.();
      const hidePluginTag = !isWalletInstalled && useUniversalLink;
      setShowPluginTag(!hidePluginTag);
    };
    checkWalletInstalled();
  }, [wallet, useUniversalLink]);

  return (
    <List.Item
      className={classNames(`${prefixCls}-wallet-item`, {
        selected:
          wallet.key !== undefined
            ? selectedWallet?.key === wallet.key
            : selectedWallet?.name === wallet.name,
        disabled,
      })}
      onClick={disabled ? undefined : () => onSelect(wallet)}
    >
      <div className={`${prefixCls}-content`}>
        <WalletIcon wallet={wallet} />
        <Typography.Text ellipsis={{ tooltip: true }} className={`${prefixCls}-name`}>
          {wallet.name}
        </Typography.Text>
      </div>
      <Space>
        {showPluginTag && <PluginTag wallet={wallet} />}
        {wallet.getQrCode ? (
          <Button
            size="small"
            className={`${prefixCls}-qr-btn`}
            onClick={(e) => {
              e.stopPropagation();
              if (!disabled) {
                onQrCodeSelect(wallet);
              }
            }}
            disabled={disabled}
          >
            <QrcodeOutlined />
          </Button>
        ) : (
          showQrPlaceholder && <div className={`${prefixCls}-qr-icon-empty`} />
        )}
      </Space>
    </List.Item>
  );
};

export default WalletItem;
