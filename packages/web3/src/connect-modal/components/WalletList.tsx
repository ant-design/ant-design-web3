import React, { forwardRef, useContext, useImperativeHandle, useMemo } from 'react';
import { QrcodeOutlined } from '@ant-design/icons';
import { Button, Empty, List, Space, Typography } from 'antd';
import classNames from 'classnames';

import { connectModalContext } from '../context';
import type { ConnectModalActionType, ConnectModalProps, Wallet } from '../interface';
import { defaultGroupOrder } from '../utils';
import PluginTag from './PluginTag';
import WalletIcon from './WalletIcon';

export type WalletListProps = Pick<
  ConnectModalProps,
  'walletList' | 'group' | 'groupOrder' | 'emptyProps'
>;

const WalletList = forwardRef<ConnectModalActionType, WalletListProps>((props, ref) => {
  const { walletList = [], group: internalGroup, groupOrder, emptyProps } = props;
  const { prefixCls, updateSelectedWallet, selectedWallet, localeMessage, updatePanelRoute } =
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

  const needGrouping =
    internalGroup !== false && !(internalGroup === undefined && groupKeys.length <= 1);

  const selectWallet = async (wallet: Wallet) => {
    const hasWalletReady = await wallet.hasWalletReady?.();
    if (hasWalletReady) {
      // wallet is ready, call ConnectModal's onWalletSelected
      const hasExtensionInstalled = await wallet?.hasExtensionInstalled?.();
      if (hasExtensionInstalled) {
        updateSelectedWallet(wallet, {
          connectType: 'extension',
        });
      } else if (wallet.getQrCode) {
        // Extension not installed and can use qr code to connect
        updateSelectedWallet(wallet, {
          connectType: 'qrCode',
        });
      } else {
        // use the default connect
        updateSelectedWallet(wallet, {});
      }
      return;
    }

    // wallet not ready
    // go to wallet page
    updateSelectedWallet(wallet);
    updatePanelRoute('wallet', true);
  };

  useImperativeHandle(ref, () => {
    return {
      selectWallet,
    };
  });
  const renderContent = (params?: { group?: string }) => {
    const { group } = params || {};
    return (
      <List<Wallet>
        itemLayout="horizontal"
        dataSource={group ? dataSource[group!] : walletList}
        rowKey="key"
        renderItem={(item) => (
          <List.Item
            className={classNames(`${prefixCls}-wallet-item`, {
              selected:
                item.key !== undefined
                  ? selectedWallet?.key === item.key
                  : selectedWallet?.name === item.name,
            })}
            onClick={() => {
              selectWallet(item);
            }}
          >
            <div className={`${prefixCls}-content`}>
              <WalletIcon wallet={item} />
              <Typography.Text ellipsis={{ tooltip: true }} className={`${prefixCls}-name`}>
                {item.name}
              </Typography.Text>
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
                walletList.some((w) => w.getQrCode) && (
                  <div className={`${prefixCls}-qr-icon-empty`} />
                )
              )}
            </Space>
          </List.Item>
        )}
      />
    );
  };

  if (walletList.length === 0) {
    return (
      <div className={`${prefixCls}-wallets-empty`}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={localeMessage.walletListEmpty}
          {...emptyProps}
        />
      </div>
    );
  }

  return (
    <div className={`${prefixCls}-wallet-list`}>
      {needGrouping ? (
        groupKeys.map((group) => (
          <div className={`${prefixCls}-group`} key={group}>
            <div className={`${prefixCls}-group-title`}>{group}</div>
            <div className={`${prefixCls}-group-content`}>
              {renderContent({
                group,
              })}
            </div>
          </div>
        ))
      ) : (
        <div className={`${prefixCls}-group`}>
          <div className={`${prefixCls}-group-content`}>{renderContent()}</div>
        </div>
      )}
    </div>
  );
});

export default WalletList;
