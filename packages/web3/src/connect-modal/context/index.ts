import React from 'react';
import type { PanelRoute, Wallet } from '../interface';
import type { IntlType } from '../../hooks/useIntl';
import { defaultLocale } from '@ant-design/web3-common';

export type ConnectModalContext = {
  prefixCls: string;
  selectedWallet: Wallet | undefined;
  updateSelectedWallet: (wallet: Wallet | undefined, triggerConnect?: boolean) => void;
  panelRoute: PanelRoute;
  updatePanelRoute: (route: PanelRoute, clear?: boolean) => void;
  panelRouteBack: () => void;
  canBack: boolean;
  localeMessage: IntlType<'ConnectModal'>['messages'];
  getMessage: IntlType<'ConnectModal'>['getMessage'];
};

export const connectModalContext = React.createContext<ConnectModalContext>({
  prefixCls: 'ant-web3-connect-modal',
  selectedWallet: undefined,
  updateSelectedWallet: () => {},
  panelRoute: 'init',
  updatePanelRoute: () => {},
  panelRouteBack: () => {},
  canBack: false,
  localeMessage: defaultLocale.ConnectModal,
  getMessage: () => '',
});

export const ConnectModalContextProvider = connectModalContext.Provider;
