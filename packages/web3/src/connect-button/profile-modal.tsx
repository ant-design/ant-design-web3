import React, { useContext } from 'react';
import { Modal, ConfigProvider, Space, Button, Avatar, message, type AvatarProps } from 'antd';
import classNames from 'classnames';
import { Address } from '@ant-design/web3';
import { writeCopyText } from '../utils';

export interface ProfileModalProps {
  className?: string;
  /** @internal */
  __hashId__: string;
  avatar?: AvatarProps;
  address?: string;
  name?: string;
  onDisconnect?: () => void;
  open?: boolean;
  onClose?: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  className,
  __hashId__,
  open,
  onClose,
  onDisconnect,
  avatar,
  name,
  address,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button-profile-modal');

  return (
    <Modal
      footer={false}
      open={open}
      width={280}
      onCancel={onClose}
      className={classNames(className, __hashId__, prefixCls)}
    >
      <Space align="center" direction="vertical">
        {avatar ? <Avatar {...avatar} /> : null}
        {name ? <div className={classNames(`${prefixCls}-name`, __hashId__)}>{name}</div> : null}
        {address ? <Address ellipsis={false} address={address} tooltip={false} /> : null}
        <Space>
          {address ? (
            <Button
              onClick={() => {
                writeCopyText(address).then(() => {
                  message.success('Address Copied!');
                });
              }}
            >
              Copy Address
            </Button>
          ) : null}
          <Button onClick={onDisconnect}>Disconnect</Button>
        </Space>
      </Space>
    </Modal>
  );
};
ProfileModal.displayName = 'ProfileModal';
