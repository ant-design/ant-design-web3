import React from 'react';
import { Modal } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import ModalPanel from './components/modalPanel';
import { ConfigContext } from 'antd/es/config-provider';
import useStyle from './style';
import classNames from 'classnames';
import type { ConnectModalProps } from './inter';
import { ConnectModalContextProvider } from './context';


export const ConnectModal: React.FC<ConnectModalProps> = (props) => {
  const {
    open,
    onOpenChange,
    modalProps,
    prefixCls: customizePrefixCls,
    guide,
  } = props;
  const {
    getPrefixCls,
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('connect-modal', customizePrefixCls);

  // Style
  const [wrapSSR] = useStyle(prefixCls);


  return (
    <ConnectModalContextProvider value={{
      prefixCls,
    }}>
      {
        wrapSSR(
          <Modal
            {...modalProps}
            width={guide ? 737 : 380}
            maskClosable={false}
            className={classNames(prefixCls)}
            rootClassName={`${prefixCls}-root`}
            open={open}
            closeIcon={<CloseCircleFilled />}
            onCancel={() => {
              onOpenChange?.(false);
            }}
            footer={null}
          >
            <ModalPanel {...props} prefixCls={prefixCls} />
          </Modal>
        )
      }
    </ConnectModalContextProvider>
  );
};
ConnectModal.displayName = 'ConnectModal';
