import React from 'react';
import { devUseWarning } from '@ant-design/web3-common';
import { ConfigProvider, Modal } from 'antd';
import classNames from 'classnames';

import ModalPanel from './components/ModalPanel';
import useMode from './hooks/useMode';
import type { ConnectModalProps } from './interface';
import { useStyle } from './style';

export * from './interface';

export const ConnectModal: React.FC<ConnectModalProps> & {
  ModalPanel: typeof ModalPanel;
} = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  const { title, footer, open, className, mode, rootClassName, onCancel, disabled, ...restProps } =
    props;
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);

  const { isSimple } = useMode(mode);

  // Style
  const prefixCls = getPrefixCls('web3-connect-modal');
  const { wrapSSR, hashId } = useStyle(prefixCls);

  // Warning for deprecated usage
  const warning = devUseWarning('ConnectModal');
  warning.deprecated(!('groupOrder' in restProps), 'groupOrder', 'group={{groupOrder: ()=> {}}}');

  return wrapSSR(
    <Modal
      footer={null}
      width={isSimple ? 380 : 797}
      {...restProps}
      className={classNames(prefixCls, className, hashId)}
      rootClassName={classNames(`${prefixCls}-root`, rootClassName)}
      open={open}
      onCancel={(e) => {
        onCancel?.(e);
      }}
    >
      <ModalPanel {...props} />
    </Modal>,
  );
};

ConnectModal.displayName = 'ConnectModal';

ConnectModal.ModalPanel = ModalPanel;
