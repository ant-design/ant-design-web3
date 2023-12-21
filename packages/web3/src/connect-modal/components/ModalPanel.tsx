import React from 'react';
import { mergeReactNodeProps } from '../utils';
import type { ConnectModalProps } from '../interface';
import classNames from 'classnames';
import WalletList from './WalletList';
import MainPanel from './MainPanel';
import { ConfigContext } from 'antd/lib/config-provider';
import { ConnectModalContextProvider } from '../context';
import { useStyle } from '../style';
import useMode from '../hooks/useMode';
import type { PanelRoute, Wallet } from '../interface';

export type ModalPanelProps = ConnectModalProps;

const ModalPanel: React.FC<ModalPanelProps> = (props) => {
  const { title, footer, walletList, groupOrder, guide, mode, onSelectWallet } = props;

  const [panelRoute, setPanelRoute] = React.useState<PanelRoute>('init');
  const routeStack = React.useRef<PanelRoute[]>(['init']);
  const [selectedWallet, setSelectedWallet] = React.useState<Wallet>();
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-modal');
  const { wrapSSR, hashId } = useStyle(prefixCls);

  const mergedTitle = mergeReactNodeProps(
    title,
    <h2 className={`${prefixCls}-title`}>Connect Modal</h2>,
    (node) => <h2 className={`${prefixCls}-title`}>{node}</h2>,
  );

  const updatePanelRoute = React.useCallback((route: PanelRoute, clear: boolean = false) => {
    if (clear) {
      routeStack.current = ['init'];
    }
    setPanelRoute(route);
    routeStack.current.push(route);
  }, []);

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

  React.useEffect(() => {
    if (panelRoute === 'getWallet') {
      updateSelectedWallet(undefined);
    }
  }, [panelRoute, updateSelectedWallet]);

  const { isSimple } = useMode(mode);

  return wrapSSR(
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
      <div
        className={classNames(
          `${prefixCls}-body`,
          {
            [`${prefixCls}-body-simple`]: isSimple,
          },
          hashId,
        )}
      >
        {(panelRoute === 'init' || !isSimple) && (
          <div className={classNames(`${prefixCls}-list-panel`)}>
            <div className={`${prefixCls}-header`}>{mergedTitle}</div>
            <div className={`${prefixCls}-list-container`}>
              <WalletList walletList={walletList} groupOrder={groupOrder} />
            </div>
            {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
          </div>
        )}
        {!(panelRoute === 'init' && isSimple) && (
          <MainPanel simple={isSimple} guide={guide} walletList={walletList} />
        )}
      </div>
    </ConnectModalContextProvider>,
  );
};

export default ModalPanel;
