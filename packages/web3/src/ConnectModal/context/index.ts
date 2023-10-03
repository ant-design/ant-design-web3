import React from "react";
import type { PanelRoute, Wallet } from "../interface";

export type ConnectModalContext = {
    prefixCls: string;
    selectedWallet: Wallet | undefined;
    updateSelectedWallet: (wallet: Wallet) => void;
    panelRoute: PanelRoute;
    updatePanelRoute: (route: PanelRoute) => void;
    panelRouteBack: () => void;
};

export const connectModalContext = React.createContext<ConnectModalContext>({
    prefixCls: "ant-connect-modal",
    selectedWallet: undefined,
    updateSelectedWallet: () => {},
    panelRoute: "guide",
    updatePanelRoute: () => {},
    panelRouteBack: () => {},
});

export const ConnectModalContextProvider = connectModalContext.Provider;