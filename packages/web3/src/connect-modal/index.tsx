import React from 'react';
import { Modal } from 'antd';
import ModalPanel from './components/ModalPanel';
import { ConfigContext } from 'antd/lib/config-provider';
import { useStyle } from './style';
import classNames from 'classnames';
import type { ConnectModalProps } from './interface';
import useMode from './hooks/useMode';

export * from './interface';

export const ConnectModal: React.FC<ConnectModalProps> & {
  ModalPanel: typeof ModalPanel;
} = (props) => {
  const { open, className, mode, ...restProps } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);

  const { isSimple } = useMode(mode);

  // Style
  const prefixCls = getPrefixCls('web3-connect-modal');
  const { wrapSSR, hashId } = useStyle(prefixCls);

  return wrapSSR(
    <Modal
      footer={null}
      width={isSimple ? 380 : 737}
      {...restProps}
      className={classNames(prefixCls, className, hashId)}
      rootClassName={classNames(`${prefixCls}-root`, props?.rootClassName)}
      open={open}
      onCancel={(e) => {
        props?.onCancel?.(e);
      }}
    >
      <ModalPanel {...props} />
    </Modal>,
  );
};

ConnectModal.displayName = 'ConnectModal';

ConnectModal.ModalPanel = ModalPanel;
