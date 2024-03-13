import React, { useContext, useMemo } from 'react';
import { QrcodeOutlined } from '@ant-design/icons';
import { Col, List, Row } from 'antd';
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
            <Row align="middle" justify="center" className={`${prefixCls}-row`}>
              <Col span={16}>
                <div className={`${prefixCls}-content`}>
                  {typeof item.icon === 'string' || item.icon === undefined ? (
                    <img className={`${prefixCls}-img`} src={item.icon} alt={item.name} />
                  ) : (
                    <div className={`${prefixCls}-icon`}>{item.icon}</div>
                  )}
                  <div className={`${prefixCls}-name`}>{item.name}</div>
                </div>
              </Col>
              <Col span={6}>
                <PluginTag wallet={item} />
              </Col>
              <Col span={2} className={`${prefixCls}-qc-icon-col`}>
                {item.getQrCode && (
                  <QrcodeOutlined
                    className={`${prefixCls}-qc-icon`}
                    onClick={(e) => {
                      e.stopPropagation();
                      updateSelectedWallet(item, false);
                      updatePanelRoute('qrCode', true);
                    }}
                  />
                )}
              </Col>
            </Row>
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
