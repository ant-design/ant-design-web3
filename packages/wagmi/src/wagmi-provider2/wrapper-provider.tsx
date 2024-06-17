import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export interface WrapperWeb3ConfigProviderProps {
  queryClient?: QueryClient;
}

export const WrapperWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<WrapperWeb3ConfigProviderProps>
> = ({ children, queryClient }) => {
  return <QueryClientProvider client={queryClient!}>{children}</QueryClientProvider>;
};
WrapperWeb3ConfigProvider.displayName = 'WrapperWeb3ConfigProvider';
