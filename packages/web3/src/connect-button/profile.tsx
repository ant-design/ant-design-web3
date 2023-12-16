import type { AvatarProps } from 'antd';
import { Space, Avatar, ConfigProvider } from 'antd';
import type { Balance } from '@ant-design/web3';
import { Address, CryptoPrice } from '@ant-design/web3';
import classNames from 'classNames';
import React, { useContext } from 'react';

interface ProfileProps {
  /** @internal */
  __hashId__?: string;
  avatar?: AvatarProps;
  address?: string;
  balance?: Balance;
  name?: string;
}
export const Profile: React.FC<ProfileProps> = ({ avatar, address, __hashId__, balance, name }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button-profile-modal');

  return (
    <Space align="center" direction="vertical">
      {avatar ? <Avatar {...avatar} /> : null}
      {name ? <div className={classNames(`${prefixCls}-name`, __hashId__)}>{name}</div> : null}
      {address ? (
        <Address ellipsis={false} address={address} tooltip={false}>
          {balance && <CryptoPrice {...balance} />}
        </Address>
      ) : null}
    </Space>
  );
};
