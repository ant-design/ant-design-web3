import React, { useContext } from 'react';
import { Modal, ConfigProvider, Space, Button, Avatar, message, type AvatarProps } from 'antd';
import classNames from 'classnames';
import { Address } from '@ant-design/web3';
import { writeCopyText } from '../utils';
import { ModalProps } from 'antd/lib';

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
  modalProps?: Omit<ModalProps, 'open' | 'onClose' | 'className'>;
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
  modalProps,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button-profile-modal');

  return (
    <Modal
      footer={
        <div className={classNames(`${prefixCls}-footer`, __hashId__)}>
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
        </div>
      }
      width={280}
      {...modalProps}
      onCancel={onClose}
      className={classNames(className, __hashId__, prefixCls)}
      open={open}
    >
      <Space align="center" direction="vertical">
        {avatar ? <Avatar {...avatar} /> : null}
        {name ? <div className={classNames(`${prefixCls}-name`, __hashId__)}>{name}</div> : null}
        {address ? <Address ellipsis={false} address={address} tooltip={false} /> : null}
      </Space>
    </Modal>
  );
};
ProfileModal.displayName = 'ProfileModal';
