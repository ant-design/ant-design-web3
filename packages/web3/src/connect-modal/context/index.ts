import React from 'react';
import type { PanelRoute, Wallet } from '../interface';

export type ConnectModalContext = {
  prefixCls: string;
  selectedWallet: Wallet | undefined;
  updateSelectedWallet: (wallet: Wallet | undefined, triggerConnect?: boolean) => void;
  panelRoute: PanelRoute;
  updatePanelRoute: (route: PanelRoute, clear?: boolean) => void;
  panelRouteBack: () => void;
  canBack: boolean;
};

export const connectModalContext = React.createContext<ConnectModalContext>({
  prefixCls: 'ant-web3-connect-modal',
  selectedWallet: undefined,
  updateSelectedWallet: () => {},
  panelRoute: 'init',
  updatePanelRoute: () => {},
  panelRouteBack: () => {},
  canBack: false,
});

export const ConnectModalContextProvider = connectModalContext.Provider;
