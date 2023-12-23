import { CryptoPriceBalance } from './balance';
import { ConfigProvider } from 'antd';
import { useContext } from 'react';
import { useStyle } from './style';
import type { Chain } from '@ant-design/web3-common';
import { Mainnet } from '@ant-design/web3-assets';
import useProvider from '../hooks/useProvider';

export interface CryptoPriceProps {
  className?: string;
  value?: bigint;
  symbol?: string;
  decimals?: number;
  chain?: Chain;
  icon?: boolean | React.ReactNode;
  fixed?: number;
}

export const CryptoPrice: React.FC<CryptoPriceProps> = (props) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-crypto-balance');
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const { className, chain: userConfigChain } = props;
  const { chain = Mainnet } = useProvider({
    chain: userConfigChain,
  });
  const {
    value = 0n,
    symbol = chain.nativeCurrency?.symbol ?? 'ETH',
    decimals = chain.nativeCurrency?.decimals ?? 18,
    fixed,
    icon = false,
  } = props;

  return wrapSSR(
    <CryptoPriceBalance
      fixed={fixed}
      value={value}
      symbol={symbol}
      decimals={decimals}
      className={className}
      hashId={hashId}
      icon={icon === true ? chain.nativeCurrency?.icon : icon}
    />,
  );
};

CryptoPrice.displayName = 'CryptoPrice';
