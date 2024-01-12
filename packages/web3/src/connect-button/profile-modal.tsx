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
}) => {
  const {
    messages: { copyAddress, addressCopied, disconnect },
    getMessage,
  } = intl;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button-profile-modal');
  const [messageApi, contextHolder] = message.useMessage();

  const footer = (
    <div className={classNames(`${prefixCls}-footer`, __hashId__)}>
      {address ? (
        <Button
          onClick={() => {
            writeCopyText(address).then(() => {
              messageApi.success(getMessage(addressCopied));
            });
          }}
        >
          {getMessage(copyAddress)}
        </Button>
      ) : null}
      <Button onClick={onDisconnect}>{getMessage(disconnect)}</Button>
    </div>
  );

  return (
    <>
      {contextHolder}
      <Modal
        footer={footer}
        width={280}
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
          {address ? (
            <Address ellipsis={false} address={address} tooltip={false}>
              {balance && <CryptoPrice {...balance} />}
            </Address>
          ) : null}
        </Space>
      </Modal>
    </>
  );
};
ProfileModal.displayName = 'ProfileModal';
