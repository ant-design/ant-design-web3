import React, { useContext, useMemo } from 'react';
import { List } from 'antd';
import classNames from 'classnames';

import { connectModalContext } from '../context';
import type { ConnectModalProps, Wallet } from '../interface';
import { defaultGroupOrder } from '../utils';

export type WalletListProps = Pick<ConnectModalProps, 'walletList' | 'groupOrder'>;

const WalletList: React.FC<WalletListProps> = (props) => {
  const { walletList = [], groupOrder } = props;
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

  const groupKeys = useMemo(
    () => Object.keys(dataSource).sort(groupOrder ?? defaultGroupOrder),
    [dataSource, groupOrder],
  );

  return (
    <div className={`${prefixCls}-wallet-list`}>
      {groupKeys.map((group) => (
        <div className={`${prefixCls}-group`} key={group}>
          <div className={`${prefixCls}-group-title`}>{group}</div>
          <div className={`${prefixCls}-group-content`}>
            <List<Wallet>
              itemLayout="horizontal"
              dataSource={dataSource[group]}
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
                      updateSelectedWallet(item, true);
                      if (item.getQrCode && !hasExtensionInstalled) {
                        // Extension not installed and can use qr code to connect
                        updatePanelRoute('qrCode', true);
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
                    <div className={`${prefixCls}-icon`}>
                      {typeof item.icon === 'string' || item.icon === undefined ? (
                        <img src={item.icon} alt={item.name} />
                      ) : (
                        item.icon
                      )}
                    </div>
                    <div className={`${prefixCls}-name`}>{item.name}</div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WalletList;
