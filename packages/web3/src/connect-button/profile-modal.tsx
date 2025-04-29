import React, { useContext } from 'react';
import { Address } from '@ant-design/web3';
import type { Balance } from '@ant-design/web3-common';
import { Avatar, Button, ConfigProvider, message, Modal, Space } from 'antd';
import type { AvatarProps, ModalProps } from 'antd';
import classNames from 'classnames';

import { CryptoPrice } from '../crypto-price';
import type { IntlType } from '../hooks/useIntl';
import { writeCopyText } from '../utils';

export interface ProfileModalProps {
  className?: string;
  intl: IntlType;
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
  addressPrefix?: string | false;
  size?: 'small' | 'middle' | 'large';
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  className,
  intl,
  __hashId__,
  open,
  onClose,
  onDisconnect,
  avatar,
  name,
  address,
  modalProps,
  balance,
  addressPrefix,
  size,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button-profile-modal');
  const [messageApi, contextHolder] = message.useMessage();

  const footer = (
    <div className={classNames(`${prefixCls}-footer`, __hashId__)}>
      {address ? (
        <Button
          size={size}
          onClick={() => {
            writeCopyText(address).then(() => {
              messageApi.success(intl.getMessage(intl.messages.copied));
            });
          }}
        >
          {intl.getMessage(intl.messages.copyAddress)}
        </Button>
      ) : null}
      <Button size={size} onClick={onDisconnect}>
        {intl.getMessage(intl.messages.disconnect)}
      </Button>
    </div>
  );

  return (
    <>
      {contextHolder}
      <Modal
        footer={footer}
        width="fit-content"
        {...modalProps}
        onCancel={onClose}
        className={classNames(className, __hashId__, prefixCls)}
        styles={{
          ...modalProps?.styles,

          body: {
            textAlign: 'center',
            ...modalProps?.styles?.body,
          },
        }}
        open={open}
      >
        <Space align="center" direction="vertical">
          {avatar ? <Avatar {...avatar} /> : null}
          {name ? <div className={classNames(`${prefixCls}-name`, __hashId__)}>{name}</div> : null}
          {balance && <CryptoPrice {...balance} />}
          {address && (
            <Address
              ellipsis={false}
              address={address}
              type={name ? 'secondary' : undefined}
              tooltip={false}
              addressPrefix={addressPrefix}
            />
          )}
        </Space>
      </Modal>
    </>
  );
};
ProfileModal.displayName = 'ProfileModal';
