import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Connector, type ConnectorTriggerProps } from '@ant-design/web3';
import { FarcasterWeb3ConfigProvider, useFarcaster } from '@ant-design/web3-farcaster';
import { Avatar, Button, message, Space } from 'antd';

// Your custom login button
const CustomLoginBtn: React.FC<ConnectorTriggerProps> = (props) => {
  const { onConnectClick } = props;
  return (
    <Button type="primary" onClick={() => onConnectClick?.()}>
      Login with Farcaster
    </Button>
  );
};

const YourApp = () => {
  const { data, isSuccess } = useFarcaster();

  return (
    <Space direction="vertical">
      {/* After a successful login, it often redirects to another page, and the login button disappears. */}
      {!isSuccess ? (
        <Connector
          modalProps={{
            title: 'Login',
            mode: 'simple',
          }}
        >
          <CustomLoginBtn />
        </Connector>
      ) : null}
      <Space>
        {/* Do something after login, e.g. display user profile */}
        <Avatar
          shape="square"
          size="large"
          icon={<UserOutlined />}
          src={isSuccess ? data?.pfpUrl : undefined}
        />
        {isSuccess ? data?.displayName : ''}
      </Space>
    </Space>
  );
};

const Login: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <FarcasterWeb3ConfigProvider onSuccess={() => messageApi.success('Welcome!')}>
        <YourApp />
      </FarcasterWeb3ConfigProvider>
    </>
  );
};

export default Login;
