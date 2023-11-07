import { WagmiConfig } from 'wagmi';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export type WagmiWeb3ConfigProviderProps = typeof WagmiConfig;

export const WagmiWeb3ConfigProvider: WagmiWeb3ConfigProviderProps = (props) => {
  const { children, ...restProps } = props;

  return (
    <WagmiConfig {...restProps}>
      <AntDesignWeb3ConfigProvider>{children}</AntDesignWeb3ConfigProvider>
    </WagmiConfig>
  );
};
