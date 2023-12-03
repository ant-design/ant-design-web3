import { useContext } from 'react';
import type { ConnectModalProps } from '../interface';
import { connectModalContext } from '../context';
import MainPanelHeader from './MainPanelHeader';
import { Avatar, Button, List, message } from 'antd';
import { getWalletRoute } from '../utils';

export type GetWalletPanelProps = Pick<ConnectModalProps, 'walletList'>;

const GetWalletPanel: React.FC<GetWalletPanelProps> = (props) => {
  const { walletList = [] } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const { prefixCls, updateSelectedWallet, updatePanelRoute } = useContext(connectModalContext);

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
                    const route = getWalletRoute(item);
                    if (route === 'unknown') {
                      messageApi.error('Wallet is not supported');
                      return;
                    }
                    updateSelectedWallet(item);
                    updatePanelRoute(route);
                  }}
                >
                  Get
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar shape="square" src={item.icon}>
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
        <h3>Not what you&apos;re looking for?</h3>
        <p>Select a wallet on the left to get started with a different wallet provider.</p>
      </div>
    </>
  );

  return (
    <div className={`${prefixCls}-get-wallet-panel`}>
      <MainPanelHeader title="Get a Wallet" />
      {list}
    </div>
  );
};

export default GetWalletPanel;
