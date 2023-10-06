import React, { useEffect } from 'react';
import { Tooltip } from 'antd';
import { Chains } from '../Web3ConfigProvider';
import useProvider from '../hooks/useProvider';
import useCurrentAccount from '../hooks/useCurrentAccount';
import { Address } from '../Address';

export interface BrowserLinkProps {
  icon?: boolean | React.ReactNode;
  ellipsis?: boolean;
  address?: string;
  href?: string;
}

export const BrowserLink: React.FC<BrowserLinkProps> = (props) => {
  const { icon, ellipsis, address, href } = props;
  const { provider } = useProvider();

  const { account, refresh } = useCurrentAccount();
  const getAccount = async () => {
    await provider?.requestAccounts();
    await refresh();
  };

  useEffect(() => {
    if (!address) {
      getAccount();
    }
  }, []);

  const mergedAddress = (address || account?.address) ?? '';
  const mergedHref = href || `${provider?.chain ?? Chains.EthereumMainnet}${mergedAddress}`;

  return (
    <Tooltip title={mergedAddress}>
      <a href={mergedHref}>{icon || <Address ellipsis={ellipsis} address={mergedAddress} />}</a>
    </Tooltip>
  );
};
