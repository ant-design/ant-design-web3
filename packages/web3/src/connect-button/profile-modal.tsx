import React, { useContext } from 'react';
import { Address } from '@ant-design/web3';
import { Avatar, Button, ConfigProvider, message, Modal, Space } from 'antd';
import classNames from 'classnames';

import { CryptoPrice } from '../crypto-price';
import { writeCopyText } from '../utils';
import type { ProfileModalProps } from './interface';

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
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button-profile-modal');
  const [messageApi, contextHolder] = message.useMessage();

  const footer = (
    <div className={classNames(`${prefixCls}-footer`, __hashId__)}>
      {address ? (
        <Button
          onClick={() => {
            writeCopyText(address).then(() => {
              messageApi.success(intl.getMessage(intl.messages.addressCopied));
            });
          }}
        >
          {intl.getMessage(intl.messages.copyAddress)}
        </Button>
      ) : null}
      <Button onClick={onDisconnect}>{intl.getMessage(intl.messages.disconnect)}</Button>
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
