import React from 'react';
import type { PanelRoute, Theme, Wallet } from '../interface';

export type ConnectModalContext = {
  prefixCls: string;
  theme: Theme;
  selectedWallet: Wallet | undefined;
  updateSelectedWallet: (wallet: Wallet | undefined) => void;
  panelRoute: PanelRoute;
  updatePanelRoute: (route: PanelRoute, clear?: boolean) => void;
  panelRouteBack: () => void;
  canBack: boolean;
};

export const connectModalContext = React.createContext<ConnectModalContext>({
  prefixCls: 'ant-connect-modal',
  theme: 'light',
  selectedWallet: undefined,
  updateSelectedWallet: () => {},
  panelRoute: 'guide',
  updatePanelRoute: () => {},
  panelRouteBack: () => {},
  canBack: false,
});

export const ConnectModalContextProvider = connectModalContext.Provider;
