import React from 'react';
import type { ConnectOptions } from '@ant-design/web3-common';
import { Button, ConfigProvider } from 'antd';
import classNames from 'classnames';

import useIntl from '../../hooks/useIntl';
import useProvider from '../../hooks/useProvider';
import { ConnectModalContextProvider } from '../context';
import useMode from '../hooks/useMode';
import type { ConnectModalProps, PanelRoute, Wallet } from '../interface';
import { useStyle } from '../style';
import { mergeReactNodeProps } from '../utils';
import MainPanel from './MainPanel';
import WalletList from './WalletList';

export type ModalPanelProps = ConnectModalProps;

const ModalPanel: React.FC<ModalPanelProps> = (props) => {
  const { availableWallets } = useProvider();
  const {
    title,
    footer,
    walletList = availableWallets,
    emptyProps,
    guide,
    group,
    groupOrder,
    mode,
    onWalletSelected,
    actionRef,
    defaultSelectedWallet,
    locale,
    connecting,
  } = props;
  const intl = useIntl('ConnectModal', locale);
  const showQRCoodByDefault = defaultSelectedWallet?.getQrCode;
  const [panelRoute, setPanelRoute] = React.useState<PanelRoute>(
    showQRCoodByDefault ? 'qrCode' : 'init',
  );
  const routeStack = React.useRef<PanelRoute[]>(
    showQRCoodByDefault ? ['init', 'qrCode'] : ['init'],
  );
  const [selectedWallet, setSelectedWallet] = React.useState<Wallet | undefined>(
    defaultSelectedWallet,
  );
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-modal');
  const { wrapSSR, hashId } = useStyle(prefixCls);

  const mergedTitle = mergeReactNodeProps(
    title,
    <h2 className={`${prefixCls}-title`}>{intl.messages.title}</h2>,
    (node) => <h2 className={`${prefixCls}-title`}>{node}</h2>,
  );

  const updatePanelRoute = React.useCallback((route: PanelRoute, clear = false) => {
    if (clear) {
      routeStack.current = ['init'];
    }
    setPanelRoute(route);
    routeStack.current.push(route);
  }, []);

  const updateSelectedWallet = React.useCallback(
    async (wallet?: Wallet, connectOptions?: ConnectOptions) => {
      setSelectedWallet(wallet);
      if (wallet && connectOptions) {
        if (connectOptions.connectType === 'qrCode' && !wallet.customQrCodePanel) {
          updatePanelRoute('qrCode', true);
        } else if (connectOptions.connectType === 'extension') {
          updatePanelRoute('link', true);
        } else if (connectOptions.connectType === 'openMobile') {
          updatePanelRoute('link', true);
        } else {
          setPanelRoute('init');
        }
        onWalletSelected?.(wallet, connectOptions);
      }
    },
    [onWalletSelected],
  );

  const panelRouteBack = React.useCallback(() => {
    routeStack.current.pop();
    const route = routeStack.current[routeStack.current.length - 1];
    if (route === 'init') {
      updateSelectedWallet(undefined);
    }
    setPanelRoute(route);
  }, [updateSelectedWallet]);

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
        localeMessage: intl.messages,
        getMessage: intl.getMessage,
        connecting,
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
            <div className={`${prefixCls}-list`}>
              <div className={`${prefixCls}-list-container`}>
                <WalletList
                  ref={actionRef}
                  walletList={walletList}
                  group={group}
                  groupOrder={groupOrder}
                  emptyProps={emptyProps}
                />
              </div>
              <div className={`${prefixCls}-footer-container`}>
                {isSimple && (
                  <div className={`${prefixCls}-simple-guide`}>
                    {intl.getMessage(intl.messages.guideTipTitle)}
                    <Button
                      type="link"
                      className={`${prefixCls}-simple-guide-right`}
                      onClick={() => {
                        updatePanelRoute('guide');
                      }}
                      size="small"
                    >
                      {intl.getMessage(intl.messages.guideTipLearnMoreLinkText)}
                    </Button>
                  </div>
                )}
                {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
              </div>
            </div>
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
