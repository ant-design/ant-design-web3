import { useContext } from 'react';
import { Avatar, Button, List, type ListProps } from 'antd';

import { connectModalContext } from '../context';
import type { ConnectModalProps } from '../interface';
import MainPanelHeader from './MainPanelHeader';

export type GetWalletPanelProps = Pick<ConnectModalProps, 'walletList'>;

const GetWalletPanel: React.FC<GetWalletPanelProps> = (props) => {
  const { walletList = [] } = props;
  const { prefixCls, updateSelectedWallet, updatePanelRoute, localeMessage } =
    useContext(connectModalContext);

  const list = (
    <>
      <div className={`${prefixCls}-list`}>
        <List
          itemLayout="horizontal"
          dataSource={walletList}
          renderItem={(item) => {
            let action: React.ReactNode;
            if (item.universalProtocol) {
              action = (
                <Button
                  key="get"
                  type="default"
                  target="_blank"
                  shape="round"
                  href={item.universalProtocol.link}
                  className={`${prefixCls}-get-wallet-btn`}
                >
                  {localeMessage.getWalletUniversalProtocolBtnText}
                </Button>
              );
            }
            if (item.app || item.extensions) {
              action = (
                <Button
                  key="get"
                  type="default"
                  shape="round"
                  className={`${prefixCls}-get-wallet-btn`}
                  onClick={() => {
                    updateSelectedWallet(item);
                    updatePanelRoute('wallet');
                  }}
                >
                  {localeMessage.getWalletBtnText}
                </Button>
              );
            }
            return (
              <List.Item className={`${prefixCls}-item`} actions={action ? [action] : []}>
                <List.Item.Meta
                  avatar={
                    <Avatar size={48} shape="square" src={item.icon}>
                      {item.name[0]}
                    </Avatar>
                  }
                  title={item.name}
                  description={item.remark}
                />
              </List.Item>
            );
          }}
        />
      </div>
      <div className={`${prefixCls}-info`}>
        <h3>{localeMessage.getWalletPanelInfoTitle}</h3>
        <div>{localeMessage.getWalletPanelInfoDesc}</div>
      </div>
    </>
  );

  return (
    <div className={`${prefixCls}-get-wallet-panel`}>
      <MainPanelHeader title={localeMessage.getWalletPanelTitle} />
      {list}
    </div>
  );
};

export default GetWalletPanel;
