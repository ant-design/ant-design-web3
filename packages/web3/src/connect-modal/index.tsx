import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import ModalPanel from './components/ModalPanel';
import { ConfigContext } from 'antd/lib/config-provider';
import { useStyle } from './style';
import classNames from 'classnames';
import type { ConnectModalProps, PanelRoute, Wallet } from './interface';
import { ConnectModalContextProvider } from './context';
import useMode from './hooks/useMode';

export type * from './interface';

export const ConnectModal: React.FC<ConnectModalProps> & {
  ModalPanel: typeof ModalPanel;
} = (props) => {
  const { open, onSelectWallet, mode, className } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const [selectedWallet, setSelectedWallet] = React.useState<Wallet>();
  const [panelRoute, setPanelRoute] = React.useState<PanelRoute>('init');
  const routeStack = React.useRef<PanelRoute[]>(['init']);
  const updatePanelRoute = React.useCallback((route: PanelRoute, clear: boolean = false) => {
    if (clear) {
      routeStack.current = ['init'];
    }
    setPanelRoute(route);
    routeStack.current.push(route);
  }, []);
  const { isSimple } = useMode(mode);
  const updateSelectedWallet = React.useCallback(
    (wallet: Wallet | undefined, triggerConnect?: boolean) => {
      setSelectedWallet(wallet);
      if (wallet && triggerConnect) {
        onSelectWallet?.(wallet);
      }
    },
    [onSelectWallet],
  );
  const panelRouteBack = React.useCallback(() => {
    routeStack.current.pop();
    const route = routeStack.current[routeStack.current.length - 1];
    if (route === 'init') {
      updateSelectedWallet(undefined);
    }
    setPanelRoute(route);
  }, [updateSelectedWallet]);

  useEffect(() => {
    if (panelRoute === 'getWallet') {
      updateSelectedWallet(undefined);
    }
  }, [panelRoute, updateSelectedWallet]);

  // Style
  const prefixCls = getPrefixCls('web3-connect-modal');
  const { wrapSSR, hashId } = useStyle(prefixCls);

  const { title, footer, ...restProps } = props;

  return (
    <ConnectModalContextProvider
      value={{
        prefixCls,
        selectedWallet,
        updateSelectedWallet,
        panelRoute,
        updatePanelRoute,
        panelRouteBack,
        canBack: routeStack.current.length > 1,
      }}
    >
      {wrapSSR(
        <Modal
          closeIcon={<CloseCircleFilled />}
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
      )}
    </ConnectModalContextProvider>
  );
};

ConnectModal.displayName = 'ConnectModal';

ConnectModal.ModalPanel = ModalPanel;
