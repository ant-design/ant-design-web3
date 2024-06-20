import React, { useCallback, useEffect } from 'react';
import type { Provider } from '@farcaster/auth-client';
import { AuthKitProvider, useSignIn, type UseSignInArgs } from '@farcaster/auth-kit';

import '@farcaster/auth-kit/styles.css';

// declares locally in '@farcaster/auth-kit', but it is not exported
interface AuthKitConfig {
  relay?: string;
  domain?: string;
  siweUri?: string;
  rpcUrl?: string;
  redirectUrl?: string;
  version?: string;
  provider?: Provider;
}

interface IFarcasterContext extends Partial<ReturnType<typeof useSignIn>> {
  farcasterSupported: boolean;
  farcasterLogin: () => void;
}

const FarcasterContext = React.createContext<IFarcasterContext>({
  farcasterSupported: false,
  farcasterLogin: () => {},
});

const FarcasterConfigProvider: React.FC<React.PropsWithChildren<UseSignInArgs>> = ({
  children,
  ...signInArgs
}) => {
  const signInState = useSignIn(signInArgs);
  const { isError, reconnect, signIn, channelToken, connect } = signInState;

  const farcasterLogin = useCallback(() => {
    if (isError) {
      reconnect();
    }
    signIn();
  }, [isError, reconnect, signIn]);

  useEffect(() => {
    if (!channelToken) {
      connect();
    }
  }, [channelToken, connect]);

  return (
    <FarcasterContext.Provider value={{ farcasterSupported: true, farcasterLogin, ...signInState }}>
      {children}
    </FarcasterContext.Provider>
  );
};

interface Web3FarcasterProviderProps extends UseSignInArgs {
  config?: AuthKitConfig;
}

export const useFarcaster = () => {
  const farcaster = React.useContext(FarcasterContext);
  return farcaster;
};

export const FarcasterWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<Web3FarcasterProviderProps>
> = ({ children, config = {}, ...signInArgs }) => {
  return (
    <AuthKitProvider config={config}>
      <FarcasterConfigProvider {...signInArgs}>{children}</FarcasterConfigProvider>
    </AuthKitProvider>
  );
};
