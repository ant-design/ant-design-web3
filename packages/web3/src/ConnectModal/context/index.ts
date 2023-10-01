import React from "react";

export type ConnectModalContext = {
    prefixCls: string;
};

export const connectModalContext = React.createContext<ConnectModalContext>({
    prefixCls: "ant-connect-modal"
});

export const ConnectModalContextProvider = connectModalContext.Provider;