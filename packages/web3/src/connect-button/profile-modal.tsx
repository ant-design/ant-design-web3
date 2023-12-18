import React, { useContext } from 'react';
import { Modal, ConfigProvider, Button, message, type AvatarProps } from 'antd';
import classNames from 'classnames';
import type { Balance } from '@ant-design/web3-common';
import { writeCopyText } from '../utils';
import type { ModalProps } from 'antd';
import { Profile } from './profile';

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
  balance?: Balance;
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
  balance,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button-profile-modal');
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Modal
        footer={
          <div className={classNames(`${prefixCls}-footer`, __hashId__)}>
            {address ? (
              <Button
                onClick={() => {
                  writeCopyText(address).then(() => {
                    messageApi.success('Address Copied!');
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
        bodyStyle={{
          textAlign: 'center',
          ...modalProps?.bodyStyle,
        }}
        open={open}
      >
        <Profile
          avatar={avatar}
          address={address}
          __hashId__={__hashId__}
          balance={balance}
          name={name}
        />
      </Modal>
    </>
  );
};
ProfileModal.displayName = 'ProfileModal';
