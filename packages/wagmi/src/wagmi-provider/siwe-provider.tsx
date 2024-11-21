import React, { type PropsWithChildren } from 'react';
import { useSignMessage } from 'wagmi';

import { type SIWEConfig } from '../interface';
import { type AntDesignWeb3ConfigProviderProps } from './config-provider';

const SiweConfigProvider: React.FC<PropsWithChildren & { siwe?: SIWEConfig }> = ({
  children,
  siwe,
}) => {
  const { signMessageAsync } = useSignMessage();

  return React.cloneElement(children as React.ReactElement<AntDesignWeb3ConfigProviderProps>, {
    siwe: siwe
      ? {
          ...siwe,
          signMessage: signMessageAsync,
        }
      : undefined,
  });
};

export default SiweConfigProvider;
