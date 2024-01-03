import { useContext } from 'react';
import { Avatar, Button, List, message } from 'antd';

import { connectModalContext } from '../context';
import type { ConnectModalProps } from '../interface';
import MainPanelHeader from './MainPanelHeader';

export type GetWalletPanelProps = Pick<ConnectModalProps, 'walletList'>;

const GetWalletPanel: React.FC<GetWalletPanelProps> = (props) => {
  const { walletList = [] } = props;
  const [, contextHolder] = message.useMessage();
  const { prefixCls, updateSelectedWallet, updatePanelRoute, localeMessage } =
    useContext(connectModalContext);

  const list = (
    <>
      {contextHolder}
      <div className={`${prefixCls}-list`}>
        <List
          itemLayout="horizontal"
          dataSource={walletList}
          renderItem={(item) => (
            <List.Item
              className={`${prefixCls}-item`}
              actions={[
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
                </Button>,
              ]}
            >
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
          )}
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
