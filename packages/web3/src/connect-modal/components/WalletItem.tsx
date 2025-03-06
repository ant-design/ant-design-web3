import React from 'react';
import { QrcodeOutlined } from '@ant-design/icons';
import { Button, List, Space, Typography } from 'antd';
import classNames from 'classnames';

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
}

const WalletItem: React.FC<WalletItemProps> = ({
  wallet,
  prefixCls,
  selectedWallet,
  onSelect,
  onQrCodeSelect,
  showQrPlaceholder,
}) => {
  return (
    <List.Item
      className={classNames(`${prefixCls}-wallet-item`, {
        selected:
          wallet.key !== undefined
            ? selectedWallet?.key === wallet.key
            : selectedWallet?.name === wallet.name,
      })}
      onClick={() => onSelect(wallet)}
    >
      <div className={`${prefixCls}-content`}>
        <WalletIcon wallet={wallet} />
        <Typography.Text ellipsis={{ tooltip: true }} className={`${prefixCls}-name`}>
          {wallet.name}
        </Typography.Text>
      </div>
      <Space>
        <PluginTag wallet={wallet} />
        {wallet.getQrCode ? (
          <Button
            size="small"
            className={`${prefixCls}-qr-btn`}
            onClick={(e) => {
              e.stopPropagation();
              onQrCodeSelect(wallet);
            }}
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
