import React, { useContext, useMemo } from 'react';
import { QrcodeOutlined } from '@ant-design/icons';
import { Button, List, Space } from 'antd';
import classNames from 'classnames';

import { connectModalContext } from '../context';
import type { ConnectModalProps, Wallet } from '../interface';
import { defaultGroupOrder } from '../utils';
import PluginTag from './PluginTag';

export type WalletListProps = Pick<ConnectModalProps, 'walletList' | 'group' | 'groupOrder'>;

const WalletList: React.FC<WalletListProps> = (props) => {
  const { walletList = [], group: internalGroup, groupOrder } = props;
  const { prefixCls, updateSelectedWallet, selectedWallet, updatePanelRoute } =
    useContext(connectModalContext);
  const dataSource: Record<string, Wallet[]> = useMemo(() => {
    const result: Record<string, Wallet[]> = {};
    walletList.forEach((wallet) => {
      const { group = 'More' } = wallet;
      if (!result[group]) {
        result[group] = [];
      }
      result[group].push(wallet);
    });
    return result;
  }, [walletList]);

  const groupKeys = useMemo(() => {
    let orderFn = defaultGroupOrder;
    if (typeof internalGroup === 'object' && internalGroup.hasOwnProperty('groupOrder')) {
      orderFn = internalGroup.groupOrder!;
    } else if (groupOrder) {
      orderFn = groupOrder;
    }
    return Object.keys(dataSource).sort(orderFn);
  }, [dataSource, internalGroup, groupOrder]);

  const RenderContent = ({ group }: { group?: string }) => {
    return (
      <List<Wallet>
        itemLayout="horizontal"
        dataSource={internalGroup ? dataSource[group!] : walletList}
        rowKey="key"
        renderItem={(item) => (
          <List.Item
            className={classNames(`${prefixCls}-wallet-item`, {
              selected:
                item.key !== undefined
                  ? selectedWallet?.key === item.key
                  : selectedWallet?.name === item.name,
            })}
            onClick={async () => {
              const hasWalletReady = await item.hasWalletReady?.();
              if (hasWalletReady) {
                // wallet is ready, call ConnectModal's onWalletSelected
                const hasExtensionInstalled = await item?.hasExtensionInstalled?.();
                if (hasExtensionInstalled) {
                  updateSelectedWallet(item, {
                    connectType: 'extension',
                  });
                } else if (item.getQrCode) {
                  // Extension not installed and can use qr code to connect
                  updateSelectedWallet(item, {
                    connectType: 'qrCode',
                  });
                } else {
                  // use the default connect
                  updateSelectedWallet(item, {});
                }
                return;
              }

              // wallet not ready
              // go to wallet page
              updateSelectedWallet(item);
              updatePanelRoute('wallet', true);
            }}
          >
            <div className={`${prefixCls}-content`}>
              {typeof item.icon === 'string' || item.icon === undefined ? (
                <img className={`${prefixCls}-img`} src={item.icon} alt={item.name} />
              ) : (
                <div className={`${prefixCls}-icon`}>{item.icon}</div>
              )}
              <div className={`${prefixCls}-name`}>{item.name}</div>
            </div>
            <Space>
              <PluginTag wallet={item} />
              {item.getQrCode ? (
                <Button
                  size="small"
                  className={`${prefixCls}-qr-btn`}
                  onClick={(e) => {
                    e.stopPropagation();
                    updateSelectedWallet(item, {
                      connectType: 'qrCode',
                    });
                  }}
                >
                  <QrcodeOutlined />
                </Button>
              ) : (
                <div className={`${prefixCls}-qr-icon-empty`} />
              )}
            </Space>
          </List.Item>
        )}
      />
    );
  };

  return (
    <div className={`${prefixCls}-wallet-list`}>
      {internalGroup ? (
        groupKeys.map((group) => (
          <div className={`${prefixCls}-group`} key={group}>
            <div className={`${prefixCls}-group-title`}>{group}</div>
            <div className={`${prefixCls}-group-content`}>
              <RenderContent group={group} />
            </div>
          </div>
        ))
      ) : (
        <div className={`${prefixCls}-group`}>
          <div className={`${prefixCls}-group-content`}>
            <RenderContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletList;
