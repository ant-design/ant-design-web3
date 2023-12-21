import React, { useContext, useMemo } from 'react';
import { List, message } from 'antd';
import type { ConnectModalProps, Wallet } from '../interface';
import { defaultGroupOrder } from '../utils';
import { connectModalContext } from '../context';
import classNames from 'classnames';

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

  const [messageApi, contextHolder] = message.useMessage();

  return (
    <div className={`${prefixCls}-wallet-list`}>
      {contextHolder}
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
                    const hasBrowserExtensionInstalled =
                      await item.hasBrowserExtensionInstalled?.();
                    if (hasBrowserExtensionInstalled) {
                      // browser extension installed, use browser extension
                      updateSelectedWallet(item, true);
                      return;
                    }
                    if (item.getQrCode) {
                      // can use qr code to connect
                      updateSelectedWallet(item, true);
                      updatePanelRoute('qrCode', true);
                      return;
                    }

                    // can not use browser extension or qr code to connect
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
